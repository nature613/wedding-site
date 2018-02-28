<template>
	<section ref="category" id="unassigned">
		<div class="ui link cards">
			<div class="card" v-for="cat of categories" :key="cat.id">
				<div class="image">
					<router-link append class="button-link" :to="{ path: cat.url }" v:on.onmousedown="runAnalytics(cat.title)">
						<i class="icon " :class="cat.icon"></i>
					</router-link>
				</div>
				<div class="content">
					<div class="meta">
						<router-link append class="button-link button" :to="{ path: cat.url }" v:on.onmousedown="runAnalytics(cat.title)">
							<span>{{ cat.title }}</span>
						</router-link>
					</div>
					<div class="description">{{ cat.description }}</div>
				</div>
				<div class="extra content">
					<span>
						<i class="empty heart icon"></i>
						{{ cat.user }}
					</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

	import * as firebase from 'firebase'
	import { db, categoriesRef, tasksRef } from '../datastore'

	export default {
		firebase: {
			categories: categoriesRef,
			tasks: tasksRef
		},
		methods: {
			toggleComplete: function (task) {
				this.$ga.event('Tasks', 'click', 'removed task')
				task.completed = !task.completed
				this.$firebaseRefs.tasks.child(task['.key']).child('completed').set(task.completed)
			},
			runAnalytics(title) {
				this.$ga.event('Vendor - Unassigned', 'click', title)
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
