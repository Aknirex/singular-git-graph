import * as vscode from 'vscode';
import { AvatarManager } from './avatarManager';
import { DataSource } from './dataSource';
import { ExtensionState } from './extensionState';
import { GitGraphView } from './gitGraphView';
import { Logger } from './logger';
import { RepoManager } from './repoManager';

export class GitGraphSidebarViewProvider implements vscode.WebviewViewProvider {
	constructor(
		private readonly extensionPath: string,
		private readonly dataSource: DataSource,
		private readonly extensionState: ExtensionState,
		private readonly avatarManager: AvatarManager,
		private readonly repoManager: RepoManager,
		private readonly logger: Logger
	) { }

	public resolveWebviewView(view: vscode.WebviewView) {
		GitGraphView.createInSidebar(view, this.extensionPath, this.dataSource, this.extensionState, this.avatarManager, this.repoManager, this.logger);
	}
}
