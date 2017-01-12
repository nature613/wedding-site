// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
	'Home': function (browser) {
		const { devServerURL } = browser.globals

		browser
			.url(devServerURL)
			.waitForElementVisible('#app', 5000)

		browser.expect.element('a.nav-link.active').text.to.equal('Home')
		browser.expect.element('.wrapper').to.have.css('background-color').which.equals('rgba(207, 178, 120, 1)')

		browser.end()
	}
}
