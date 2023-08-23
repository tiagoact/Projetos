// https://www.webmound.com/nodejs-download-file-best-guide/

const fs = require('fs');
const https = require('https');

const download = (url, path) => {
    https.get(url, (res) => {
        const stream = fs.createWriteStream(path);

        res.pipe(stream);

        stream.on('finish', () => {
            stream.close();
            console.log('Image downloaded');
        });
    }).on('error', (err) => {
        // handle error
        console.log(err);
    });
};

const urls = [
    'https://codeload.github.com/act-tech-hub/front-bank/legacy.zip/refs/heads/main',
    'https://www.webmound.com/uploads/26/banner.jpg',
];

urls.forEach((url) => {
    const fileName = url.split('/').pop();
    download(url, `./img/${fileName}`);
});