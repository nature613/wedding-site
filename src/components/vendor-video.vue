<template>
	<section ref="category">
		<h3>{{ cat.title }} Information</h3>
		<div class="ui icon message">
			<i class="icon" :class="cat.icon"></i>
			<div class="content">
				<div class="header">
					{{ cat.user }}
				</div>
				<p><b><em>{{ cat.title }}</em></b>: {{ cat.description }}</p>
				<p>This page should have all the information you need for our event. Thank you again for doing this for us.</p>
			</div>
		</div>

		<div class="ui raised segment">
			<h3>{{ cat.title }} Listing</h3>
			<div class="listing">
				<div class="ui middle aligned divided list">
					<div v-for="task in tasks" :key="task.id" class="item" :class="[ task.completed ? ' completed' : '' ]" v-if="task.category === cat.category">
						<div class="content" v-on:click="toggleComplete(task)" v:on.onmousedown="runAnalytics(task)">
							<span></span>
							<div class="text">{{ task.theTask }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

	import * as firebase from 'firebase'
	import { db, tasksRef, categoriesRef } from '../datastore'

	export default {
		firebase: {
			tasks: tasksRef,
			categories: categoriesRef
		},
		computed: {
			cat: function () {
				return this.categories.find(category => category.category === 'venue')
			}
		},
		methods: {
			toggleComplete: function (task) {
				this.$ga.event('Tasks', 'click', 'removed task')
				task.completed = !task.completed
				this.$firebaseRefs.tasks.child(task['.key']).child('completed').set(task.completed)
			},
			runAnalytics(title) {
				this.$ga.event('Vendor - Video', 'click', title)
			}
		}
	}

</script>

<style scoped lang="sass">

h3
	font-size: 3rem

.ui.message.icon
	background-color: $background3
	color: $text

	> i.icon:not(.close)
		font-size: 3em

	.header
		font-size: 200%

	p
		b
			em
				color: $text8

</style>
