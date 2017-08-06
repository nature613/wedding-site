<template>
	<chicago-map ref="chicago-map" :todos="sortedTodos" id="chicago" class="wrapper">
		<site-header :class="{ disappear: infoWinOpen || isGettingPlaceDetails }"></site-header>
		<div :class="[ showDetails ? 'overlay' : 'overlay invisible-content' ]"></div>
		<div id="details" :class="[ showDetails ? 'show-content' : 'hide-content' ]">
			<h2 class="display-3">Dacia + David's Guide to Chicago</h2>
			<div class="row">
				<div class="col-xl-6 pl-0">
					<p>The maps above and the list below contains an interactive list of hotels you can stay in, restaurants you should eat at, and places you must visit while in town! Use <a href="https://www.google.com/maps/d/viewer?mid=1eqOAzAKZAAVEJ-lGX4ffF-8fwt8&usp=sharing" target="_blank">Things to Do in Chicago</a> from Google Maps to help you build your own unique adventure while in Chicago. For help with getting around the city, we highly recommend that you download Waze.</p>
					<p class="get-app">Get <img src="../assets/logo-waze.png" alt="Download Waze"> here:
						<a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=9&cad=rja&uact=8&ved=0ahUKEwjutavCv9fRAhXq7oMKHZhrAOYQFghFMAg&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.waze%26hl%3Den&usg=AFQjCNHt2EI9vzs-myLRTSFo6GP0i1yxeA&sig2=QfORznwJxftrcgXUBtu1Xg" target="_blank" class="card-link download-app shadow">
							<img src="../assets/logo-google-play.png" alt="Download Waze">
						</a>
						<a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=10&cad=rja&uact=8&ved=0ahUKEwjutavCv9fRAhXq7oMKHZhrAOYQFghMMAk&url=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fwaze-gps-navigation-maps-social%2Fid323229106%3Fmt%3D8&usg=AFQjCNHXhQtfbbO7UjJEP5MZOsCIyT-4IA&sig2=Y_joW9Q9AGPYro6TFHY20Q" target="_blank" class="card-link download-app shadow">
							<img src="../assets/logo-apple-store.png" alt="Download Waze">
						</a>
					</p>
				</div>
				<div class="col-xl-6 pr-0">
					<div class="accordion-tabs">
						<div class="row">
							<div @click="hotelCollapse = !hotelCollapse, changeFilter()" :class="[ hotelCollapse ? 'item col-xl-4 active' : 'item col-xl-4' ]">
								<h4>
									<i class="fal fa-bed"></i>
									Hotels
									<a class="has-icon" v-b-toggle.collapseHotel variant="primary">
										<i :class="[ hotelCollapse ? 'fal fa-chevron-up' : 'fal fa-chevron-down' ]"></i>
									</a>
								</h4>
							</div>
							<div @click="restaurantCollapse = !restaurantCollapse, changeFilter()" :class="[ restaurantCollapse ? 'item col-xl-4 active' : 'item col-xl-4' ]">
								<h4>
									<i class="fal fa-utensils"></i>
									Restaurants
									<a class="has-icon" v-b-toggle.collapseRestaurant variant="primary">
										<i :class="[ restaurantCollapse ? 'fal fa-chevron-up' : 'fal fa-chevron-down' ]"></i>
									</a>
								</h4>
							</div>
							<div @click="activityCollapse = !activityCollapse, changeFilter()" :class="[ activityCollapse ? 'item col-xl-4 active' : 'item col-xl-4' ]">
								<h4>
									<i class="fal fa-ticket-alt"></i>
									Activities
									<a class="has-icon" v-b-toggle.collapseActivity variant="primary">
										<i :class="[ activityCollapse ? 'fal fa-chevron-up' : 'fal fa-chevron-down' ]"></i>
									</a>
								</h4>
							</div>
						</div>
					</div>

					<div class="accordion-content">
						<b-collapse v-model="hotelCollapse" id="collapseHotel" accordion="chicagoAccordion">
							<p class="card-text">For our guests flying into Chicago, please use airport code MDW for Midway airport or ORD for O'Hare airport. Our advice, fly into Midway for less congestion. INCLUDE HOTEL BLOCKING INFORMATION</p>
						</b-collapse>

						<b-collapse v-model="restaurantCollapse" id="collapseRestaurant" accordion="chicagoAccordion">
							<p class="card-text">These are places David and I actually go to/went to over the last few years. We love a good meal, so while in town, please checkout some of our recommendations.</p>
						</b-collapse>

						<b-collapse v-model="activityCollapse" id="collapseActivity" accordion="chicagoAccordion">
							<p class="card-text">If you are looking for things to do while in town, we recommend some tourist attractions, karoake bars, game room, lounges, etc for all price points and in all age groups.</p>
						</b-collapse>
					</div>
				</div>
			</div>
		</div>

		<main>
			<div class="container">
				<p class="mb-0">
					<span>{{ sortedTodos.length}}</span> items
					<input v-model="search" @focus="showDetails = false, closeInfoWindow()" class="form-control" placeholder="Filter by type, name/title, location, category, or price">
					<a class="has-icon" @click="showDetails = !showDetails, closeInfoWindow()"><i class="fal fa-info-square"></i> <span v-text="showDetails ? 'Hide Details' : 'Show Details'">{{ details }}</span></a>
					<em>
						<a class="has-icon" @click="search = 'Restaurant', showDetails = false, closeInfoWindow()" title="Show Restaurants"><i class="fas fa-utensils"></i></a>
						<a class="has-icon" @click="search = 'Activity', showDetails = false, closeInfoWindow()" title="Show Activities"><i class="fas fa-ticket-alt"></i></a>
						<a class="has-icon" @click="search = 'Hotel', showDetails = false, closeInfoWindow()" title="Show Hotels"><i class="fas fa-bed"></i></a>
					</em>
				</p>
				<div>
					<p class="note">Filter results by name/title, location, category, or price point below. You can sort the columns in the table.</p>

					<div id="chicago-todos">
						<virtual-scroller class="table" :item-height="itemHeight" :items="sortedTodos" page-mode main-tag="table" content-tag="tbody">
							<thead slot="before-content">
								<tr>
									<th v-for="columnTodo of columnsTodo" :key="columnTodo.id">
										<a @click="sortBy(columnTodo)" :class="{ active: sortKey == columnTodo }">{{ columnTodo }}</a>
									</th>
								</tr>
							</thead>
							<template scope="props">
								<tr :key="props.item.id">
									<td><i :class="'fas fa-' + props.item.icon + ''"></i></td>
									<td>
										<a :href="'https://www.google.com/maps/place/' + props.item.title + '/@' + props.item.position.lat + ',' + props.item.position.lng + ',19z'" target="_blank"><span class="nowrap">{{ props.item.title }}</span></a>
										<b-popover :delay="{show: 0, hide: 1000}" :triggers="['hover']" placement="right">
											<span slot="content">{{ props.item.note }}</span>
											<span v-if="props.item.note"><i class="fas fa-comment"></i></span>
										</b-popover>
									</td>
									<td>
										<a class="has-icon" @click="toggleInfoWindow(props.item)" title="Click to show on map"><i class="fas fa-map-marker-alt"></i></a>
										{{ props.item.location }}
									</td>
									<td>{{ props.item.category }}</td>
									<td><span>{{ props.item.price }}</span></td>
								</tr>
							</template>
						</virtual-scroller>
					</div>
				</div>
			</div>
		</main>
		<site-footer></site-footer>
	</chicago-map>
