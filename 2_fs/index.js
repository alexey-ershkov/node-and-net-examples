const fs = require('node:fs');

const files = fs.readdirSync('.');
console.log('Files are:');
console.log(JSON.stringify(files, null, 4));

const scriptData = fs.readFileSync('./1_simple_script/index.js').toString();
console.log('Script data is:')
console.log(scriptData);