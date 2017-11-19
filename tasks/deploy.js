const inquirer = require('inquirer')
const path = require('path')
const readdir = require('recursive-readdir')
const SftpClient = require('ssh2-sftp-client')

const HOST = 'davidanddacia.com'
const DEPLOY_DIR = '/home/davidanddacia/davidanddacia.com/'

;(async function (){
	const answers = await inquirer.prompt([
		{
			default: 'davidanddacia',
			message: 'User Name:',
			name: 'username',
			type: 'input'
		},
		{
			message: 'Password:',
			name: 'password',
			type: 'password'
		}
	])

	const { username, password } = answers

	const files = await readdir('dist')

	const sftp = new SftpClient()

	try {
		await sftp.connect({ host: HOST, username, password })
		for (const file of files) {
			const relativePath = path.relative('dist', file)
			const localPath = path.resolve(file)
			const remotePath = path.posix.join(DEPLOY_DIR, relativePath.replace(/\\/g, '/'))
			console.log(`Uploading ${relativePath}...`)
			await sftp.mkdir(path.dirname(remotePath), true)
			await sftp.put(localPath, remotePath, true)
		}
	} catch (err) {
		console.log(err)
	}

	console.log('Done')

	process.exit(0)

}())
