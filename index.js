const https = require("https");

const token =
  "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";

const options = {
  host: "api.github.com",
  path: "/user/repos",
  method: "GET",
  headers: {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    Authorization: "Bearer " + token,
    "User-Agent": "Awesome-Octocat-App",
  },
};

const request = https.request(options, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
