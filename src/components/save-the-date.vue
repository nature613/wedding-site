<template>
	<div>
		<div class="ui raised segment">
			<h2 class="display-3"><em>Saturday, November 3<sup>rd</sup>, 2018</em></h2>
			<div class="header">Save the Date</div>
			<div class="description">
				<p>It will be held at the
					<em><a href="https://www.google.com/maps/place/Chicago+Sports+Museum/@41.897972,-87.6241665,19z/data=!4m5!3m4!1s0x880fd3547a49a0c3:0x44868a15ba540fcc!8m2!3d41.897972!4d-87.623614" target="_blank" @click="runAnalytics('Chicago Sports Museum')">Chicago Sports Museum</a></em> at the Water Tower Place in Chicago, IL.
				</p>
				<p>
					<a target="_blank" class="noted" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MTc1NWdwZTdia3E2YW1kcTZ2NGFobmhybnQgZGF2aWRhbmRkYWNpYUBt&amp;tmsrc=davidanddacia%40gmail.com">
						<i class="calendar icon"></i> Add our wedding to your calendar
					</a>
				</p>
			</div>
		</div>
		<div class="ui vertical segment">
			<h2>Formal Invitation to Follow</h2>
			<p>Keep an eye out for your official invitation, either via mail and/or email by end of summer 2018.</p>
			<p>Our wedding website will include travel, lodging, things to do, and various information. Please check back for regular updates regarding the wedding plans and other vital information. We look forward to seeing you at our wedding.</p>
		</div>
	</div>
</template>

<script>

	export default {
		methods: {
			runAnalytics(title) {
				this.$ga.event('Save the Date', 'click', title)
			}
		}
	}

</script>

<style scoped lang="sass">

	.ui.segment
		@include rem(margin, 0 auto 30px)
		@include rem(padding, 25px 30px 25px)
		background: $background3b
		max-width: 800px

		@include mobile-small
			@include rem(padding, 20px 15px)

		.display-3
			@include animation(2s fadeIn forwards)
			@include rem(margin-bottom, 10px)
			text-align: left

		.lead
			@include animation(2s fadeIn forwards)
			@include bold()
			color: $text8
			font-family: $font-stack-sans-serif
			text-align: left

		h4
			@include animation(2s fadeIn forwards)
			@include rem(margin-bottom, 0)
			@include rem(margin-top, 50px)
			font-size: 24px
			font-weight: normal

		b
			@include rem(padding-right, 10px)
			color: $text8
			display: inline-block
			font-family: $font-stack-sans-serif
			font-size: 26px

		.small
			font-weight: bolder

		i
			@include rem(margin-left, 5px)
			font-size: 16px

</style>
