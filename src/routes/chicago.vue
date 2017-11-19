<template>
	<chicago-map ref="chicago-map" :todos="sortedTodos" id="chicago" class="wrapper">
		<site-header :class="{ disappear: infoWinOpen || isGettingPlaceDetails }"></site-header>
		<div :class="[ showDetails ? 'overlay' : 'overlay invisible-content' ]"></div>

		<div id="details" :class="[ showDetails ? 'show-content' : 'hide-content' ]">
			<chicago-details></chicago-details>
		</div>

		<main>
			<div class="ui grid">
				<div class="ui container">
					<div class="one wide column"></div>
					<div class="fourteen wide column">
						<div class="container">
							<div id="filtering" class="content">
								<span>{{ sortedTodos.length}}</span> items
								<div class="ui input">
									<input v-model="search" @focus="showDetails = false, closeInfoWindow()" placeholder="Filter by type, name/title, location, category, or price">
									<a class="has-icon" @click="showDetails = !showDetails, closeInfoWindow()"><i class="fal fa-info-square"></i> <span v-text="showDetails ? 'Hide Details' : 'Show Details'">{{ details }}</span></a>
								</div>

								<p class="note">Filter results by name/title, location, category, or price point below. You can sort the columns in the table.</p>
							</div>

							<div id="chicago-todos" class="infinite">
								<div class="ui compact inverted unstackable table">
									<div class="block">
										<div class="ui grid column">
											<div class="ui ten wide computer sixteen wide tablet sixteen wide mobile column">
												<span v-for="columnTodo of columnsTodo" :key="columnTodo.id">
													<i :class="{ active: sortKey == columnTodo, sorted: reverse }" class="sort ascending icon"></i>
													<i :class="{ active: sortKey == columnTodo, sorted: !reverse }" class="sort descending icon"></i>
													<a @click="sortBy(columnTodo), showDetails = false, closeInfoWindow()" :class="{ active: sortKey == columnTodo }">{{ columnTodo }}</a>
												</span>
											</div>
											<div class="ui six wide computer sixteen wide tablet sixteen wide mobile column">
												<span>
													<i class="filter icon"></i>
													<a class="has-icon" data-inverted data-tooltip="For our guests flying into Chicago, please use airport code MDW for Midway airport or ORD for O'Hare airport. Our advice, fly into Midway for less traffic upon arrival/departure. INCLUDE HOTEL BLOCKING INFORMATION" data-position="top center" @click="search = 'Hotel', showDetails = false, closeInfoWindow()" :class="{ active: search == 'Hotel' }">
														<i class="fas fa-bed"></i>
													</a>

													<a class="has-icon" data-inverted data-tooltip="These are places David + I actually go to/went to over the last few years. We love a good meal, so while in town, please checkout some of our recommendations." data-position="top center" @click="search = 'Restaurant', showDetails = false, closeInfoWindow()" :class="{ active: search == 'Restaurant' }">
														<i class="fas fa-utensils"></i>
													</a>

													<a class="has-icon" data-inverted data-tooltip="If you are looking for things to do while in town, we recommend some tourist attractions, karoake bars, game room, lounges, etc for all price points and in all age groups." data-position="top center" @click="search = 'Activity', showDetails = false, closeInfoWindow()" :class="{ active: search == 'Activity' }">
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
												<a :href="'https://www.google.com/maps/place/' + todo.title + '/@' + todo.position.lat + ',' + todo.position.lng + ',19z'" target="_blank"><span class="nowrap truncate">{{ todo.title }}</span></a>
												<span v-if="todo.note" data-inverted="" :data-tooltip="todo.note" data-position="top left"><i class="fas fa-comment"></i></span>
											</td>
											<td>
												<a class="has-icon" @click="showDetails = false, toggleInfoWindow(todo)" data-inverted="" data-tooltip="Click icon to see on map" data-position="top left"><i class="fas fa-map-marker-alt"></i></a>
												<span>{{ todo.location }}</span>
											</td>
											<td><span>{{ todo.category }}</span></td>
											<td><span>{{ todo.price }}</span></td>
										</tr>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div class="one wide column"></div>
				</div>
			</div>
		</main>
		<site-footer></site-footer>
	</chicago-map>
</template>

