import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('svgPngConverter.open', () => {
        const panel = vscode.window.createWebviewPanel(
            'svgPngConverter',
            'SVG & PNG Converter',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
                localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'media'))]
            }
        );

        const htmlPath = path.join(context.extensionPath, 'media', 'index.html');
        const htmlUri = vscode.Uri.file(htmlPath);
        const htmlContent = require('fs').readFileSync(htmlUri.fsPath, 'utf8');

        // Update resource paths for webview
        const updatedHtml = htmlContent.replace(/href="([^"]*)"/g, (match: string, href: string) => {
            if (href.startsWith('http') || href.startsWith('//')) {
                return match;
            }
            const resourceUri = panel.webview.asWebviewUri(vscode.Uri.file(path.join(context.extensionPath, 'media', href)));
            return `href="${resourceUri}"`;
        });

        panel.webview.html = updatedHtml;
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}