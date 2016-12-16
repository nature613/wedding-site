<template>
	<div id="header">
		<div class="container">
			<div class="row">
				<b-navbar fixed="top" type="dark" variant="default" full>
					<div class="col-lg-4">
						<a class="navbar-brand" href="#"><h1>David <span>&amp;</span> Dacia</h1></a>
					</div>
					<div class="col-lg-8">
						<b-nav type="navbar" class="pull-xs-left">
							<li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
							<li class="nav-item"><router-link class="nav-link" to="/wedding">Wedding</router-link></li>
							<li class="nav-item"><router-link class="nav-link" to="/rsvp">RSVP</router-link></li>
							<li class="nav-item"><router-link class="nav-link" to="/registry">Registry</router-link></li>
							<li class="nav-item"><router-link class="nav-link" to="/chicago">While in Chicago</router-link></li>
						</b-nav>
					</div>
				</b-navbar>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="sass">
	@import '../styles/_variables.sass';

	#header
		background: $background3;
		opacity: .8;

		.nav
			float: right;
			margin: 1rem 0;

		h1
			color: $text;

			span
				font-size: 62.5%;
</style>
