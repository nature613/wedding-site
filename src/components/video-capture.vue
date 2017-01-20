<template>
	<div class="jumbotron jumbotron-fluid">
		<h2>Record A Message to Us!</h2>
		<div id="video" class="row">
			<div class="col-lg-2"></div>
			<div id="video-recording" class="col-lg-8">
				<div v-if="isRecording">
					<div class="flashing"><i class="fa fa-circle"></i></div>
					<div class="recording stop">
						<button @click="stop"><i class="fa fa-stop"></i></button>
					</div>
					<div class="video-container">
						<video autoplay muted></video>
					</div>
				</div>
				<div v-else>
					<p class="lead">Click play to record your message.</p>
					<div class="recording start">
						<button @click="start"><i class="fa fa-play"></i></button>
					</div>
				</div>
			</div>
			<div class="col-lg-2"></div>
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
					this._stream = stream;
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

	@import '../styles/_tools.mixins.sass';
	@import '../styles/_variables.sass';

	.jumbotron
		@include rem(margin-top, 20px);
		max-width: 800px;
		width: 100%;

	#video
		@include rem(margin, 10px);

		#video-recording
			.flashing
				@include rem(animation, blinker 1s linear infinite);
				text-align: center;

				i
					@include rem(font-size, 10px);
					color: red;
					margin-right: center;

			@keyframes blinker
				50%
					opacity: 0;

			.video-container
				@include rem(margin, 10px 0 5px);

				video
					height: auto !important;
					width: 100% !important;

			.recording
				@include size(5rem, 5rem);
				background: transparent url('../assets/stock/video.png') top left no-repeat;
				background-size: cover;
				margin: auto;

				&.start,
				&.stop
					button
						background-color: transparent;
						border: 0 none;
						vertical-align: middle;

						&:focus,
						&:active
							outline: 0;

						i
							@include rem(font-size, 17.5px);
							@include rem(margin-right, 0);
							color: $text;
							position: relative;
							top: 1.65rem;

</style>
