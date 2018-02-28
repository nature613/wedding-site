<template>
	<section id="rsvp">
		<h2>RSVP</h2>
		<vue-form :state="formRSVP" ref="form" v-model="formRSVP" @submit.prevent="addGuest">
			<div id="create-rsvp" :class="[ rsvpStatus ? 'hide-content' : 'show-content' ]">
				<h3>Please RSVP by <em>Friday, September 14<sup>th</sup>, 2018</em></h3>
				<p>It is very important that you RSVP by this date, so we can finalize our plans.</p>

				<div id="get-access" v-if="granted">
					<h2>Access Code</h2>

					<validate tag="label">
						<span>Code</span>
						<input v-model="newGuest.accessCode" required name="newGuest.accessCode">

						<field-messages name="newGuest.accessCode" show="$touched || $submitted" class="form-control-feedback">
							<em class="form-control-success">&hearts;</em>
							<em slot="required">Enter a valid access code (check your invitation, case-sensitive)</em>
						</field-messages>
					</validate>
				</div>

				<div id="access-granted" v-if="!granted">
					<fieldset class="form-group">
						<legend>Are You Coming?</legend>

						<validate class="required-field" :class="fieldClassName(formRSVP.attending)">
							<div class="form-check">
								<input type="radio"
									class="form-check-input"
									value="yes"
									id="attendingYes"
									name="newGuest.attending"
									required
									v-model="newGuest.attending">
								<label for="attendingYes" class="form-check-label" :class="[ newGuest.attending === 'yes' ? ' selected' : '' ]">
									<span>Yes, I will be there</span>
								</label>
								<div class="check" @click="newGuest.attending = 'yes'"></div>
							</div>
							<div class="form-check">
								<input type="radio"
									class="form-check-input"
									value="no"
									id="attendingNo"
									name="newGuest.attending"
									required
									v-model="newGuest.attending">
								<label for="attendingNo" class="form-check-label" :class="[ newGuest.attending === 'no' ? ' selected' : '' ]">
									<span>No, I cannot make it</span>
								</label>
								<div class="check" @click="newGuest.attending = 'no'"><div class="inside"></div></div>
							</div>

							<field-messages name="newGuest.attending" show="$touched || $dirty || $submitted" class="form-check form-control-feedback">
								<em class="form-control-success"><i class="fa fa-heart"></i></em>
								<em slot="required"><i class="fa fa-times"></i>Let us know if you are attending or not</em>
							</field-messages>
						</validate>
					</fieldset>

					<fieldset class="form-group">
						<legend>Our Guest</legend>
						<div class="flex-container form-column">
							<div class="column">
								<div class="form-item" :class="[ active ? ' selected' : '' ]">
									<validate tag="label">
										<span>Your First + Last Name</span>
										<input v-model="newGuest.guestName" required name="newGuest.guestName">

										<field-messages name="newGuest.guestName" show="$touched || $submitted" class="form-control-feedback">
											<em class="form-control-success"><i class="fa fa-heart"></i></em>
											<em slot="required"><i class="fa fa-times"></i>Enter your first + last name</em>
										</field-messages>
									</validate>
								</div>
							</div>
							<div class="column">
								<div class="form-item" :class="[ active ? ' selected' : '' ]">
									<validate tag="label">
										<span>Your Email Address</span>
										<input v-model="newGuest.guestEmail" type="email" required name="newGuest.guestEmail">

										<field-messages name="newGuest.guestEmail" show="$touched || $submitted" class="form-control-feedback">
											<em class="form-control-success"><i class="fa fa-heart"></i></em>
											<em slot="required"><i class="fa fa-times"></i>Enter your valid email address so we can communicate about the wedding, if necessary</em>
											<em slot="email"><i class="fa fa-times"></i>Your email address is not valid</em>
										</field-messages>
									</validate>
								</div>
							</div>
						</div>
						<div class="column" :class="[ newGuest.attending === 'no' ? 'hide-content' : 'show-content' ]">
							<div class="form-item m20top" :class="[ active ? ' selected' : '' ]">
								<label for="guestDiet">
									<span>Your Dietary Restriction is</span>
									<div class="ui selection dropdown">
										<input type="hidden" v-model="newGuest.guestDiet" name="newGuest.guestDiet" @change="newGuest.guestDiet = $event.target.value">
										<i class="dropdown icon"></i>
										<div class="default text">{{ newGuest.guestDiet }}</div>
										<div class="menu">
											<div class="item" data-value="nut">nut-allergies</div>
											<div class="item" data-value="vegan">vegan</div>
										</div>
									</div>
								</label>
							</div>
						</div>
					</fieldset>

					<fieldset class="form-group" :class="[ newGuest.attending === 'no' ? 'hide-content' : 'show-content' ]">
						<legend>Your Guest</legend>
						<div class="form-item" :class="[ active ? ' selected' : '' ]">
							<label for="theirName">
								<span>Their First + Last Name</span>
								<input type="text" class="form-control" v-model="newGuest.theirName">
							</label>
						</div>

						<div class="form-item m20top" :class="[ active ? ' selected' : '' ]">
							<label for="theirDiet">
								<span>Their Dietary Restriction is</span>
								<div class="ui selection dropdown">
									<input type="hidden" v-model="newGuest.theirDiet" name="newGuest.theirDiet" @change="newGuest.theirDiet = $event.target.value">
									<i class="dropdown icon"></i>
									<div class="default text">{{ newGuest.theirDiet }}</div>
									<div class="menu">
										<div class="item" data-value="nut">nut-allergies</div>
										<div class="item" data-value="vegan">vegan</div>
									</div>
								</div>
							</label>
						</div>
					</fieldset>

					<fieldset class="form-group">
						<legend>Message For Us</legend>
						<div class="form-item" :class="[ active ? ' selected' : '' ]">
							<textarea class="form-control" rows="4" v-model.trim="newGuest.message"></textarea>
						</div>
					</fieldset>
				</div>

				<button type="submit" class="button" role="button" aria-disabled="false"><span>RSVP</span></button>
			</div>

			<div id="received-rsvp" :class="[ rsvpStatus ? 'show-content' : 'hide-content' ]">
				<div class="ui success message">
					<div class="header">
						Your RSVP was successful.
					</div>
					<p :class="[ newGuest.attending === 'yes' ? 'show-content' : 'hide-content' ]">We look forward to seeing you at the Chicago Sports Museum. Please visit our <router-link to="/chicago" @click="runAnalytics('Chicago page')">Chicago</router-link> page for things to do during that weekend.</p>
					<p :class="[ newGuest.attending === 'no' ? 'show-content' : 'hide-content' ]">Sorry you won't be able to make it! Thank you for letting us know.</p>
				</div>
			</div>
		</vue-form>
	</section>
