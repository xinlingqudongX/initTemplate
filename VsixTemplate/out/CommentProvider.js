"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const winax = require('winax');
/** 自动补全代码测试 */
class CommentProvider {
    provideCompletionItems(document, position) {
        //  当前行
        const line = document.lineAt(position);
        //  当前行文本
        const lineText = line.text;
        // console.log(lineText);
        // try {
        //     const obj = winax.Object('Sapi.SpVoice');
        //     obj.Speak('你好');
        // } catch (error) {
        //     console.log(error);
        // }
        //  匹配当前行文本为// 
        if (lineText.slice(-2) === '//') {
            const testname = vscode.workspace.getConfiguration().get('poetry-reader.name');
            const tempRes = `@${testname}(${new Date().toLocaleDateString()})`;
            const res = new vscode.CompletionItem(tempRes, vscode.CompletionItemKind.Snippet);
            return [res];
        }
    }
}
exports.default = CommentProvider;
//# sourceMappingURL=CommentProvider.js.map