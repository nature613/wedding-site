const chalk = require('chalk')
const child_process = require('child_process')
const semver = require('semver')

const packageConfig = require('../package.json')

const exec = function (cmd) {
	return child_process.execSync(cmd).toString().trim()
}

const versionRequirements = [
	{
		name: 'node',
		currentVersion: semver.clean(process.version),
		versionRequirement: packageConfig.engines.node
	},
	{
		name: 'npm',
		currentVersion: exec('npm --version'),
		versionRequirement: packageConfig.engines.npm
	}
]

module.exports = function () {
	const warnings = []

	for (const module of versionRequirements) {
		if (!semver.satisfies(module.currentVersion, module.versionRequirement)) {
			warnings.push(module.name + ': ' +
				chalk.red(module.currentVersion) + ' should be ' +
				chalk.green(module.versionRequirement)
			)
		}
	}

	if (warnings.length) {
		console.log('')
		console.log(chalk.yellow('To use this template, you must update following to modules:'))
		console.log()
		for (const warning of warnings) {
			console.log('  ' + warning)
		}
		console.log()
		process.exit(1)
	}
}
