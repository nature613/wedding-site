import Vue from 'vue'
import VideoCapture from 'src/components/video-capture'

describe('VideoCapture', () => {
	it('should start with "Start Recording" button', () => {
		const vm = new Vue({
			el: document.createElement('div'),
			render: (h) => h(VideoCapture)
		})
		expect(vm.$el.querySelector('button').textContent)
			.to.equal('Start Recording')
	})
})
