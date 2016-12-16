<template>
	<div id="video" class="row">
		<div class="col-lg-2"></div>
		<div id="video-recording" class="col-lg-8">
			<div v-if="isRecording">
				<div class="video-container">
					<video autoplay muted></video>
				</div>
				<button @click="stop">Stop Recording</button>
			</div>
			<div v-else>
				<button @click="start">Start Recording</button>
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

<style lang="sass">
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
</style>
