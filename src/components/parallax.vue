<template>
	<div class="parallax" :style="computedStyle">
		<slot></slot>
	</div>
</template>

<script>

	export default {
		name: 'parallax',
		props: {
			'background-x': {
				default: '50%'
			},
			'background-y': {
				default: '0%'
			},
			'speed': {
				default: 0.7
			}
		},
		computed: {
			computedStyle: function () {
				return {
					backgroundPosition: `${this.backgroundX} ${this.backgroundY}`
				}
			}
		},
		mounted() {
			window.onscroll = () => {
				const parallax = document.querySelectorAll('.parallax');
				[].slice.call(parallax).forEach((el, i) => {
					el.style.backgroundPosition = `${this.backgroundX} calc(${this.backgroundY} + ${window.pageYOffset * this.speed}px)`
				});
			};
		}
	}

</script>
