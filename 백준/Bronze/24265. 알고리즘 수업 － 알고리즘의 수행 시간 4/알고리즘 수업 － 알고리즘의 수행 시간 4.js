const fs = require('fs');
const input =+fs.readFileSync(0, 'utf-8').trim().toString();
console.log((input-1)*(input)/2);
console.log(2);