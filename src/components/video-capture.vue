<template>
	<div>
		<div v-if="isRecording">
			<div>
				<video autoplay></video>
			</div>
			<button @click="stop">Stop Recording</button>
		</div>
		<div v-else>
			<button @click="start">Start Recording</button>
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

<style lang="sass">
	@import '../styles/_variables.sass';
</style>
