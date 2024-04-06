import { EditorState } from "@codemirror/state";
import { EditorView, basicSetup } from "codemirror";
import { sql, SQLite } from "@codemirror/lang-sql";

const initialText = 'console.log("hello, world")';
const targetElement = document.querySelector("#editor")!;

const editor = new EditorView({
  parent: targetElement,
  state: EditorState.create({
    doc: initialText,
    extensions: [basicSetup, sql({ dialect: SQLite })],
  }),
});
