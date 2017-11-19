<template>
	<div>
		<div class="ui segment">
			<div class="ui cards">
				<div class="ui card">
					<div class="content">
						<h2 class="display-3"><em>Saturday, November 3<sup>rd</sup>, 2018</em></h2>
						<div class="header">Save the Date</div>
						<div class="description">
							<p>It will be held at the
								<em><a href="https://www.google.com/maps/place/Chicago+Sports+Museum/@41.897972,-87.6241665,19z/data=!4m5!3m4!1s0x880fd3547a49a0c3:0x44868a15ba540fcc!8m2!3d41.897972!4d-87.623614" target="_blank">Chicago Sports Museum</a></em> at the Water Tower Place in Chicago, IL.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="ui vertical segment">
			<h2>Formal Invitation to Follow</h2>
			<p>Keep an eye out for your official invitation, either via mail and/or email by end of summer 2018.</p>
			<p>Our wedding website will include travel, lodging, things to do, and various information. Please check back for regular updates regarding the wedding plans and other vital information. We look forward to seeing you at our wedding.</p>
		</div>
	</div>
</template>

<style scoped lang="sass">

	.ui.segment
		@include rem(margin, 0 auto 30px)
		@include rem(padding, 0 20px 20px)
		max-width: 1000px

		@include tablet
			@include rem(padding, 0 0 20px)

		.ui.cards > .card
			width: 100%

			> .content,
			> .card > .content
				@include rem(padding, 30px 60px 40px)

				@include desktop
					@include rem(padding-left, 30px)
					@include rem(padding-right, 30px)

				.header
					font-size: 36px

				.description
					p
						font-size: 20px

				em
					color: $text8

	.ui.vertical.segment
		@include rem(margin-top, 20px)
		@include rem(padding, 0 25px)
		max-width: 620px

</style>
