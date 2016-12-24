<template>
	<div id="video" class="row">
		<div class="col-lg-2"></div>
		<div id="video-recording" class="col-lg-8">
			<div v-if="isRecording">
				<div class="video-container">
					<video autoplay muted></video>
				</div>
				<div class="recording stop">
					<button @click="stop"><i class="fa fa-stop"></i></button>
				</div>
			</div>
			<div v-else>
				<p>If you want to record a video message to us, click the button below to start recording.</p>
				<div class="recording start">
					<button @click="start"><i class="fa fa-play"></i></button>
				</div>
			</div>
		</div>
		<div class="col-lg-2"></div>
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

	#video
		margin: 3rem;

		#video-recording
			.video-container
				background-color: rgba(43,6,22,0.5);
				box-shadow: 0px 0px 10px 5px rgba(43,6,22,0.5);
				margin-bottom: 1rem;
				padding: 3rem;

				video
					height: auto !important;
					width: 100% !important;

			.recording
				background: transparent url('../assets/stock/video.png') top left no-repeat / 60px 60px;
				height: 6rem;
				margin: 1rem auto;
				width: 6rem;

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
							top: 1.75rem;

</style>
