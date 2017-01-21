<template>
	<div>
		<div class="block">
			<!-- <p class="digit">{{ days }}</p> -->
			<p class="digit">00</p>
			<p class="text">Days</p>
		</div>
		<div class="block">
			<!-- <p class="digit">{{ hours }}</p> -->
			<p class="digit">00</p>
			<p class="text">Hours</p>
		</div>
		<div class="block">
			<!-- <p class="digit">{{ minutes }}</p> -->
			<p class="digit">00</p>
			<p class="text">Minutes</p>
		</div>
		<div class="block">
			<!-- <p class="digit">{{ seconds }}</p> -->
			<p class="digit">00</p>
			<p class="text">Seconds</p>
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

	.block
		@include rem(margin, 20px);
		display: flex;
		flex-direction: column;

		.text
			@include rem(font-size, 40px);
			@include rem(margin, 10px 0);
			color: $text3;
			text-align: center;

		.digit
			@include rem(font-size, 150px);
			@include rem(margin, 10px);
			color: $text;
			text-align: center;

</style>
