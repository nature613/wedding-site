<template>
	<div class="ui raised segment add-block">
		<p>
			<a href="https://ctrlq.org/instagram/" target="_blank">Convert Instagram photos</a>
			<a href="https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder" target="_blank">Get Google Map Place ID</a>
		</p>

		<vue-form :state="formTodos" ref="form" v-model="formTodos" @submit.prevent="addTodo">
			<div class="ui form">
				<fieldset class="form-group">
					<legend>Todo</legend>
					<div class="ui input form-item" :class="[ active ? ' selected' : '' ]">
						<validate tag="label">
							<input v-model="newTodo.title" required class="custom" placeholder="Name" name="title">
							<field-messages name="newTodo.title" show="$touched || $submitted" class="form-control-feedback">
								<em slot="required"><i class="fa fa-times"></i>Required field</em>
							</field-messages>
						</validate>
					</div>
					<div class="flex-container">
						<div class="form-item custom" :class="[ active ? ' selected' : '' ]">
							<div class="form-group">
								<validate tag="label">
									<div class="ui search selection dropdown">
										<input type="hidden" required v-model="newTodo.icon" name="newTodo.icon" @change="newTodo.icon = $event.target.value">
										<i class="dropdown icon"></i>
										<div class="default text">Icon</div>
										<div class="menu">
											<div class="item" data-value="bed">
												<i class="fas fa-bed"></i> bed
											</div>
											<div class="item" data-value="ticket-alt">
												<i class="fas fa-ticket-alt"></i> ticket-alt
											</div>
											<div class="item" data-value="utensils">
												<i class="fas fa-utensils"></i> utensils
											</div>
											<div class="item" data-value="lounge">
												<i class="fas fa-glass-martini"></i> lounge
											</div>
										</div>
									</div>
									<field-messages name="newTodo.icon" show="$touched || $submitted" class="form-control-feedback">
										<em slot="required"><i class="fa fa-times"></i>Required field</em>
									</field-messages>
								</validate>
							</div>
						</div>
						<div class="form-item custom" :class="[ active ? ' selected' : '' ]">
							<div class="form-group">
								<validate tag="label">
									<div class="ui search selection dropdown">
										<input type="hidden" required v-model="newTodo.type" name="newTodo.type" @change="newTodo.type = $event.target.value">
										<i class="dropdown icon"></i>
										<div class="default text">Type</div>
										<div class="menu">
											<div class="item" data-value="restaurant">Restaurant</div>
											<div class="item" data-value="activity">Activity</div>
											<div class="item" data-value="hotel">Hotel</div>
										</div>
									</div>
									<field-messages name="newTodo.type" show="$touched || $submitted" class="form-control-feedback">
										<em slot="required"><i class="fa fa-times"></i>Required field</em>
									</field-messages>
								</validate>
							</div>
						</div>
					</div>

					<div class="flex-container">
						<div class="form-item custom" :class="[ active ? ' selected' : '' ]">
							<div class="form-group">
								<validate tag="label">
									<div class="ui search selection dropdown" :class="[ newTodo.type != '' ? '' : 'disabled']">
										<input type="hidden" required v-model="newTodo.category" name="newTodo.category" @change="newTodo.category = $event.target.value">
										<i class="dropdown icon"></i>
										<div class="default text">Category</div>
										<div class="menu">
											<div class="item" data-value="african" v-if="newTodo.type === 'restaurant'">African</div>
											<div class="item" data-value="american" v-if="newTodo.type === 'restaurant'">American</div>
											<div class="item" data-value="asian fusion" v-if="newTodo.type === 'restaurant'">Asian Fusion</div>
											<div class="item" data-value="BBQ/Ribs" v-if="newTodo.type === 'restaurant'">BBQ/Ribs</div>
											<div class="item" data-value="breakfast" v-if="newTodo.type === 'restaurant'">Breakfast</div>
											<div class="item" data-value="brunch" v-if="newTodo.type === 'restaurant'">Brunch</div>
											<div class="item" data-value="burgers" v-if="newTodo.type === 'restaurant'">Burgers</div>
											<div class="item" data-value="coffee" v-if="newTodo.type === 'restaurant'">Coffee</div>
											<div class="item" data-value="dessert" v-if="newTodo.type === 'restaurant'">Dessert</div>
											<div class="item" data-value="fondue" v-if="newTodo.type === 'restaurant'">Fondue</div>
											<div class="item" data-value="greek" v-if="newTodo.type === 'restaurant'">Greek</div>
											<div class="item" data-value="indian" v-if="newTodo.type === 'restaurant'">Indian</div>
											<div class="item" data-value="italian" v-if="newTodo.type === 'restaurant'">Italian</div>
											<div class="item" data-value="jamaican" v-if="newTodo.type === 'restaurant'">Jamaican</div>
											<div class="item" data-value="latin" v-if="newTodo.type === 'restaurant'">Latin</div>
											<div class="item" data-value="mexican" v-if="newTodo.type === 'restaurant'">Mexican</div>
											<div class="item" data-value="pizza" v-if="newTodo.type === 'restaurant'">Pizza</div>
											<div class="item" data-value="seafood" v-if="newTodo.type === 'restaurant'">Seafood</div>
											<div class="item" data-value="soul food" v-if="newTodo.type === 'restaurant'">Soul Food</div>
											<div class="item" data-value="steakhouse" v-if="newTodo.type === 'restaurant'">Steakhouse</div>
											<div class="item" data-value="sushi" v-if="newTodo.type === 'restaurant'">Sushi</div>
											<div class="item" data-value="variety" v-if="newTodo.type === 'restaurant'">Variety</div>
											<div class="item" data-value="entertainment" v-if="newTodo.type === 'activity'">Entertainment</div>
											<div class="item" data-value="lounge" v-if="newTodo.type === 'activity'">Lounge</div>
											<div class="item" data-value="museum" v-if="newTodo.type === 'activity'">Museum</div>
											<div class="item" data-value="shopping" v-if="newTodo.type === 'activity'">Shopping</div>
											<div class="item" data-value="sports" v-if="newTodo.type === 'activity'">Sports</div>
											<div class="item" data-value="tour" v-if="newTodo.type === 'activity'">Tour</div>
											<div class="item" data-value="2 stars" v-if="newTodo.type === 'hotel'">2 stars</div>
											<div class="item" data-value="3 stars" v-if="newTodo.type === 'hotel'">3 stars</div>
											<div class="item" data-value="4 stars" v-if="newTodo.type === 'hotel'">4 stars</div>
											<div class="item" data-value="5 stars" v-if="newTodo.type === 'hotel'">5 stars</div>
										</div>
									</div>
									<field-messages name="newTodo.category" show="$touched || $submitted" class="form-control-feedback">
										<em slot="required"><i class="fa fa-times"></i>Required field</em>
									</field-messages>
								</validate>
							</div>
						</div>
						<div class="form-item custom" :class="[ active ? ' selected' : '' ]">
							<div class="form-group">
								<validate tag="label">
									<div class="ui search selection dropdown">
										<input type="hidden" required v-model="newTodo.price" name="newTodo.price" @change="newTodo.price = $event.target.value">
										<i class="dropdown icon"></i>
										<div class="default text">Price point</div>
										<div class="menu">
											<div class="item" data-value="FREE">FREE</div>
											<div class="item" data-value="$">$</div>
											<div class="item" data-value="$$">$$</div>
											<div class="item" data-value="$$$">$$$</div>
											<div class="item" data-value="$$$$">$$$$</div>
										</div>
									</div>
									<field-messages name="newTodo.price" show="$touched || $submitted" class="form-control-feedback">
										<em slot="required"><i class="fa fa-times"></i>Required field</em>
									</field-messages>
								</validate>
							</div>
						</div>
					</div>
				</fieldset>

				<fieldset class="form-group">
					<legend>Location</legend>
					<div class="flex-container">
						<div class="ui input form-item" :class="[ active ? ' selected' : '' ]">
							<validate tag="label">
								<div class="ui search selection dropdown">
									<input type="hidden" required v-model="newTodo.location" name="newTodo.location" @change="newTodo.location = $event.target.value">
									<i class="dropdown icon"></i>
									<div class="default text">Location</div>
									<div class="menu">
										<div class="item" data-value="Downtown / Near North">Downtown / Near North</div>
										<div class="item" data-value="Downtown / South Loop">Downtown / South Loop</div>
										<div class="item" data-value="Downtown / The Loop">Downtown / The Loop</div>
										<div class="item" data-value="Midway Airport">Midway Airport</div>
										<div class="item" data-value="Near West / Greektown">Near West / Greektown</div>
										<div class="item" data-value="Near West / River West">Near West / River West</div>
										<div class="item" data-value="Near West / West Loop">Near West / West Loop</div>
										<div class="item" data-value="North / Lakeview">North / Lakeview</div>
										<div class="item" data-value="North / Lincoln Park">North / Lincoln Park</div>
										<div class="item" data-value="North Side">North Side</div>
										<div class="item" data-value="O'Hare Airport">O'Hare Airport</div>
										<div class="item" data-value="South / Bridgeport">South / Bridgeport</div>
										<div class="item" data-value="South / Bronzeville">South / Bronzeville</div>
										<div class="item" data-value="South / Chinatown">South / Chinatown</div>
										<div class="item" data-value="South / Hyde Park">South / Hyde Park</div>
										<div class="item" data-value="South / Pilsen">South / Pilsen</div>
										<div class="item" data-value="South / Washington Park">South / Washington Park</div>
										<div class="item" data-value="South Side">South Side</div>
										<div class="item" data-value="Suburbs / Naperville">Suburbs / Naperville</div>
										<div class="item" data-value="Suburbs / Oakbrook">Suburbs / Oakbrook</div>
										<div class="item" data-value="Suburbs / Schaumburg">Suburbs / Schaumburg</div>
										<div class="item" data-value="West / Bucktown">West / Bucktown</div>
										<div class="item" data-value="West / Logan Square">West / Logan Square</div>
										<div class="item" data-value="West / West Town">West / West Town</div>
										<div class="item" data-value="West / Wicker Park">West / Wicker Park</div>
										<div class="item" data-value="West Side">West Side</div>
									</div>
								</div>

								<field-messages name="newTodo.location" show="$touched || $submitted" class="form-control-feedback">
									<em slot="required"><i class="fa fa-times"></i>Required field</em>
								</field-messages>
							</validate>
						</div>
						<div class="ui input form-item" :class="[ active ? ' selected' : '' ]">
							<validate tag="label">
								<input v-model="newTodo.placeId" required class="custom" placeholder="Place ID" name="placeId">

								<field-messages name="newTodo.placeId" show="$touched || $submitted" class="form-control-feedback">
									<em slot="required"><i class="fa fa-times"></i>Required field</em>
								</field-messages>
							</validate>
						</div>
					</div>
					<div class="flex-container">
						<div class="ui input form-item" :class="[ active ? ' selected' : '' ]">
							<validate tag="label">
								<input v-model="newTodo.positionLat" required class="custom" placeholder="Position: Latitude" name="positionLat">

								<field-messages name="newTodo.positionLat" show="$touched || $submitted" class="form-control-feedback">
									<em slot="required"><i class="fa fa-times"></i>Required field</em>
								</field-messages>
							</validate>
						</div>
						<div class="ui input form-item" :class="[ active ? ' selected' : '' ]">
							<validate tag="label">
								<input v-model="newTodo.positionLng" required class="custom" placeholder="Position: Longitude" name="positionLng">

								<field-messages name="newTodo.positionLng" show="$touched || $submitted" class="form-control-feedback">
									<em slot="required"><i class="fa fa-times"></i>Required field</em>
								</field-messages>
							</validate>
						</div>
					</div>
				</fieldset>

				<fieldset class="form-group">
					<legend>Note to Guests</legend>
					<div class="form-item" :class="[ active ? ' selected' : '' ]">
						<textarea class="form-control" rows="4" v-model.trim="newTodo.note"></textarea>
					</div>
				</fieldset>

				<fieldset class="form-group">
					<legend>Images</legend>
					<div class="ui input form-item" :class="[ active ? ' selected' : '' ]">
						<input v-model="newTodo.image1" class="custom" placeholder="Image 1 content" name="image1">
					</div>
					<div class="ui input form-item" :class="[ active ? ' selected' : '' ]">
						<input v-model="newTodo.image2" class="custom" placeholder="Image 2 content" name="image2">
					</div>
					<div class="ui input form-item" :class="[ active ? ' selected' : '' ]">
						<input v-model="newTodo.image3" class="custom" placeholder="Image 3 content" name="image3">
					</div>
				</fieldset>
			</div>

			<button type="submit" class="button" role="button" aria-disabled="false"><span>Add todos</span></button>
		</vue-form>
		<pre>{{ formTodos }}</pre>
	</div>
