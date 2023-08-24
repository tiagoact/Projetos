// const fs = require('fs');
// fs.readdir('./', (err, files) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   files.forEach(element => {
//     console.log(element);
//  });
// });

// fs.readdir('./', (err, files) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     files.forEach((file) => {
//       if (file.endsWith('.txt')) {
//         console.log(file);
//       }
//     });
//   });


const recursiveReaddir = require('recursive-readdir');
recursiveReaddir('./', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(files);

  console.log("---------------------------------------------------------------------------------------------------------------------------");

  files.forEach((file) => {
             console.log(file);
        });
});


