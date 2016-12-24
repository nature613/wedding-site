<template>
	<div class="jumbotron jumbotron-fluid">
		<h2 class="display-3">Record A Message to Us!</h2>
		<div id="video" class="row">
			<div class="col-lg-2"></div>
			<div id="video-recording" class="col-lg-8">
				<div v-if="isRecording">
					<div class="flashing"><i class="fa fa-circle"></i></div>
					<div class="video-container">
						<video autoplay muted></video>
					</div>
					<div class="recording stop">
						<button @click="stop"><i class="fa fa-stop"></i></button>
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

<style lang="sass" scope>
	@import '../styles/_variables.sass';

	.jumbotron
		width: 86%;

	#video
		margin: 1rem;

		#video-recording
			.flashing
				animation: blinker 1s linear infinite;

				i
					color: red;
					font-size: 1rem;

			@keyframes blinker
				50%
					opacity: 0;

			.video-container
				margin-bottom: 1rem;
				padding: 3rem;

				video
					height: auto !important;
					width: 100% !important;

			.recording
				background: transparent url('../assets/stock/video.png') top left no-repeat;
				background-size: cover;
				height: 10rem;
				margin: auto;
				width: 10rem;

				&.start,
				&.stop
					button
						background-color: transparent;
						border: 0 none;
						vertical-align: middle;

						i
							color: $text;
							margin-right: 0;
							position: relative;
							top: 4rem;

</style>