</template>

<script>

	import * as firebase from 'firebase'
	import { db, guestsRef } from '../datastore'
	import moment from 'moment'

	export default {
		props: {
			'granted': { type: Boolean, default: false }
		},
		data: function () {
			return {
				formRSVP: {},
				active: false,
				rsvpStatus: false,
				newGuest: {
					attending: false,
					guestName: '',
					guestEmail: '',
					guestDiet: '',
					theirName: '',
					theirDiet: '',
					message: '',
					accessCode: ''
				}
			}
		},
		firebase: {
			guests: guestsRef
		},
		methods: {
			runAnalytics(title) {
				this.$ga.event('RSVP', 'click', title)
			},
			fieldClassName: function (field) {
				if(!field) {
					return ''
				}
				if((field.$touched || field.$submitted) && field.$valid) {
					return 'has-success'
				}
				if((field.$touched || field.$submitted) && field.$invalid) {
					return 'has-danger'
				}
			},
			addGuest: function () {
				this.$ga.event('RSVP', 'click', 'new rsvp')
				if (this.formRSVP.$valid) {
					this.$firebaseRefs.guests.push({
						attending: this.newGuest.attending,
						guestName: this.newGuest.guestName,
						guestEmail: this.newGuest.guestEmail,
						guestDiet: this.newGuest.guestDiet,
						theirName: this.newGuest.theirName,
						theirDiet: this.newGuest.theirDiet,
						message: this.newGuest.message,
						date: Date.now()
					})
					this.rsvpStatus = true
					window.scrollTo( 0, 0 )
				}
			}
		},
		computed: {
			selectionChange: function (value) {
				this.$emit('input', value)
			}
		},
		mounted() {
			this.$ga.page(this.$router)
			$('.ui.dropdown').dropdown({
				showOnFocus: true,
				allowTab: true
			})
		}
	}

</script>

<style scoped lang="sass">

	#rsvp
		h2
			@include animation(2s fadeIn forwards)
			@include rem(margin-bottom, 15px)

		h3
			em
				@include rem(padding-left, 10px)
				color: $text8
				font-size: 28.5px

		.selection.dropdown
			width: auto

	#get-access,
	#access-granted
		@include animation(2s fadeIn forwards)
		@include rem(margin-top, 30px)

</style>
