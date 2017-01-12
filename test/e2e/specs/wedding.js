// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
	'Wedding': function (browser) {
		const { devServerURL } = browser.globals

		browser
			.url(devServerURL + '#/wedding')
			.waitForElementVisible('#app', 5000)

		browser.expect.element('a.nav-link.active').text.to.equal('Wedding')
		browser.expect.element('.wrapper').to.have.css('background-color').which.equals('rgba(94, 8, 204, 1)')

		browser.end()
	}
}
