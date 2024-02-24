import { EditorView, basicSetup } from "codemirror";
import { sql, SQLDialect, SQLite } from "@codemirror/lang-sql";

console.log("editor loaded");

const editor = new EditorView({
  extensions: [basicSetup, sql({ dialect: SQLite })],
  parent: document.body,
});