</template>

<script>

	import * as firebase from 'firebase'
	import { db, todosRef } from '../datastore'

	export default {
		data: function () {
			return {
				formTodos: {},
				active: false,
				newTodo: {
					category: '',
					icon: '',
					image1: '',
					image2: '',
					image3: '',
					location: '',
					note: '',
					placeId: '',
					positionLat: '',
					positionLng: '',
					price: '',
					title: '',
					type: ''
				}
			}
		},
		firebase: {
			todos: todosRef
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
			addTodo: function () {
				this.$ga.event('Todos', 'click', 'new todo')
				if (this.formTodos.$valid) {
					this.$firebaseRefs.todos.push({
						category: this.newTodo.category,
						icon: this.newTodo.icon,
						image1: this.newTodo.image1,
						image2: this.newTodo.image2,
						image3: this.newTodo.image3,
						location: this.newTodo.location,
						note: this.newTodo.note,
						placeId: this.newTodo.placeId,
						position: {
							lat: this.newTodo.positionLat,
							lng: this.newTodo.positionLng
						},
						price: this.newTodo.price,
						title: this.newTodo.title,
						type: this.newTodo.type
					})

					this.newTodo.category = null || '',
					this.newTodo.icon = null || '',
					this.newTodo.image1 = '',
					this.newTodo.image2 = '',
					this.newTodo.image3 = '',
					this.newTodo.location = '' || '',
					this.newTodo.note = '',
					this.newTodo.placeId = '',
					this.newTodo.positionLat = '',
					this.newTodo.positionLng = '',
					this.newTodo.price = null || '',
					this.newTodo.title = '' || '',
					this.newTodo.type = null
					this.formTodos.$pristine = true
					this.formTodos.$dirty = false
					this.formTodos.$submittd = false
					this.formTodos.$touched = true
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
				allowTab: true,
				fullTextSearch: true,
				allowAdditions: true,
				direction: 'upward'
			})
		}
	}

</script>

<style scoped lang="sass">

	h3
		font-size: 2.5rem

	p
		a
			@include rem(margin-right, 15px)
			display: inline-block

			&:last-of-type
				margin-right: 0

	form
		background: transparent

	.form-item
		@include rem(margin, 0 0 15px)

		label
			width: 100%

		&.ui.input
			label
				input.custom
					width: 90%

	.flex-container
		> *
			&:last-of-type
				margin-left: 0

		.form-item
			@include rem(margin-right, 15px)
			width: 35%

	.ui.segment
		&.add-block
			.container
				.ui.table
					table
						tr
							td
								&:first-of-type,
								&:nth-of-type(3)
									width: 20px

								&:nth-of-type(2)
									width: 120px

								&:last-of-type
									width: auto

								&.editing
									.ui.input
										@include flex-container()
										@include align-content-stretch()

										input
											@include rem(margin-right, 15px)
											flex: 1 auto

											@include tablet
												@include rem(margin-bottom, 20px)
												margin-right: 0
												flex: none
												width: 100%

											&:last-of-type
												margin-left: auto
												text-transform: capitalize

												@include tablet
													margin-left: 0

											&:first-of-type
												width: calc(20% - 1.55rem)

												@include tablet
													width: 100%

</style>

