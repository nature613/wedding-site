<template>
	<div class="ui raised segment add-block">
		<div id="filtering" class="content">
			<span>{{ categories.length }}</span> categories
		</div>

		<div class="flex-container">
			<vue-form :state="formCategories" ref="form" v-model="formCategories" @submit.prevent="addCategory">
				<div class="ui form">
					<fieldset class="form-group">
						<legend>Add a category</legend>
						<div class="ui input form-item" :class="[ active ? ' selected' : '' ]">
							<input v-model="newCategory.category" class="custom" placeholder="category" name="category">
						</div>

						<div class="ui input form-item" :class="[ active ? ' selected' : '' ]">
							<input v-model="newCategory.icon" class="custom" placeholder="icon class" name="icon">
						</div>
					</fieldset>
				</div>

				<button type="submit" class="button" role="button" aria-disabled="false"><span>Add category</span></button>
			</vue-form>

			<div class="container">
				<div class="infinite">
					<div class="ui compact inverted unstackable table">
						<table>
							<tr v-for="cat of categories" :key="cat.id">
								<td><i class="remove circle icon yellow" v-on:click="removeCategory(cat)"></i></td>
								<td :class="{ editing: cat == editedCategory }">
									<div class="view" @click="editCategory(cat)">
										<i class="icon " :class="cat.icon" v-if="cat.icon"></i>
										<span>{{ cat.category }}</span>
									</div>
									<div class="ui input">
										<input class="custom" type="text" name="icon" v-model="cat.icon" @focusout="iconFocusOut($event)" @keyup.enter="doneEdit(cat)" @keyup.esc="cancelEdit(cat)">

										<input class="custom" type="text" name="category" v-model="cat.category" @focusout="categoryFocusOut($event)" @keyup.enter="doneEdit(cat)" @keyup.esc="cancelEdit(cat)">
									</div>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import * as firebase from 'firebase'
	import { db, categoriesRef } from '../datastore'

	export default {
		data: function () {
			return {
				formCategories: {},
				active: false,
				newCategory: {
					category: '',
					icon: ''
				},
				itemHeight: 51,
				editedCategory: null
			}
		},
		firebase: {
			categories: categoriesRef
		},
		methods: {
			runAnalytics(title) {
				this.$ga.event('Categories', 'click', title)
			},
			addCategory: function () {
				this.$ga.event('Categories', 'click', 'new category')
				if (this.formCategories.$valid) {
					this.$firebaseRefs.categories.push({
						category: this.newCategory.category,
						icon: this.newCategory.icon
					})
					this.newCategory.category = ''
					this.newCategory.icon = ''
					window.scrollTo( 0, 0 )
				}
			},
			removeCategory: function (cat) {
				this.$ga.event('Categories', 'click', 'removed category')
				this.$firebaseRefs.categories.child(cat['.key']).remove()
			},
			editCategory: function (cat) {
				this.$ga.event('Categories', 'click', 'edit category')
				this.beforeEditCache = this.newCategory
				this.editedCategory = cat
			},
			doneEdit: function (cat) {
				if (!this.editedCategory) {
					return
				}
				this.editedCategory = null
				cat.category = cat.category.trim()
				cat.icon = cat.icon.trim()
				if (!cat.category) {
					this.removeCategory(cat)
				}
				this.$firebaseRefs.categories.child(cat['.key']).update({
					category: cat.category,
					icon: cat.icon
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
			cancelEdit: function (cat) {
				this.editedCategory = null
				cat.category = this.beforeEditCache
				cat.icon = this.beforeEditCache
			}
		},
		mounted() {
			this.$ga.page(this.$router)
		}
	}

</script>

<style scoped lang="sass">
	.ui.segment
		&.add-block
			.flex-container
				form,
				.container
					flex: 50% 1 1
					max-width: none

			form
				.form-item
					@include rem(margin-bottom, 15px)

					&:last-of-type
						width: 45%

			.container
				@include rem(margin-left, 15px)
				margin-top: 0

				.ui.table
					table
						tr
							td
								&:first-of-type
									width: 20px

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

