// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
	'Site Header': function (browser) {
		const { devServerURL } = browser.globals

		browser
			.url(devServerURL)
			.waitForElementVisible('#app', 5000)

		browser.expect.element('.navbar-brand').text.to.equal('Dacia & David')
		browser.expect.element('.navbar li:nth-child(1) a').text.to.equal('Home')
		browser.expect.element('.navbar li:nth-child(2) a').text.to.equal('Wedding')
		browser.expect.element('.navbar li:nth-child(3) a').text.to.equal('RSVP')
		browser.expect.element('.navbar li:nth-child(4) a').text.to.equal('Registry')
		browser.expect.element('.navbar li:nth-child(5) a').text.to.equal('While in Chicago')

		browser.end()
	}
}
