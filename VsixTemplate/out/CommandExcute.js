"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const winax = require('winax');
class CommandExcute {
    constructor() { }
    static excute(context) {
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
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}
exports.default = CommandExcute;
//# sourceMappingURL=CommandExcute.js.map