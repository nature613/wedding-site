<template>
	<div>
		<div class="content">
			<div class="jumbotron jumbotron-fluid">
				<img src="../assets/stock/davidanddacia.png" alt="Dacia and David" />

				<h1 class="display-3">The Story</h1>
				<p class="lead">"David, are you single?"</p>
				<p>That question was asked starting it all. David arrived to work on October 26, 2013, business as usual&hellip; so he thought. He did not realize that there was a well-thought out plan that had been in the works for the past 3 weeks by Dacia. Puzzled by the question, David answered, "<b>Yes</b>."</p>
				<p>
					<b>
						<em>Fast-forward&hellip;</em>
						<em class="medium">fast-forward&hellip;</em>
						<em class="small">fast-forward&hellip;</em>
						<em class="xsmall">fast-forward&hellip;</em>
					</b>
				</p>
				<p class="cap">Now, they're getting married on November 3rd 2018 (replace with countdown)!!! <i class="fa fa-smile-o"></i></p>
			</div>
		</div>
	</div>
</template>

<script>

export default {
}

</script>

<style lang="sass" scoped>
	@import '../styles/_variables.sass';

	.content
		margin-bottom: 3rem;

		.jumbotron
			width: 86%;

			p
				margin-bottom: 0;

			img
				display: inline-block;
				float: left;
				margin: 0 1rem 1rem 0;
				width: 60%;

			.display-3
				margin-bottom: 1rem;
				text-align: left;

			.lead
				font-weight: 600;
				text-align: left;

			.small
				font-weight: bolder;

			i
				font-size: 1.4rem;
				margin-left: .5rem;
</style>
