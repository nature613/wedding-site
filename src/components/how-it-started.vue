<template>
	<div>
		<div class="content">
			<div class="jumbotron jumbotron-fluid">
				<div class="image">
					<img src="../assets/stock/davidanddacia.png" alt="Dacia and David" />
				</div>
				<div class="block-content">
					<h1 class="display-3">The Story</h1>
					<p class="lead">"David, are you single?"</p>
					<p>That question was asked starting it all. He arrived to work on October 26, 2012, business as usual&hellip; so he thought. He did not realize that there was a well-thought out plan that had been in the works for the past 3 weeks by her. Puzzled by the question, he answered, "<b>Yes</b>."</p>
					<p>
						<b>
							<em>Yadda&hellip;</em>
							<em class="medium">yadda&hellip;</em>
							<em class="small">yadda&hellip;</em>
						</b>
					</p>
					<p class="cap">Now, they're getting married on November 3rd 2018 (replace with countdown)!!! <i class="fa fa-smile-o"></i></p>
				</div>
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
			@include rem(padding, 0 0 20px !important);
			border-radius: 6px;
			width: 800px;

			.display-3
				@include rem(margin-bottom, 10px);
				text-align: left;

			.image
				@include rem(margin, 0 auto 10px);
				border: 1px solid $text;
				border-bottom: 0 none;
				border-radius: 6px 6px 0 0;
				box-shadow: 0 0 7px $background;
				display: block;
				width: 800px;

				img
					border-radius: 6px  6px 0 0;
					max-width: 100%;

			.block-content
				@include rem(padding, 0 20px);
				margin-top: 20px;

				.lead
					@include bold;
					text-align: left;

				.small
					font-weight: bolder;

				i
					@include rem(font-size, 14px);
					@include rem(margin-left, 5px);
</style>
