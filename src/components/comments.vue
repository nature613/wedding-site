<template>
	<div class="ui raised segment">
		<div class="ui right internal attached rail">
			<div class="ui segment">
				<vue-form :state="formPosts" v-model="formPosts" @submit.prevent="postComment">
					<h3>Questions or comments?</h3>
					<p>Use this comment section to ask questions that everyone could benefit from having answers to.</p>

					<fieldset class="form-group">
						<legend>Your Name</legend>
						<div class="form-item" :class="[ active ? ' selected' : '' ]">
							<validate tag="label">
								<input v-model="newPost.yourName" required name="yourName">

								<field-messages name="yourName" show="$touched || $submitted" class="form-control-feedback">
									<em class="form-control-success"><i class="fa fa-heart"></i></em>
									<em slot="required"><i class="fa fa-times"></i>Enter your name</em>
								</field-messages>
							</validate>
						</div>
					</fieldset>
					<fieldset class="form-group">
						<legend>Your Comment</legend>
						<div class="form-item" :class="[ active ? ' selected' : '' ]">
							<textarea class="form-control" rows="2" v-model.trim="newPost.message" @keyup.enter="postComment"></textarea>
						</div>
					</fieldset>

					<button type="submit" class="button" role="button" aria-disabled="false"><span>Leave comment</span></button>
				</vue-form>
			</div>
		</div>
		<h2>Comments</h2>
		<div class="ui small comments">
			<div class="comment" v-for="post in posts" :key="post['.key']">
				<a class="avatar"><i class="comments outline icon"></i></a>
				<div class="content">
					<span class="author">{{post.yourName}}</span>
					<div class="metadata">
						<span class="date">{{formatDate(post.date)}}</span>
					</div>
					<div class="text">
						<pre>{{post.message}}</pre>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import * as firebase from 'firebase'
	import { db, postsRef } from '../datastore'
	import moment from 'moment'

	export default {
		data: function () {
			return {
				formPosts: {},
				active: false,
				newPost: {
					yourName: '',
					message: ''
				}
			}
		},
		firebase: {
			posts: postsRef
		},
		methods: {
			formatDate: function (date) {
				return moment(date).format('llll')
			},
			postComment: function() {
				this.$ga.event('post', 'click', 'new comment')
				if (this.formPosts.$valid) {
					this.$firebaseRefs.posts.push({
						yourName: this.newPost.yourName,
						message: this.newPost.message,
						date: Date.now()
					})
					this.newPost.message = ''
				}
			},
			removeComment: function (post) {
				this.$ga.event('post', 'click', 'removed comment')
				this.$firebaseRefs.posts.child(post['.key']).remove()
			}
		}
	}

</script>

<style scoped lang="sass">

	.ui.segment
		@include rem(margin, 30px auto)
		@include rem(padding, 25px 30px 25px)
		background: $background3b
		min-height: 523px

		@include phablet-large
			background: transparent

		a.button-link,
		input[type="submit"],
		input[type="button"],
		button
			@include rem(padding, 2.5px 5px)
			border-width: 1px
			font-size: 12px

	.ui.rail
		@include tablet
			@include rel-pos(auto, auto, auto, auto)
			background: transparent
			height: auto
			width: 100%

		.ui.segment
			@include rem(padding, 25px 15px)
			margin-top: 0
			min-height: auto

			@include phablet-large
				@include rem(padding, 20px 0)
				background: transparent

			form
				background: transparent
				padding: 0

				a.button-link,
				input[type="submit"],
				input[type="button"],
				button
					@include rem(padding, 5px 10px)
					font-size: 15px
					margin-bottom: 10px

</style>
