<template>
	<div id="header">
		<div class="row">
			<b-navbar type="dark" variant="default" full>
				<div class="col-lg-4">
					<a class="navbar-brand" href="#"><h1>Dacia <span>&amp;</span> David</h1></a>
				</div>
				<div class="col-lg-8">
					<b-nav type="navbar" class="pull-xs-left">
						<li class="nav-item"><router-link class="nav-link" to="/home">Home</router-link></li>
						<li class="nav-item"><router-link class="nav-link" to="/wedding">Wedding</router-link></li>
						<li class="nav-item"><router-link class="nav-link" to="/rsvp">RSVP</router-link></li>
						<li class="nav-item"><router-link class="nav-link" to="/chicago">While in Chicago</router-link></li>
					</b-nav>
				</div>
			</b-navbar>
		</div>
	</div>
</template>

<script>

	export default {
	}

</script>

<style lang="sass">

	@import '../styles/_tools.mixins.sass';
	@import '../styles/_variables.sass';

	#header
		.bg-faded
			background: transparent;

		.nav
			@include rem(margin, 10px 0);
			float: right;

			.nav-link
				border-bottom: 3px solid transparent;
				color: $text;
				font-family: $font-stack-sans-serif2;
				opacity: 0.7;

				&.active,
				&:hover
					border-color: $background2;
					opacity: 1;

		h1
			@include transition-duration(.25s);
			@include transition-property(all);
			color: $text;
			text-shadow: $text-shadow;

			&:hover
				@include rem(font-size, 27.5px);

			span
				font-size: 62.5%;

</style>
