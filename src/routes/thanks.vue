<template>
	<section id="thanks">
		<div class="block">
			<h2>Thank You!!!</h2>
			<div class="ui raised segment">
				<p>All photos from the wedding and from the <em>#davidanddacia</em> tag are here!</p>

				<p>Thank you to our vendors:</p>
				<ul>
					<li>List them here</li>
				</ul>

				<h3>Our Parents</h3>
				<p>Thank you for giving us the direction, insight &amp; faith to what true love &amp; happiness is, and the courage to allow us to know it's obtainable. The helping hand you extended to us made all the difference. Without you, our wedding wouldn't have been the dream that it will be. We will remember our special night for the rest of our lives, and we will always remember the impact you made on it. No amount of words could express our true thankfulness.</p>

				<h3>Our Friends</h3>
				<p>We appreciate every one of our friends who have been there for us on our wonderful journey. We feel especially lucky to have so many special people in our lives. We look forward to sharing many more happy occasions with you in the years to come!</p>
			</div>
		</div>
	</section>
</template>

<script>

	export default {
		mounted() {
			this.$ga.page(this.$router)
		}
	}

</script>

<style scoped lang="sass">

	.block
		@include tablet-small
			@include rem(padding, 0 10px)

		@include phablet-large
			@include rem(padding, 0 15px)

		@include mobile-small
			@include rem(padding, 0 5px)

		h2
			font-size: 10rem !important

			@include tablet
				font-size: 8rem !important

			@include tablet-small
				font-size: 6rem !important

			@include mobile-small
				font-size: 4.5rem !important

			@include mobile-xsmall
				font-size: 3.5rem !important

		.ui.raised.segment
			@include rem(margin, 0 auto 20px)
			@include rem(padding, 25px 30px 25px)
			background: $background3b

			@include phablet-large
				@include rem(padding-left, 20px)
				@include rem(padding-right, 20px)

			&:last-of-type
				@include phablet-large
					@include rem(margin, 0 auto 30px)

			em
				color: $text8

			strong
				em
					text-transform: uppercase

</style>