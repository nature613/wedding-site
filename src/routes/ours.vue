<template>

	<div class="alternate-container">
		<div class="overlay"></div>
		<main>
			<site-header></site-header>
			<section>
				<h2>Admin</h2>
				<div class="ui accordion">
					<div class="title">
						<i class="dropdown icon"></i>
						Categories
					</div>
					<div class="content">
						<div class="transition visible">
							<add-category></add-category>
						</div>
					</div>
				</div>
				<div class="ui accordion">
					<div class="title">
						<i class="dropdown icon"></i>
						Vendor Tasks/Checklist
					</div>
					<div class="content">
						<div class="transition hidden">
							<add-task></add-task>
						</div>
					</div>
				</div>
				<div class="ui accordion">
					<div class="title">
						<i class="dropdown icon"></i>
						Todos
					</div>
					<div class="content">
						<div class="transition hidden">
							<add-todos></add-todos>
						</div>
					</div>
				</div>
				<div class="ui accordion">
					<div class="title">
						<i class="dropdown icon"></i>
						Our Wedding Guests
					</div>
					<div class="content">
						<div class="transition hidden">
							<guests></guests>
						</div>
					</div>
				</div>
			</section>
		</main>
		<site-footer></site-footer>
	</div>

</template>

<script>

	import AddCategory from '../components/add-category.vue'
	import AddTask from '../components/add-task.vue'
	import AddTodos from '../components/add-todos.vue'
	import Guests from '../components/guests.vue'
	import SiteFooter from '../components/site-footer.vue'
	import SiteHeader from '../components/site-header.vue'

	const methods = require('../scripts/common.js')

	export default {

		components: {
			SiteFooter,
			SiteHeader,
			AddTask,
			AddCategory,
			AddTodos,
			Guests
		},
		methods: {
			methods
		},
		mounted() {
			this.$ga.page(this.$router)
			$('.ui.accordion').accordion({
				exclusive: true,
				collapsible: true
			})
		}
	}

</script>

<style scoped lang="sass">

.alternate-container
	@include size(100%, 100%)
	background: transparent url('../assets/stock/david-and-dacia.jpg') no-repeat 50% 0 fixed
	background-size: cover
	color: $text
	position: relative

	.overlay
		@include rem(margin, 0)
		background-color: $background3c

	main
		@include rem(margin, 0 auto)
		@include rem(padding, 20px 20px 45px)
		@include size(100%, 100%)
		max-width: 1400px
		overflow-y: auto
		position: relative
		text-align: left
		z-index: 3

		@include tablet-xlarge
			@include rem(padding-top, 30px)
			height: 100%

		@include tablet
			padding-left: 0
			padding-right: 0

		section
			@include rem(margin, 80px 80px 50px auto)
			max-width: 76%

			@include desktop
				@include rem(margin-right, 70px)

			@include tablet-xlarge
				margin: 0
				max-width: none

			.ui.table
				tr
					td
						font-size: 1rem

</style>
