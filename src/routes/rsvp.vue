<template>
	<div id="rsvp">
		<vue-form :state="formRSVP" v-model="formRSVP" @submit.prevent="addGuest">
			<h2 class="display-3">RSVP</h2>
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
				<div id="create-rsvp">
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
								<label for="attendingYes" :class="[ newGuest.attending === 'yes' ? 'form-check-label selected' : 'form-check-label' ]">
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
								<label for="attendingNo" :class="[ newGuest.attending === 'no' ? 'form-check-label selected' : 'form-check-label' ]">
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
						<div class="ui grid">
							<div class="column eight wide computer eight wide tablet sixteen wide mobile">
								<div :class="[ active ? 'form-item selected' : 'form-item' ]">
									<validate tag="label">
										<span>Your First + Last Name</span>
										<input v-model="newGuest.yourName" required name="newGuest.yourName">

										<field-messages name="newGuest.yourName" show="$touched || $submitted" class="form-control-feedback">
											<em class="form-control-success"><i class="fa fa-heart"></i></em>
											<em slot="required"><i class="fa fa-times"></i>Enter your first + last name</em>
										</field-messages>
									</validate>
								</div>
							</div>
							<div class="column eight wide computer eight wide tablet sixteen wide mobile">
								<div :class="[ active ? 'form-item selected' : 'form-item' ]">
									<validate tag="label">
										<span>Your Email Address</span>
										<input v-model="newGuest.yourEmail" type="email" required name="newGuest.yourEmail">

										<field-messages name="newGuest.yourEmail" show="$touched || $submitted" class="form-control-feedback">
											<em class="form-control-success"><i class="fa fa-heart"></i></em>
											<em slot="required"><i class="fa fa-times"></i>Enter your valid email address so we can communicate about the wedding, if necessary</em>
											<em slot="email"><i class="fa fa-times"></i>Your email address is not valid</em>
										</field-messages>
									</validate>
								</div>
							</div>
						</div>
					</fieldset>

					<fieldset class="form-group">
						<legend>Your Guest</legend>
						<div :class="[ active ? 'form-item selected' : 'form-item' ]">
							<label for="theirName">
								<span>Their First + Last Name</span>
								<input type="text" class="form-control" v-model="newGuest.theirName">
							</label>
						</div>
					</fieldset>

					<fieldset class="form-group">
						<legend>Message For Us</legend>
						<div :class="[ active ? 'form-item selected' : 'form-item' ]">
							<textarea class="form-control" rows="2" v-model.trim="newGuest.message"></textarea>
						</div>
					</fieldset>
				</div>
			</div>

			<input type="submit" value="Submit RSVP" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button" aria-disabled="false">
		</vue-form>

		<ul is="transition-group">
			<li v-for="guest in guests" class="guest" :key="guest['.key']">
				<span>{{guest.attending}} - {{guest.yourName}} - {{guest.yourEmail}} - {{guest.theirName}} - {{guest.message}}</span>
				<button v-on:click="removeGuest(guest)">X</button>
			</li>
		</ul>
	</div>
</template>

<script>

	import * as firebase from 'firebase'
	import { db, guestsRef } from '../datastore'

	export default {
		props: {
			'granted': { type: Boolean, default: false }
		},
		data: function () {
			return {
				formRSVP: {},
				guests: {},
				active: false,
				newGuest: {
					attending: false,
					yourName: '',
					yourEmail: '',
					theirName: '',
					message: '',
					accessCode: ''
				}
			}
		},
		firebase: {
			guests: guestsRef
		},
		methods: {
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
				console.log(this.formRSVP.$valid)
				if (this.formRSVP.$valid) {
					guestsRef.push(this.newGuest)
					this.newGuest.attending = ''
					this.newGuest.yourName = ''
					this.newGuest.yourEmail = ''
					this.newGuest.theirName = ''
					this.newGuest.message = ''
				}
			},
			removeGuest: function (guest) {
				guestsRef.child(guest['.key']).remove()
			},
			$firebaseRefs: {
				guests: firebase.database.Reference
			},
			removeGuest(guest) {
				this.$firebaseRefs.guests.child(guest['.key']).remove()
			}
		}
	}

</script>

<style scoped lang="sass">

	#rsvp
		h2
			@include animation(1s fadeIn forwards)
			@include rem(margin-bottom, 15px)

		h3
			em
				@include rem(padding-left, 10px)
				color: $text8
				font-size: 28.5px

	#get-access,
	#access-granted
		@include animation(1s fadeIn forwards)
		@include rem(margin-top, 30px)

</style>
