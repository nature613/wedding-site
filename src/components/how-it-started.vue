<template>
	<div>
		<div class="content">
			<b-jumbotron fluid>
				<h1 class="display-3">The Story</h1>
				<p class="lead">David, "Are you single?"</p>
				<p>That was the question that started it all. David arrived to work, business as usal, so he thought. He did not realize that there was a well-thought out plan that had been in the works for the past 3 weeks by Dacia.</p>
				<p>Puzzled by the question, David answered, "<b>Yes</b>."</p>
				<p><b>
					<em>Fast-forward&hellip;</em>
					<em class="medium">fast-forward&hellip;</em>
					<em class="small">fast-forward&hellip;</em>
					<em class="xsmall">fast-forward&hellip;</em>
				</b></p>
				<p>Now, they're getting married on November 3rd 2018!!! <i class="fa fa-smile-o"></i></p>
			</b-jumbotron>
		</div>
	</div>
</template>

<script>
</script>

<style lang="sass" scoped>
	@import '../styles/_variables.sass';

	.content
		margin-bottom: 3rem;

		.jumbotron
			background: $background2 url('../assets/stock/davidanddacia.png') 50% 62% no-repeat / cover;
			color: $text2;
			margin-left: auto;
			margin-right: auto;
			padding: 2rem;
			width: 70%;

			.display-3
				margin-bottom: 2rem;

			.lead
				font-weight: 600;

			i
				font-size: 1.4rem;
				margin-left: .5rem;
</style>
