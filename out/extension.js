"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const path = require("path");
function activate(context) {
    let disposable = vscode.commands.registerCommand('svgPngConverter.open', () => {
        const panel = vscode.window.createWebviewPanel('svgPngConverter', 'SVG & PNG Converter', vscode.ViewColumn.One, {
            enableScripts: true,
            localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'media'))]
        });
        const htmlPath = path.join(context.extensionPath, 'media', 'index.html');
        const htmlUri = vscode.Uri.file(htmlPath);
        const htmlContent = require('fs').readFileSync(htmlUri.fsPath, 'utf8');
        // Update resource paths for webview
        const updatedHtml = htmlContent.replace(/href="([^"]*)"/g, (match, href) => {
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
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map