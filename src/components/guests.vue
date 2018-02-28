<template>
	<div class="ui raised segment">
		<div class="container">
			<div id="filtering" class="content">
				<div class="ui steps">
					<div class="step">
						<span>{{ sortedGuests.length }}</span>
						<div class="content">
							<div class="title">RSVPed guests</div>
							<div class="description">Responded</div>
						</div>
					</div>
					<div class="step">
						<span>{{ attendingGuests }}</span>
						<div class="content">
							<div class="title">Attending guests</div>
							<div class="description">Responded <b>YES</b></div>
						</div>
					</div>
					<div class="step">
						<span>{{ attendingGuests + theirGuests }}</span>
						<div class="content">
							<div class="title">Total guests</div>
							<div class="description">
								Guest plus their plus ones<br />
								<em class="text-xs">{{ allergies }}</em>
							</div>
						</div>
					</div>
				</div>
				<div class="ui input">
					<input v-model="searchGuests" class="custom" placeholder="Filter">
				</div>
			</div>
			<div class="infinite">
				<div class="ui compact inverted unstackable table">
					<div class="block">
						<div class="ui grid column">
							<div class="ui column">
								<span v-for="columnGuest of columnsGuest" :key="columnGuest.id">
									<i :class="{ active: sortKey == columnGuest, sorted: reverse }" class="sort ascending icon"></i>
									<i :class="{ active: sortKey == columnGuest, sorted: !reverse }" class="sort descending icon"></i>
									<a @click="sortBy(columnGuest)" :class="{ active: sortKey == columnGuest }">{{ columnNames[columnGuest] }}</a>
								</span>
							</div>
						</div>
					</div>
					<table>
						<tr v-for="guest of sortedGuests" :key="guest.id">
							<td><i :class="[ guest.attending === 'no' ? 'minus circle icon red' : 'icon heart green' ]"></i></td>
							<td>
								{{ guest.guestName }}
								<span v-if="guest.message" data-inverted="" :data-tooltip="guest.message" data-position="top left"><i class="fas fa-comment"></i></span>
								 <p class="text-xs">{{ formatDate(guest.date) }}</p>
							</td>
							<td>{{ guest.guestEmail }}</td>
							<td>{{ guest.guestDiet }}</td>
							<td>{{ guest.theirName }}</td>
							<td>{{ guest.theirDiet }}</td>
							<td><i class="remove circle icon yellow" v-on:click="removeGuest(guest)"></i></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import * as firebase from 'firebase'
	import { db, guestsRef } from '../datastore'
	import moment from 'moment'

	export default {
		data: function () {
			return {
				sortKey: 'guestName',
				nextSortKey: 'guestName',
				searchGuests: '',
				reverse: false,
				columnsGuest: ['attending', 'guestName', 'guestEmail', 'guestDiet', 'theirName', 'theirDiet'],
				columnNames: {
					attending: 'attending',
					guestName: 'guest',
					guestEmail: 'email',
					guestDiet: 'diet',
					theirName: 'plus +1',
					theirDiet: 'plus +1 diet'
				},
				itemHeight: 51
			}
		},
		firebase: {
			guests: guestsRef
		},
		computed: {
			sortedGuests: function () {
				let sorted = this.guests
					.map(guest => ({ attending: false, guestName: '', guestEmail: '', guestDiet: '', message: '', theirName: '', theirDiet: '', date: '', ...guest }))
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

				return filterGuests(sorted, this.searchGuests, this.columnsGuest)
			},
			attendingGuests: function () {
				let count = 0
				for (const guest of this.guests) {
					if (guest.attending === 'yes') {
						count++
					}
				}
				return count
			},
			theirGuests: function () {
				let count = 0
				for (const guest of this.guests) {
					if (guest.attending === 'yes') {
						if (guest.theirName != '') {
							count++
						}
					}
				}
				return count
			},
			allergies: function () {
				let veganCount = 0
				let nutCount = 0
				for (const guest of this.guests) {
					if (guest.attending === 'yes') {
						if (guest.guestDiet === 'nut') {
							nutCount++
						} else if (guest.guestDiet === 'vegan') {
							veganCount++
						}
						if (guest.theirDiet === 'nut') {
							nutCount++
						} else if (guest.theirDiet === 'vegan') {
							veganCount++
						}
					}
				}

				return nutCount + ' nut ' + veganCount + ' vegan allergies'
			}
		},
		methods: {
			formatDate: function (date) {
				return moment(date).format('llll')
			},
			sortBy(sortKey) {
				this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false
				this.sortKey = sortKey
				this.$ga.event('Guest list sort', 'click', sortKey)
			},
			runAnalytics(title) {
				this.$ga.event('Guest list', 'click', title)
			},
			removeGuest: function (guest) {
				this.$ga.event('Guest list', 'click', 'removed guest')
				this.$firebaseRefs.guests.child(guest['.key']).remove()
			}
		},
		mounted() {
			this.$ga.page(this.$router)
		}
	}

	/**
	 * @param {array} array
	 * @param {string} term
	 * @param {string[]} properties
	 */
	function filterGuests(array, term, properties) {
		term = term.toLowerCase()
		return array.filter(t => properties.some(p => t[p].toLowerCase().indexOf(term) !== -1))
	}

</script>

<style scoped lang="sass">

	h3
		font-size: 2.5rem

	.ui.segment
		@include rem(margin, 0 auto 30px)
		@include rem(padding, 25px 30px 25px)
		background: $background3b

		@include tablet
			@include rem(padding-left, 15px)
			@include rem(padding-right, 15px)

		i
			@include rem(margin-left, 5px)
			font-size: 16px

	.container
		#filtering
			@include rem(margin-bottom, 20px)
			@include rem(margin-left, 0)

			.ui.steps,
			.ui.input
				margin-left: 0

				@include tablet-small
					width: 100%

		.table
			.block
				span
					&:nth-of-type(4),
					&:nth-of-type(6)
						@include tablet-xsmall
							display: none

					&:nth-of-type(3)
							@include phablet-small
								display: none

			table
				tr
					td
						font-size: 1rem

						&:nth-of-type(4),
						&:nth-of-type(6)
							@include tablet-xsmall
								display: none

						&:nth-of-type(3)
							@include phablet-small
								display: none

</style>
