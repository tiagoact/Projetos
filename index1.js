const https = require("https");
const fs = require("fs");

const token =
  "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";

const options = {
  host: "api.github.com",
  path: "/repos/act-tech-hub/front-bank/zipball/main",
  method: "GET",
  headers: {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    Authorization: "Bearer " + token,
    "User-Agent": "Awesome-Octocat-App",
  },
};

https
  .get(options, (res) => {
    const imagePath = "./img/act-tech-hub-front-bank.zip";
    const stream = fs.createWriteStream(imagePath);
    res.pipe(stream);
  })
  .on("error", (err) => {
    console.log(err);
  });
