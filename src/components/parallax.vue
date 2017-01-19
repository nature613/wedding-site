<template>
	<div class="parallax" :style="computedStyle">
		<slot></slot>
	</div>
</template>

<script>

export default {
	name: 'parallax',
	props: ['background-x', 'background-y'],
	computed: {
		computedStyle: function () {
			return {
				backgroundPosition: `${this.backgroundX} ${this.backgroundY}`
			}
		}
	},
	mounted() {
		const speed = 0.7
		window.onscroll = () => {
			const parallax = document.querySelectorAll('.parallax');
			[].slice.call(parallax).forEach((el, i) => {
				el.style.backgroundPosition = `${this.backgroundX} calc(${this.backgroundY} + ${window.pageYOffset * speed}px)`
			});
		};
	}
}

</script>