</template>

<script>

	import ChicagoMap from '../components/chicago-map.vue'
	import SiteFooter from '../components/site-footer.vue'
	import SiteHeader from '../components/site-header.vue'

	export default {
		components: {
			ChicagoMap,
			SiteFooter,
			SiteHeader
		},
		data: function () {
			return {
				details: 'Show Details',
				hotelCollapse: true,
				restaurantCollapse: false,
				activityCollapse: false,
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
		h2
			@include animation(1s fadeIn forwards)
			margin-bottom: 2rem !important

		p
			@include animation(1s fadeIn forwards)

			&.note
				font-size: 13px

			span
				color: $color-gold
				font: 600 28px $font-stack-sans-serif

			em
				@include rem(margin-left, 15px)
				display: inline-block

				a
					@include rem(padding, 1px 5px)
					border: 2px solid $background5
					color: $anchor-text2
					cursor: pointer
					display: inline-block
					min-width: 60px
					text-align: center

					&:hover
						border-color: $text

						i
							color: $text

					i
						@include rem(margin, 0)
						@include rem(top, 1.5px)
						position: relative

		input
			@include animation(1s fadeIn forwards)
			@include rem(margin-left, 15px)
			display: inline-block
			width: 55%

		input ~ a
			@include rel-pos(9px, auto, auto, auto)
			@include rem(margin-left, 5px)
			color: $anchor-text2
			cursor: pointer
			display: inline-block
			font-size: 15px

			span
				@include rel-pos(-5px, auto, auto, auto)
				@include rem(margin, 0)
				color: $anchor-text2
				font-size: 11px

		#details
			@include abs-pos(60px, 0, 0, 0)
			@include animation(1s fadeIn forwards)
			@include rem(margin, 0 auto 20px)
			@include transform(-50%, 10%)
			z-index: 3

			@include tablet-large
				@include rem(padding, 30px 20px)
				max-width: 1140px

			@include desktop-large
				@include rem(padding, 30px 40px)
				max-width: $desktop

			@include desktop-xlarge
				max-width: $desktop-large

			h2
				@include rem(margin-left, -11px)

			h4
				margin-bottom: .5rem !important
				position: relative

				~ div
					@include rem(padding-bottom, 10px)

				a
					position: absolute
					right: 0

			.get-app
				font-size: 14px

				span
					@include rem(margin-right, 5px)
					display: block

				img
					width: 5%

				.download-app
					@include size(auto, auto)
					display: inline-block
					max-width: 100px

					&:before
						background-color: transparent

					img
						max-width: 100%
						width: 100%

		main
			@include rem(margin-top, 20px)
			@include rem(padding, 0)
			max-width: none
			position: relative
			z-index: 5

		#header
			position: absolute
			top: 0
			width: 100%

	.container
		margin-top: 20px !important

		@include tablet-large
			max-width: 1140px

		@include desktop-large
			max-width: $desktop

		@include desktop-xlarge
			max-width: $desktop-large

		table
			td
				&:first-of-type
					@include rem(padding-right, 0)
					width: 50px

				&:nth-of-type(2)
					div
						@include rel-pos(-3px, auto, auto, auto)
						@include rem(margin-left, 5px)
						display: inline-block

						&:hover
							i
								color: $anchor-text2

				&:nth-of-type(3)
					width: 280px

					@include desktop
						width: 380px

				&:nth-of-type(4)
					width: 240px

					@include desktop
						width: 280px

				&:last-of-type(4)
					width: 60px

</style>
