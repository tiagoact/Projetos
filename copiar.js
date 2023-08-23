const fs = require('fs-extra');
const path = require('path');


const oriPath = path.join('git/example');
const destPath = path.join('copia');

console.log('oriPath',oriPath);
console.log('destPath',destPath);
  
 //Async with promises:
 fs.copy(oriPath, destPath)
 .then(() => console.log('Files copied successfully!'))
 .catch(err => console.error(err));