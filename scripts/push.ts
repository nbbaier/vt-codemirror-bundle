import { Octokit, App } from "octokit";

const octokit = new Octokit({
  auth: Bun.env.GIST_TOKEN,
});

try {
  const file = Bun.file("./editor.js");
  const code = await file.text();
  const filename = "editor.js";
  const res = await octokit.request("POST /gists", {
    description: "bundled codemirror editor",
    public: true,
    files: {
      [`${filename}`]: {
        content: code,
      },
    },
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  console.log(`https://gist.github.com/nbbaier/${res.data.id}`);
} catch (error) {
  console.log(error);
}
