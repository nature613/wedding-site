<template>
	<chicago-map ref="chicago-map" :todos="sortedTodos" id="chicago" class="wrapper">
		<div class="overlay" :class="[ showDetails ? '' : ' invisible-content' ]"></div>

		<div id="details" :class="[ showDetails ? 'show-content' : 'hide-content' ]">
			<chicago-details></chicago-details>
		</div>

collaspible view of categories
separate into own tables/view

		<main>
			<div id="filtering" class="content">
				<span>{{ sortedTodos.length}}</span> things to do
				<div class="ui input">
					<input v-model="search" class="custom" @focus="showDetails = false, closeInfoWindow()" placeholder="Filter results...">
					<a class="has-icon" @click="showDetails = !showDetails, closeInfoWindow(), runAnalytics('show/hide details')"><i class="fal fa-info-square"></i> <span v-text="showDetails ? 'Hide Details' : 'Show Details'">{{ details }}</span></a>
				</div>

				<p class="note">Filter results by name/title, location, category, or price point below. You can sort the columns in the table.</p>
			</div>

			<div id="chicago-todos" class="infinite">
				<div class="ui compact inverted unstackable table">
					<div class="block">
						<div class="flex-container">
							<div class="column">
								<span v-for="(columnTodo, index) of columnsTodo" :key="columnTodo.id" :class="[ index === 2 ? ' desktop-only' : '', index === 3 ? ' not-on-mobile' : '', index === 4 ? ' not-on-sm-mobile' : '' ]">
									<i :class="{ active: sortKey == columnTodo, sorted: reverse }" class="sort ascending icon"></i>
									<i :class="{ active: sortKey == columnTodo, sorted: !reverse }" class="sort descending icon"></i>
									<a @click="sortBy(columnTodo), showDetails = false, closeInfoWindow()" :class="{ active: sortKey == columnTodo }">{{ columnTodo }}</a>
								</span>
							</div>
							<div class="column not-on-tablet">
								<span>
									<i class="filter icon"></i>
									<a class="has-icon" data-inverted data-tooltip="For our guests flying into Chicago, please use airport code MDW for Midway airport or ORD for O'Hare airport. Our advice, fly into Midway for less traffic upon arrival/departure. INCLUDE HOTEL BLOCKING INFORMATION" data-position="top center" @click="search = 'Hotel', showDetails = false, closeInfoWindow(), runAnalytics('Filter Hotels')" :class="{ active: search == 'Hotel' }">
										<i class="fas fa-bed"></i>
									</a>

									<a class="has-icon" data-inverted data-tooltip="These are places David + Dacia actually go to/went to over the last few years. We love a good meal, so while in town, please checkout some of our recommendations." data-position="top center" @click="search = 'Restaurant', showDetails = false, closeInfoWindow(), runAnalytics('Filter Restaurants')" :class="{ active: search == 'Restaurant' }">
										<i class="fas fa-utensils"></i>
									</a>

									<a class="has-icon" data-inverted data-tooltip="If you are looking for things to do while in town, we recommend some tourist attractions, karoake bars, game room, lounges, etc for all price points and in all age groups." data-position="top center" @click="search = 'Activity', showDetails = false, closeInfoWindow(), runAnalytics('Filter Activity')" :class="{ active: search == 'Activity' }">
										<i class="fas fa-ticket-alt"></i>
									</a>
								</span>
							</div>
						</div>
					</div>
					<table>
						<tr v-for="todo of sortedTodos" :key="todo.id">
							<td><i :class="'fas fa-' + todo.icon + ''"></i></td>
							<td>
								<a @click="showDetails = false, toggleInfoWindow(todo), runAnalytics(todo.location)"><span class="nowrap truncate" @click="runAnalytics(todo.title)">{{ todo.title }}</span></a>
								<span v-if="todo.note" data-inverted="" :data-tooltip="todo.note" data-position="top left"><i class="fas fa-comment"></i></span>
							</td>
							<td class="desktop-only location">
								<a class="has-icon" @click="showDetails = false, toggleInfoWindow(todo), runAnalytics(todo.location)" data-inverted="" data-tooltip="Click icon to see on map" data-position="top left"><i class="fas fa-map-marker-alt"></i></a>
								<span>{{ todo.location }}</span>
							</td>
							<td class="not-on-mobile"><span>{{ todo.category }}</span></td>
							<td class="not-on-sm-mobile"><span>{{ todo.price }}</span></td>
						</tr>
					</table>
				</div>
			</div>
		</main>
		<site-footer></site-footer>
	</chicago-map>
