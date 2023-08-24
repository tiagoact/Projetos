import fs from "fs/promises";

deleteAllInDir("./downloads/temp").then(() => {
  console.log("Removed all files from the specified directory");
});

async function deleteAllInDir(dirPath) {
  try {
    await fs.rm(dirPath, { recursive: true });

    await fs.mkdir(dirPath);
  } catch (err) {
    console.log(err);
  }
}
