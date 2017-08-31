<template>
	<div id="video" class="jumbotron">
		<h2>Record A Message to Us!</h2>
		<div>
			<div id="video-recording">
				<div v-if="isRecording">
					<div class="recording stop flashing">
						<button @click="stop"><i class="fa fa-stop"></i></button>
					</div>
					<div class="video-container">
						<video autoplay muted></video>
					</div>
				</div>
				<div v-else>
					<p class="lead">Click video icon to record your message.</p>
					<div class="recording start">
						<button @click="start"><i class="fal fa-video"></i></button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'video-capture',
		data: function () {
			return {
				isRecording: false
			}
		},
		methods: {
			start() {
				const setupVideo = (stream) => {
					this._stream = stream
					const video = document.querySelector('video')
					video.src = window.URL.createObjectURL(stream)
				}

				navigator.getUserMedia(
					{ video: true, audio: true },
					(stream) => setupVideo(stream),
					(e) => {}
				)

				this.isRecording = true
			},
			stop() {
				this._stream.getAudioTracks().forEach(track => track.stop())
				this._stream.getVideoTracks().forEach(track => track.stop())
				this.isRecording = false
			}
		}
	}

</script>

<style lang="sass" scoped>

	@import '../styles/main.sass'

	#video
		background: transparent
		text-align: center

		&.jumbotron
			@include rem(margin, 40px auto 0)
			@include rem(padding-top, 0)
			max-width: 800px
			min-width: 280px
			width: 100%

			h2
				@include rem(margin-bottom, 7px)
				font-size: 30px

			.lead
				@include rem(margin-top, 0)
				font-size: 18px

			#video-recording
				.flashing
					animation: blinker 1s linear infinite
					line-height: 27px
					text-align: center

					i,
					.svg-inline--fa
						color: red
						font-size: 16px
						margin-right: center

				@keyframes blinker
					50%
						opacity: 0

				.video-container
					@include rem(margin, 10px 0 5px)

					video
						height: auto !important
						width: 100% !important

				.recording
					@include rem(margin, 20px auto)
					@include size(10rem, 10rem)

					&.start,
					&.stop
						button
							@include size(100%, 100%)
							background-color: $background3b
							border-radius: $border-radius-round
							padding: 30px
							vertical-align: middle

							&:focus,
							&:active,
							&:hover
								border-color: $anchor-text2
								cursor: pointer
								outline: 0

								i,
								.svg-inline--fa
									color: $anchor-text2

							i,
							.svg-inline--fa
								@include rem(margin-right, 0)
								color: $text
								font-size: 70px
								position: relative

					&.stop
						@include size(2rem, 2rem)

						button
							border: none
							padding: 7px

							&:focus,
							&:active,
							&:hover
								box-shadow: 0 0 5px 0 $color-red inset, 0 0 5px 4px $color-red

								i,
								.svg-inline--fa
									color: $color-red

							i,
							.svg-inline--fa
								color: $color-red
								font-size: 16px

</style>
