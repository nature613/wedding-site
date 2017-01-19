<template>
	<div id="questions" class="row">
		<div class="col-lg-2"></div>
		<div class="col-lg-8">
			<b-card variant="default" type="default" align="left">
				<h2>Questions<i class="fa fa-question"></i></h2>
				<div class="row">
					<div class="col-lg-2"></div>
					<div class="col-lg-8">
						<p><a href="mailto:davidanddacia@gmail.com"><b>davidanddacia@gmail.com</b></a></p>
						<p>
							<b>David</b>
							<a href="tel:+17733295784"><b>773.329.5784</b></a>

							<b>Dacia</b>
							<a href="tel:+17738520440"><b>773.852.0440</b></a>
						</p>
						<p>Use our hashtag on social media when posting videos/photos<br /><b><i class="fa fa-hashtag"></i> DavidAndDacia</b>.</p>
					</div>
					<div class="col-lg-2"></div>
				</div>
			</b-card>
		</div>
		</div class="col-lg-2"></div>
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
		@include rem(margin-top, 10px);
		@include rem(padding-bottom, 40px);
		opacity: .93;
		width: 800px;

		h2
			@include rem(margin-bottom, 10px);

		.card
			@include rem(padding-top, 10px);

			i
				@include rem(margin-right, 0);

			b
				@include rem(font-size, 17.5px);
				font-family: $font-stack-sans-serif2;
</style>
