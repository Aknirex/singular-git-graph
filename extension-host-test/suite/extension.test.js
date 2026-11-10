const assert = require('assert');
const vscode = require('vscode');

describe('Singular Git Graph Extension Host', () => {
	it('activates and resolves the contributed sidebar webview', async () => {
		const extension = vscode.extensions.getExtension('singular-attention.singular-git-graph');
		assert.ok(extension, 'extension is available in the extension host');

		await extension.activate();
		assert.ok(extension.isActive, 'extension activated');
		assert.strictEqual(extension.packageJSON.engines.vscode, '^1.50.0');
		assert.ok(extension.packageJSON.contributes.views.singularGitGraph.some((view) => view.id === 'singularGitGraph.graph' && view.type === 'webview'));

		const registeredCommands = await vscode.commands.getCommands(true);
		assert.ok(registeredCommands.includes('singular-git-graph.view'));
		assert.ok(registeredCommands.includes('singular-git-graph.fetch'));
		assert.ok(registeredCommands.includes('workbench.view.extension.singularGitGraph'));
		assert.strictEqual(vscode.workspace.getConfiguration('singular-git-graph').get('commitMessageIndent.mode'), 'dynamic');

		await vscode.commands.executeCommand('workbench.view.extension.singularGitGraph');
	});
});
