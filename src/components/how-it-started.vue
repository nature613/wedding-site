<template>
	<div>
		<div class="content">
			<div class="image">
				<img src="../assets/stock/davidanddacia.png" alt="Dacia and David" />
			</div>

			<div class="jumbotron jumbotron-fluid">
				<h1 class="display-3">The Story</h1>
				<p class="lead">"David, are you single?"</p>
				<p>That question was asked starting it all. He arrived to work on October 26, 2012, business as usual&hellip; so he thought. He did not realize that there was a well-thought out plan that had been in the works for the past 3 weeks by her. Puzzled by the question, he answered, "<b>Yes</b>."</p>
				<p>
					<b>
						<em>Yad&hellip;</em>
						<em class="medium">yad&hellip;</em>
						<em class="small">yad&hellip;</em>
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

		.image
			@include rem(margin, 0 auto 10px);
			border-radius: 10px;
			box-shadow: 0 0 7px $background;
			display: block;
			width: 800px;

			img
				max-width: 100%;

		.jumbotron
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
