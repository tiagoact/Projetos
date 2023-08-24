const fs = require("fs");
fs.readFile("templete.yaml", function (err, data) {
  console.log(data);
  fs.writeFileSync('arquivo.yaml', data);
});


//const data = 'testando sync';
//fs.writeFileSync('arquivo.txt', data);