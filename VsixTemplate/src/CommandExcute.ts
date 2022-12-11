import * as vscode from 'vscode';
const winax = require('winax');

export default class CommandExcute {
    constructor() { }
    static excute(context: vscode.ExtensionContext) {
        //  获取当前活动编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        //  获取选中的文本
        const selection = editor.selection;
        const text = editor.document.getText(selection);

        if (text) {
            try {
                const obj = winax.Object('Sapi.SpVoice');
                obj.Speak(text);
            } catch (error) {
                console.log(error);
            }
        }
    }
}