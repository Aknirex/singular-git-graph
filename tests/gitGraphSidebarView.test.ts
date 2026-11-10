import * as vscode from './mocks/vscode';
jest.mock('vscode', () => vscode, { virtual: true });

import { GitGraphSidebarViewProvider } from '../src/gitGraphSidebarView';
import { GitGraphView } from '../src/gitGraphView';

describe('GitGraphSidebarViewProvider', () => {
	it('Should initialize the shared graph view in the sidebar webview', () => {
		const view = {} as any;
		const dependencies = [{}, {}, {}, {}, {}, {}] as any[];
		const initialize = jest.spyOn(GitGraphView, 'createInSidebar').mockImplementation(() => { });
		const provider = new GitGraphSidebarViewProvider('/extension', dependencies[0], dependencies[1], dependencies[2], dependencies[3], dependencies[4]);

		provider.resolveWebviewView(view);

		expect(initialize).toHaveBeenCalledWith(view, '/extension', dependencies[0], dependencies[1], dependencies[2], dependencies[3], dependencies[4]);
		initialize.mockRestore();
	});
});
