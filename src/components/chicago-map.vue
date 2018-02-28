<template>
	<div id="chicago-map" class="map-container"  @scroll="handleScroll">
		<site-header :class="{ disappear: !isTop || hideHeader }"></site-header>
		<gmap-map
			ref="map"
			:center="center"
			:zoom="zoom"
			:map-type-id="mapType"
			:bounds="bounds"
			:options="{
				styles: mapStyles,
				scrollwheel: scrollwheel,
				mapTypeControl: false,
				streetViewControl: false,
				rotateControl: false,
				fullscreenControl: false
			}">
			<gmap-cluster
				:options="{maxZoom: 14, gridSize: 80}"
				:styles="[{
					textColor: 'black',
					url: 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m2.png',
					height: 56,
					width: 56,
					textSize: 16
				}]">
				<gmap-info-window
					:options="infoOptions"
					:position="infoWindowPos"
					:opened="infoWinOpen"
					:content="infoContent"
					@closeclick="infoWinOpen=false"
					@onplaceinfo="setPlaceInfo">
				</gmap-info-window>
				<gmap-marker
					:key="i"
					v-for="(m,i) in todos"
					:animation="2"
					:clickable="true"
					:draggable="false"
					:icon="{
						path: 0,
						scale: 7,
						fillColor: '#febe2d',
						fillOpacity: 6,
						strokeColor: 'transparent',
						strokeWeight: 0
					}"
					:position="m.position"
					@click="toggleInfoWindow(m,i), hideHeader = true"
					@mouseover="showMarkerTooltip(m)"
					@mouseout="hideMarkerTooltip()">
				</gmap-marker>
			</gmap-cluster>
			<div slot="visible">
				<div v-if="markerTooltip.visible" class="location-text">
					<p>
						<i :class="`fal fa-${markerTooltip.icon}`"></i> {{ markerTooltip.title }}
					</p>
				</div>
			</div>
		</gmap-map>
		<slot></slot>
	</div>
</template>

