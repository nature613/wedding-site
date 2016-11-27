<template>
	<div id="app">
		<video-capture></video-capture>
	</div>
</template>

<script>
import VideoCapture from './components/video-capture'

export default {
	name: 'app',
	components: {
		VideoCapture
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
