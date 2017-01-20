<template>
	<div class="parallax" :style="computedStyle">
		<slot></slot>
	</div>
</template>

<script>

	export default {
		props: {
			'background-x': { type: String, default: '50%' },
			'background-y': { type: String, default: '0%' },
			'speed': { type: Number, default: 0.7 }
		},
		data: function () {
			return {
				offset: 0
			}
		},
		computed: {
			computedStyle: function () {
				return {
					backgroundPosition: `${this.backgroundX} calc(${this.backgroundY} + ${this.offset}px)`
				}
			}
		},
		methods: {
			onScroll() {
				this.offset = window.pageYOffset * this.speed
			}
		},
		mounted() {
			window.addEventListener('scroll', this.onScroll)
		},
		destroy() {
			window.removeEventListener('scroll', this.onScroll)
		}
	}

</script>
