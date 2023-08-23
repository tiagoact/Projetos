const decompress = require("decompress");

decompress("example.zip", "git/example")
  .then((files) => {
    console.log(files);
  })
  .catch((error) => {
    console.log(error);
  });