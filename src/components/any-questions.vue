<template>
	<div id="questions" class="row">
		<b-card variant="default" type="default" align="left">
			<div class="block-content">
				<div class="col-lg-4">
					<h2><i class="fa fa-envelope-o"></i> Email</h2>
					<p><a href="mailto:davidanddacia@gmail.com">davidanddacia@gmail.com</a></p>
				</div>

				<div class="col-lg-4">
					<h2><i class="fa fa-phone"></i> Text/Call</h2>
					<p>
						<b>David</b> <a href="tel:+17733295784">773.329.5784</a>
					</p>
					<p>
						<b>Dacia</b> <a href="tel:+17738520440">773.852.0440</a>
					</p>
				</div>

				<div class="col-lg-4">
					<h2><i class="fa fa-hashtag"></i> DavidAndDacia</h2>
					<p>Use our hashtag on social media when posting videos/photos.</p>
				</div>
			</div>
		</b-card>
	</div>
</template>

<script>

	export default {
	}

</script>

<style lang="sass" scoped>

	@import '../styles/_tools.mixins.sass';
	@import '../styles/_variables.sass';

	#questions
		@include rem(margin, 10px auto 0);
		color: $text;
		text-align: left;
		width: 100%;

		.card
			@include rem(padding, 20px);
			background: $background3a;
			width: 100%;

			.row
				@include rem(margin, 0);
				align-items: center;
				display: flex;
				justify-content: center;

			h2
				@include rem(margin-bottom, 10px);

			p,
			p a
				color: $text;

			p a
				@include rem(font-size, 16px);

				a:hover
					border-color: $text;

			i
				@include rem(margin-right, 0);
				color: $text;

			b
				@include rem(font-size, 17.5px);
				font-family: $font-stack-sans-serif2;

</style>
