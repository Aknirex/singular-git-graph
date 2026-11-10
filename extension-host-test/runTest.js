const path = require('path');
const { runTests } = require('@vscode/test-electron');

const extensionDevelopmentPath = path.resolve(__dirname, '..');
const extensionTestsPath = path.resolve(__dirname, 'suite', 'index.js');
const vscodeExecutablePath = process.env.VSCODE_EXECUTABLE || path.resolve(process.env.LOCALAPPDATA, 'Programs', 'Microsoft VS Code', 'Code.exe');

runTests({
	vscodeExecutablePath,
	extensionDevelopmentPath,
	extensionTestsPath,
	launchArgs: [extensionDevelopmentPath, '--disable-gpu', '--skip-welcome', '--skip-release-notes']
}).catch((error) => {
	console.error(error);
	process.exit(1);
});
