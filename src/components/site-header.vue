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
						<li class="nav-item"><router-link class="nav-link" to="/registry">Registry</router-link></li>
						<li class="nav-item"><router-link class="nav-link" to="/chicago">While in Chicago</router-link></li>
					</b-nav>
				</div>
			</b-navbar>
		</div>
	</div>
</template>

<script>
</script>

<style lang="sass">
	@import '../styles/_variables.sass';

	#header
		.bg-faded
			background: transparent;

		.nav
			float: right;
			margin: 1rem 0;

			.nav-link
				font-family: $font-stack-sans-serif2;

		h1
			color: $text;
			text-shadow: $text-shadow;

			span
				font-size: 62.5%;
</style>
