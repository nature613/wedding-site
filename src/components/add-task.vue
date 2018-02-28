<template>
	<div class="ui raised segment add-block">
		<vue-form :state="formTasks" ref="form" v-model="formTasks" @submit.prevent="addTask">
			<div class="ui form">
				<fieldset class="form-group">
					<legend>Add a task and pick a category to assign the task to</legend>
					<div class="ui input form-item" :class="[ active ? ' selected' : '' ]">
						<input v-model="newTask.theTask" class="custom" placeholder="Task/Todo" name="theTask">
					</div>

					<div class="field">
						<div class="form-item custom" :class="[ active ? ' selected' : '' ]">
							<div class="form-group">
								<div class="ui selection dropdown">
									<input type="hidden" v-model="newTask.category" name="newTask.category" @change="newTask.category = $event.target.value">
									<i class="dropdown icon"></i>
									<div class="default text">Select a category</div>
									<div class="menu">
										<div v-for="cat of categories" :key="cat.id" class="item" :data-value="cat.category">
											<i class="icon" :class="cat.icon"></i> {{ cat.category }}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="inline field">
							<div class="ui slider checkbox">
								<input type="checkbox" v-model="newTask.type" class="hidden" v-on:click="toggleChecklist(task)">
								<label>Is this a checklist task?</label>
							</div>
							<label></label>
						</div>
					</div>
				</fieldset>
			</div>

			<button type="submit" class="button" role="button" aria-disabled="false"><span>Add task</span></button>
		</vue-form>

		<div class="container">
			<h3>Tasks</h3>
			<div id="filtering" class="content">
				<span>{{ sortedTasks.length }}</span> tasks
				<div class="ui input">
					<input v-model="searchTasks" class="custom" placeholder="Filter">
				</div>
			</div>
			<div class="infinite">
				<div class="ui compact inverted unstackable table">
					<div class="block">
						<div class="flex-container">
							<div class="column">
								<span v-for="columnTask of columnsTask" :key="columnTask.id">
									<i :class="{ active: sortKey == columnTask, sorted: reverse }" class="sort ascending icon"></i>
									<i :class="{ active: sortKey == columnTask, sorted: !reverse }" class="sort descending icon"></i>
									<a @click="sortBy(columnTask)" :class="{ active: sortKey == columnTask }">{{ columnNames[columnTask] }}</a>
								</span>
								<span class="filters">
									<i class="filter icon"></i>
									<a class="has-icon" v-for="filterCat of categories" :key="filterCat.id" @click="searchTasks = filterCat.category" :class="{ active: searchTasks == filterCat.category }">
										<i class="icon" :class="filterCat.icon"></i>
									</a>
								</span>
							</div>
						</div>
					</div>
					<table>
						<tr v-for="task of sortedTasks" :key="task.id">
							<td><i class="remove circle icon yellow" v-on:click="removeTask(task)"></i></td>
							<td :class="{ completed: task.completed, editing: task == editedTask }">
								<div class="view" @click="editTask(task)">
									<i class="icon " :class="task.icon" v-if="task.icon"></i>
									<span>{{ task.category }}</span>
								</div>
								<div class="ui input">
									<input class="custom" type="text" name="icon" v-model="task.icon" @focusout="iconFocusOut($event)" @keyup.enter="doneEdit(task)" @keyup.esc="cancelEdit(task)">

									<input class="custom" type="text" name="category" v-model="task.category" @focusout="categoryFocusOut($event)" @keyup.enter="doneEdit(task)" @keyup.esc="cancelEdit(task)">
								</div>
							</td>
							<td><span v-if="task.type"><i class="checkmark box icon green"></i></span></td>
							<td :class="{ completed: task.completed, editing: task == editedTask }">
								<div class="view" @click="editTask(task)">
									<span>{{ task.theTask }}</span>
								</div>
								<div class="ui input">
									<input class="custom" type="text" v-model="task.theTask" v-task-focus="task == editedTask" @blur="doneEdit(task)" @keyup.enter="doneEdit(task)" @keyup.esc="cancelEdit(task)">
								</div>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import * as firebase from 'firebase'
	import { db, tasksRef, categoriesRef } from '../datastore'
	import moment from 'moment'

	export default {
		data: function () {
			return {
				formTasks: {},
				active: false,
				newTask: {
					theTask: '',
					category: '',
					icon: '',
					type: false,
					completed: false
				},
				sortKey: 'category',
				nextSortKey: 'category',
				searchTasks: '',
				reverse: false,
				columnsTask: ['category', 'theTask'],
				columnNames: {
					type: 'checklist',
					category: 'category',
					theTask: 'task'
				},
				itemHeight: 51,
				editedTask: null
			}
		},
		firebase: {
			tasks: tasksRef,
			categories: categoriesRef
		},
		computed: {
			sortedTasks: function () {
				let sorted = this.tasks
					.map(task => ({ category: '', completed: false, icon: '', theTask: '', type: false, ...task }))
					.sort((a, b) => {
						const a1 = a[this.sortKey]
						const b1 = b[this.sortKey]

						if (a1 < b1) {
							return -1
						} else if (b1 < a1) {
							return 1
						}

						const a2 = a[this.nextSortKey]
						const b2 = b[this.nextSortKey]

						if (a2 < b2) {
							return -1
						} else if (b2 < a2) {
							return 1
						}

						return 0
					})

				if (this.reverse) {
					sorted = sorted.reverse()
				}

				return filterTasks(sorted, this.searchTasks, this.columnsTask)
			}
		},
		methods: {
			formatDate: function (date) {
				return moment(date).format('llll')
			},
			sortBy(sortKey) {
				this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false
				this.sortKey = sortKey
				this.$ga.event('Sort tasks', 'click', sortKey)
			},
			runAnalytics(title) {
				this.$ga.event('Tasks', 'click', title)
			},
			addTask: function () {
				this.$ga.event('Tasks', 'click', 'new task')
				if (this.formTasks.$valid) {
					this.$firebaseRefs.tasks.push({
						theTask: this.newTask.theTask,
						category: this.newTask.category,
						icon: this.newTask.icon,
						type: this.newTask.type,
						completed: false,
						date: Date.now()
					})
					this.newTask.theTask = ''
					this.newTask.category = ''
					this.newTask.icon = ''
					this.newTask.type = false
					window.scrollTo( 0, 0 )
				}
			},
			toggleChecklist: function (task) {
				this.$ga.event('Tasks', 'click', 'is checklist')
				task.type = !task.type
			},
			removeTask: function (task) {
				this.$ga.event('Tasks', 'click', 'removed task')
				this.$firebaseRefs.tasks.child(task['.key']).remove()
			},
			editTask: function (task) {
				this.$ga.event('Tasks', 'click', 'edit task')
				this.beforeEditCache = this.newTask.theTask
				this.editedTask = task
			},
			doneEdit: function (task) {
				if (!this.editedTask) {
					return
				}
				this.editedTask = null
				task.icon = task.icon.trim()
				task.category = task.category.trim()
				task.theTask = task.theTask.trim()
				if (!task.theTask) {
					this.removeTask(task)
				}
				this.$firebaseRefs.tasks.child(task['.key']).update({
					icon: task.icon,
					category: task.category,
					theTask: task.theTask
				})
			},
			iconFocusOut: function (evt) {
				const icon = document.getElementsByName("icon")
				if (evt.relatedTarget !== icon) {
					this.doneEdit(this.editedCategory)
				}
			},
			categoryFocusOut: function (evt) {
				const category = document.getElementsByName("category")
				if (evt.relatedTarget !== category) {
					this.doneEdit(this.editedCategory)
				}
			},
			cancelEdit: function (task) {
				this.editedTask = null
				task.theTask = this.beforeEditCache
			}
		},
		mounted() {
			this.$ga.page(this.$router)
			$('.ui.checkbox').checkbox()
			$('.ui.dropdown').dropdown({
				showOnFocus: true,
				allowTab: true
			})
		},
		directives: {
			'task-focus': function (el, binding) {
				if (binding.value) {
					el.focus()
				}
			}
		}
	}

	/**
	 * @param {array} array
	 * @param {string} term
	 * @param {string[]} properties
	 */
	function filterTasks(array, term, properties) {
		term = term.toLowerCase()
		return array.filter(t => properties.some(p => t[p].toLowerCase().indexOf(term) !== -1))
	}

</script>

<style scoped lang="sass">

	h3
		font-size: 2.5rem

	.flex-container	> *
		&:last-of-type
			margin-left: 0

	.ui.segment
		&.add-block
			.container
				.ui.table
					table
						tr
							td
								&:first-of-type,
								&:nth-of-type(3)
									width: 20px

								&:nth-of-type(2)
									width: 120px

								&:last-of-type
									width: auto

								&.editing
									.ui.input
										@include flex-container()
										@include align-content-stretch()

										input
											@include rem(margin-right, 15px)
											flex: 1 auto

											@include tablet
												@include rem(margin-bottom, 20px)
												margin-right: 0
												flex: none
												width: 100%

											&:last-of-type
												margin-left: auto
												text-transform: capitalize

												@include tablet
													margin-left: 0

											&:first-of-type
												width: calc(20% - 1.55rem)

												@include tablet
													width: 100%

</style>