<script>

	import ChicagoDetails from '../components/chicago-details.vue'
	import ChicagoMap from '../components/chicago-map.vue'
	import SiteFooter from '../components/site-footer.vue'
	import SiteHeader from '../components/site-header.vue'

	export default {
		components: {
			ChicagoDetails,
			ChicagoMap,
			SiteFooter,
			SiteHeader
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
				todos: require('../todos.json'),
				itemHeight: 51
			}
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
			sortBy(sortKey) {
				this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false
				this.sortKey = sortKey
			},
			addTodo() {
				this.todos.push(this.newTodo)
				this.newTodo = {}
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
			}
		},
		mounted() {
			$('.infinite .table .block')
			.visibility({
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

<style lang="sass" scoped>

	@import '../styles/main.sass'

	#chicago
		background: $background3

		h2
			@include animation(1s fadeIn forwards)
			margin-bottom: 2rem !important

		#details
			@include abs-pos(110px, 0, 0, 0)
			@include animation(1s fadeIn forwards)
			@include rem(margin, 0 auto 20px)
			@include transform(-50%, 10%)
			max-width: 1024px
			z-index: 3

		main
			@include rem(margin-top, 20px)
			@include rem(padding, 0)
			position: relative
			z-index: 5

			@include tablet-small
				@include rem(padding-left, 20px)
				@include rem(padding-right, 20px)

			#filtering
				@include rem(margin-bottom, 5px)

				span
					color: $color-gold
					font: 600 28px $font-stack-sans-serif

				> div
					@include rem(margin-left, 15px)

				.ui.input
					width: 58%

					@include tablet-large
						width: 84%

					@include tablet-small
						width: 80%

					@include phablet-large
						width: 70%

					input
						@include animation(1s fadeIn forwards)
						@include rem(padding, 7px)
						display: inline-block
						height: 30px
						width: 70%

					input ~ a
						@include rem(margin, 2.5px 0 0 15px)
						border: 0 none
						display: inline-block
						font-size: 17px

						span
							@include rem(margin, 0)
							color: $anchor-text2
							display: inline
							font-size: 12px
							position: relative
							top: -4px

							@include mobile
								display: none

							&:hover
								color: $text

							i
								@include rem(top, -1.5px)

				.note
					@include rem(margin, 5px 0 25px)
					font-size: 15px

		#header
			@include abs-pos(0, auto, auto, auto)
			width: 100%

	.container
		margin-top: 20px !important

		@include mobile
			margin-left: 0 !important
			margin-right: 0 !important

		.table
			position: relative

			@include mobile-small
				font-size: 1rem

			.block
				@include animation(1s fadeIn forwards)
				@include rem(padding, 15px 10px)
				background: $color-grey-dark2
				margin-bottom: 0
				position: relative
				width: 100%
				z-index: 6

				&.fixed
					left: 0 !important
					position: fixed

					.wide
						@include tablet-large
							width: 62.5% !important

							&:last-of-type
								width: 37.5% !important

						@include tablet
							width: 100% !important

							&:last-of-type
								width: 100% !important

				&.placeholder
					height: 80px

					@include tablet
						height: auto

				.ui.column.grid > [class*="sixteen wide"].column,
				.ui.grid > .column.row > [class*="sixteen wide"].column,
				.ui.grid > .row > [class*="sixteen wide"].column,
				.ui.grid > [class*="sixteen wide"].column
					@include mobile
						@include rem(padding-left, 5px)
						@include rem(padding-right, 5px)

				span
					@include rel-pos(2px, auto, auto, auto)
					@include rem(margin, 0 0 0 5px)
					display: inline-block

					&:first-of-type
						@include rem(margin-left, 0)

				.wide
					&:last-of-type
						text-align: right

						span
							top: -2px

							a
								@include animation(1s fadeIn forwards)
								@include rem(margin-right, 10px)
								@include rem(padding, 1px 5px)
								border: 2px solid $background5
								cursor: pointer
								display: inline-block
								min-width: 60px
								text-align: center

								&:last-of-type
									@include rem(margin-right, 5px)

								&.active,
								&:hover
									border-color: $text

									i
										color: $text

								i
									@include rem(margin, 0)
									@include rem(top, 1.5px)
									position: relative

									@include tablet-large
										font-size: 1.5rem

			table
				width: 100%

				td
					@include tablet-large
						padding-right: 0

					&:last-of-type
						span
							color: $color-green
							font-size: 22px

					&:nth-of-type(2)
						@include phablet-large
							@include rem(padding-left, 0)

						span
							@include rem(margin-left, 0)
							display: inline-block
							font-size: 20px

							@include phablet-large
								font-size: 18px

							@include mobile-xsmall
								font-size: 17px

							&:hover
								cursor: pointer

								i
									color: $anchor-text2

					&:nth-of-type(3)
						@include mobile
							@include rem(padding-left, 0)
							@include rem(padding-right, 0)

						@include mobile-xsmall
							display: none

						span
							@include tablet-large
								display: none

					&:nth-of-type(4),
					&:last-of-type
						span
							@include mobile
								display: none

						@include mobile-xsmall
							display: none

</style>