<script>

	import SiteHeader from '../components/site-header.vue'

	export default {
		components: {
			SiteHeader
		},
		props: {
			'todos': Array
		},
		data: function () {
			return {
				description: 'Chicago',
				center: { lat: 41.897972, lng: -87.623614 },
				markerTooltip: {
					icon: '',
					title: '',
					visible: false
				},
				infoContent: '',
				infoWindowPos: { lat: 0, lng: 0 },
				infoWinOpen: false,
				isGettingPlaceDetails: false,
				currentMarkerIndex: null,
				infoOptions: {
					category: '',
					image1: '',
					image2: '',
					image3: '',
					latitude: '',
					location: '',
					longitude: '',
					placeId: '',
					price: '',
					title: '',
					icon: '',
					type: '',
					pixelOffset: {
						width: -2,
						height: -5
					}
				},
				bounds: {
					north: -87.6489258,
					south: -87.7972412,
					east: 41.7712904,
					west: 42.0900489
				},
				zoom: 10,
				drag: 0,
				mapBounds: {
					north: -87.6489258,
					south: -87.7972412,
					east: 41.7712904,
					west: 42.0900489
				},
				clustering: true,
				mapType: 'roadmap',
				markers: [],
				mapStyles: [
					{
						"elementType": "geometry",
						"stylers": [{ "color": "#212121" }]
					},
					{
						"elementType": "labels.icon",
						"stylers": [{ "visibility": "off" }]
					},
					{
						"elementType": "labels.text.fill",
						"stylers": [{ "color": "#757575" }]
					},
					{
						"elementType": "labels.text.stroke",
						"stylers": [{ "color": "#212121" }]
					},
					{
						"featureType": "administrative",
						"elementType": "geometry",
						"stylers": [{ "color": "#757575" }]
					},
					{
						"featureType": "administrative.country",
						"elementType": "labels.text.fill",
						"stylers": [{ "color": "#9e9e9e" }]
					},
					{
						"featureType": "administrative.land_parcel",
						"stylers": [{ "visibility": "off" }]
					},
					{
						"featureType": "administrative.locality",
						"elementType": "labels.text.fill",
						"stylers": [{ "color": "#bdbdbd" }]
					},
					{
						"featureType": "administrative.neighborhood",
						"stylers": [{ "visibility": "on" }]
					},
					{
						"featureType": "poi",
						"elementType": "labels.text.fill",
						"stylers": [{ "color": "#757575" }]
					},
					{
						"featureType": "poi.attraction",
						"stylers": [{ "visibility": "off" }]
					},
					{
						"featureType": "poi.medical",
						"stylers": [{ "visibility": "off" }]
					},
					{
						"featureType": "poi.park",
						"elementType": "geometry",
						"stylers": [{ "color": "#181818" }]
					},
					{
						"featureType": "poi.park",
						"elementType": "labels.text.fill",
						"stylers": [{ "color": "#616161" }]
					},
					{
						"featureType": "poi.park",
						"elementType": "labels.text.stroke",
						"stylers": [{ "color": "#1b1b1b" }]
					},
					{
						"featureType": "road",
						"elementType": "geometry.fill",
						"stylers": [{ "color": "#2c2c2c" }]
					},
					{
						"featureType": "road",
						"elementType": "labels.text.fill",
						"stylers": [{ "color": "#8a8a8a" }]
					},
					{
						"featureType": "road.arterial",
						"elementType": "geometry",
						"stylers": [{ "color": "#373737" }]
					},
					{
						"featureType": "road.highway",
						"elementType": "geometry",
						"stylers": [{ "color": "#3c3c3c" }]
					},
					{
						"featureType": "road.highway.controlled_access",
						"elementType": "geometry",
						"stylers": [{ "color": "#4e4e4e" }]
					},
					{
						"featureType": "road.local",
						"elementType": "labels.text.fill",
						"stylers": [{ "color": "#616161" }]
					},
					{
						"featureType": "transit",
						"elementType": "labels.text.fill",
						"stylers": [{ "color": "#757575" }]
					},
					{
						"featureType": "water",
						"elementType": "geometry",
						"stylers": [{ "color": "#000000" }]
					},
					{
						"featureType": "water",
						"elementType": "labels.text.fill",
						"stylers": [{ "color": "#3d3d3d" }]
					}
				],
				scrollwheel: false,
				isTop: true,
				hideHeader: false
			}
		},
		computed: {
			placesService: function () {
				return new google.maps.places.PlacesService(this.$refs.map.$mapObject)
			}
		},
		methods: {
			setPlaceInfo(place) {
				const { category, location, price, title, icon, type, image1, image2, image3 } = this.infoOptions
				const { formatted_address: address, name, website } = place

				console.log(this.infoOptions)

				if (image1 === '' && image1 === '' && image3 === '') {
					this.infoContent =
						`<div class="marker-content" style="text-align: left;">
							<h6 style="font-size: 19px; margin: 0 0 10px;"><i class="fa fa-${icon}"></i> ${title}</h6>
							<p style="text-transform: capitalize;">${category} <span style="color: #01af27; font-size: 11px; font-weight: bold; position: relative; top: -0.5px; text-transform: uppercase;">${price}</span></p>
							<p style="margin-bottom: 0;">
								${address}<br />
								<a href="https://www.google.com/maps/search/?api=1&query=${name}&zoom=18&basemap=satellite" target="_blank" style="color: #0000ff;">More Info and Directions</a> | <a href="${website}" target="_blank" style="color: #0000ff;">Website</a>
							</p>
						</div>`
				} else {
					this.infoContent =
						`<div class="marker-content" style="text-align: left;">
							<h6 style="font-size: 19px; margin: 0 0 10px;"><i class="fa fa-${icon}"></i> ${title}</h6>
							<p style="text-transform: capitalize;">${category} <span style="color: #01af27; font-size: 11px; font-weight: bold; position: relative; top: -0.5px; text-transform: uppercase;">${price}</span></p>
							<p style="margin-bottom: 0;">
								${address}<br />
								<a href="https://www.google.com/maps/search/?api=1&query=${name}&zoom=18&basemap=satellite" target="_blank" style="color: #0000ff;">More Info and Directions</a> | <a href="${website}" target="_blank" style="color: #0000ff;">Website</a>
							</p>
						</div>
						<div style="padding-top: 5px;">
							<img src="${image1}" style="height: 150px; width: 150px;" />
							<img src="${image2}" style="display: inline-block; margin: 0 10px; height: 150px; width: 150px;" />
							<img src="${image3}" style="height: 150px; width: 150px;" />
						</div>`
				}
			},
			showMarkerTooltip(marker) {
				this.markerTooltip.visible = true
				this.markerTooltip.icon = marker.icon
				this.markerTooltip.title = marker.title
			},
			hideMarkerTooltip() {
				this.markerTooltip.visible = false
			},
			toggleInfoWindow(marker, index) {
				if (this.currentMarkerIndex === index) {
					this.infoWinOpen = !this.infoWinOpen
				} else {
					this.currentMarkerIndex = index
					this.infoWindowPos = marker.position
					this.infoOptions.category = marker.category
					this.infoOptions.image1 = marker.image1
					this.infoOptions.image2 = marker.image2
					this.infoOptions.image3 = marker.image3
					this.infoOptions.latitude = marker.position.lat
					this.infoOptions.location = marker.location
					this.infoOptions.longitude = marker.position.lng
					this.infoOptions.price = marker.price
					this.infoOptions.title = marker.title
					this.infoOptions.icon = marker.icon
					this.infoOptions.type = marker.type
					this.infoWinOpen = false
					this.isGettingPlaceDetails = true
					this.placesService.getDetails({ placeId: marker.placeId }, (place, status) => {
						this.isGettingPlaceDetails = false
						if (status === google.maps.places.PlacesServiceStatus.OK) {
							this.setPlaceInfo(place)
							this.infoWinOpen = true
						}
					})
				}
			},
			closeInfoWindow() {
				this.infoWinOpen = false
			},
			handleScroll () {
				this.isTop = window.scrollY <= 0
			}
		},
		beforeMount () {
			window.addEventListener('scroll', this.handleScroll)
		},
		beforeDestroy () {
			window.removeEventListener('scroll', this.handleScroll)
		}
	}

</script>

<style scoped lang="sass">
	.map-container
		@include size(100%, auto)
		max-width: none
		overflow: hidden
		position: absolute

		#header
			position: fixed
			width: 100%

		.vue-map-container
			@include size(100%, 400px)
			color: $text2
			z-index: 0

			.location-text
				@include abs-pos(auto, auto, 25px, 0)
				@include animation(fadeIn 2s forwards)
				@include rem(padding, 5px 25px 5px 30px)
				background: $background3b
				color: $text7
				font: 400 18px 'Oswald', sans-serif
				z-index: 100

				p
					@include rem(margin-bottom, 0)

					i
						@include abs-pos(13px, auto, auto, 15px)
						font-size: 18px
						font-weight: 300

</style>
