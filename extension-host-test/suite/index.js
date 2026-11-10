const path = require('path');
const Mocha = require('mocha');

exports.run = () => new Promise((resolve, reject) => {
	const mocha = new Mocha({ timeout: 30000 });
	const testFile = path.resolve(__dirname, 'extension.test.js');
	Mocha.interfaces.bdd(mocha.suite);
	mocha.suite.emit('pre-require', globalThis, testFile, mocha);
	mocha.addFile(testFile);
	mocha.run((failures) => {
		if (failures > 0) reject(new Error(`${failures} extension host test(s) failed.`));
		else resolve();
	});
});
