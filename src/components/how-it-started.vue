<template>
	<div class="ui raised segment">
		<h2 class="display-3">The Story</h2>
		<p class="lead">"David, are you single?"</p>
		<p>That question was asked starting it all. He arrived to work on October 26, 2012, business as usual&hellip; so he thought. He did not realize that there was a well-thought out plan that had been in the works for the past 3 weeks by Dacia. Puzzled by the question, he answered, </p>
		<p>
			<b>"Yes"</b>
			<strong class="pl-5">
				<em>Yadda&hellip;</em>
				<em class="medium">yadda&hellip;</em>
				<em class="small">yadda&hellip;</em>
			</strong>
		</p>
	</div>
</template>

<style scoped lang="sass">

	.ui.segment
		@include rem(margin, 0 auto 30px)
		@include rem(padding, 25px 30px 25px)
		background: $background3b
		max-width: 800px

		.display-3
			@include animation(1s fadeIn forwards)
			@include rem(margin-bottom, 10px)
			text-align: left

		.lead
			@include animation(1s fadeIn forwards)
			@include bold()
			color: $text8
			font-family: $font-stack-serif
			text-align: left

		b
			@include rem(padding-right, 10px)
			color: $text8
			display: inline-block
			font-family: $font-stack-serif
			font-size: 26px

		.small
			font-weight: bolder

		i,
		.svg-inline--fa
			@include rem(margin-left, 5px)
			font-size: 16px

</style>
