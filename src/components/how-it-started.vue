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
	@import '../styles/_tools.mixins.sass';
	@import '../styles/_variables.sass';

	.content
		@include rem(margin-bottom, 30px);

		.jumbotron
			width: 86%;

			p
				@include rem(margin-bottom, 0);

			img
				@include rem(margin, 0 10px 10px 0);
				display: inline-block;
				float: left;
				width: 60%;

			.display-3
				@include rem(margin-bottom, 10px);
				text-align: left;

			.lead
				@include bold;
				text-align: left;

			.small
				font-weight: bolder;

			i
				@include rem(font-size, 14px);
				@include rem(margin-left, 5px);
</style>