</template>

<script>

	import * as firebase from 'firebase'
	import { db, todosRef } from '../datastore'
	import ChicagoDetails from '../components/chicago-details.vue'
	import ChicagoMap from '../components/chicago-map.vue'
	import SiteFooter from '../components/site-footer.vue'

	const methods = require('../scripts/common.js')

	export default {
		components: {
			ChicagoDetails,
			ChicagoMap,
			SiteFooter
		},
		data: function () {
			return {
				details: 'Show Details',
				showDetails: true,
				infoWinOpen: false,
				isGettingPlaceDetails: false,
				sortKey: 'title',
				nextSortKey: 'title',
				reverse: false,
				search: '',
				showTodos: false,
				columnsTodo: ['type', 'title', 'location', 'category', 'price'],
				newTodo: {},
				itemHeight: 51
			}
		},
		firebase: {
			todos: todosRef
		},
		computed: {
			sortedTodos: function () {
				let sorted = this.todos.sort((a, b) => {
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

				return filter(sorted, this.search, this.columnsTodo)
			}
		},
		methods: {
			methods,
			sortBy(sortKey) {
				this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false
				this.sortKey = sortKey
				this.$ga.event('Chicago', 'click', sortKey)
			},
			scrollToMap() {
				window.scrollTo( 0, 0 )
			},
			closeInfoWindow() {
				this.$refs['chicago-map'].closeInfoWindow()
			},
			toggleInfoWindow(todo) {
				this.scrollToMap()
				this.$refs['chicago-map'].toggleInfoWindow(todo, this.sortedTodos.indexOf(todo))
			},
			runAnalytics(title) {
				this.$ga.event('Chicago', 'click', title)
			}
		},
		mounted() {
			this.$ga.page(this.$router)
			$('.infinite .table .block').visibility({
				type: 'fixed',
				offset : 0
			})
		}
	}

	/**
	 * @param {array} array
	 * @param {string} term
	 * @param {string[]} properties
	 */
	function filter(array, term, properties) {
		term = term.toLowerCase()
		return array.filter(t => properties.some(p => t[p].toLowerCase().indexOf(term) !== -1))
	}

</script>

<style lang="sass">
	.pushable > .pusher
		overflow: visible
</style>

<style lang="sass" scoped>

	@import '../styles/main.sass'

	#chicago
		background: $background3

		.overlay
			background: $background3b

		h2
			@include animation(2s fadeIn forwards)
			margin-bottom: 2rem !important

		#details
			@include abs-pos(60px, 0, 0, 50px)
			@include animation(2s fadeIn forwards)
			@include rem(margin, 0 auto 20px)
			@include transform(-50%, 10%)
			max-width: 1024px
			z-index: 3

			@include tablet-large
				max-width: 90%

		main
			.image-gallery
				@include rem(margin, 5px 0 15px)

				.flex-container
					justify-content: space-between

					img
						margin-left: 0

			.ui.table
				@include rem(margin-bottom, 40px)

				.block
					&.fixed
						background: $background3
						width: 100%

						a
							&:hover
								&[data-tooltip]:after,
								&[data-tooltip]:before
									visibility: hidden

					.flex-container
						@include rem(padding, 15px 20px)

						.column
							flex: 1 auto

							&:first-of-type
								flex-grow:

							span
								@include rem(margin-right, 20px)
								display: inline-block

								&:last-of-type
									margin-right: 0

								a
									@include rem(margin-right, 20px)

									&:last-of-type
										margin-right: 0

				table
					width: 100%

					tr
						td
							border: 0 none
							font-size: 1rem
							text-transform: capitalize

							&:last-of-type
								text-transform: uppercase

								span
									color: $color-green
									font-size: 22px

									@include mobile
										font-size: 14px

						&:hover
							background-color: $background2c

</style>
