<template>
	<div class="content">
		<div class="jumbotron jumbotron-fluid">
			<div class="block-content">
				<h2 class="display-3">The Story</h2>
				<p class="lead">"David, are you single?"</p>
				<p>That question was asked starting it all. He arrived to work on October 26, 2012, business as usual&hellip; so he thought. He did not realize that there was a well-thought out plan that had been in the works for the past 3 weeks by Dacia. Puzzled by the question, he answered, </p>
				<p>
					<b>"Yes"</b>
					<strong class="pl-5">
						<em>Yadda&hellip;</em>
						<em class="medium">yadda&hellip;</em>
						<em class="small">yadda&hellip;</em>
					</strong>
				</p>
			</div>
		</div>
	</div>
</template>

<script>

	export default {

	}

</script>

<style lang="sass" scoped>

	@import '../styles/main.sass'

	.content
		@include rem(margin-bottom, 30px)

		.jumbotron
			.display-3
				@include rem(margin-bottom, 10px)
				text-align: left

			.image
				@include rem(margin, 0 auto 10px)
				display: block
				max-height: 410px
				max-width: 1000px
				min-width: 280px
				overflow: hidden
				width: 100%

				@include tablet-small
					border: 1px solid $text
					border-bottom: 0 none
					border-radius: 6px 6px 0 0

				@include tablet-large
					max-height: 300px

				@include tablet-small
					border-left: 0
					border-radius: 0
					border-right: 0
					max-height: 230px

				img
					box-shadow: 0 0 7px $background
					max-width: 105%

					@include tablet-small
						border-radius: 6px  6px 0 0

			.block-content
				@include rem(padding, 0 20px)
				margin-top: 20px
				max-width: 800px

				.lead
					@include bold()
					color: $text8
					font-family: $font-stack-serif
					text-align: left

				b
					@include rem(padding-right, 10px)
					color: $text8
					display: inline-block
					font-family: $font-stack-serif
					font-size: 24px

				.small
					font-weight: bolder

				i,
				.svg-inline--fa
					@include rem(margin-left, 5px)
					font-size: 14px

</style>
