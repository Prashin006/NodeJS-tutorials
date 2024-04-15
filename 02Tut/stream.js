const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt', { encoding: 'utf-8' });

const ws = fs.WriteStream('./files/new-lorem.txt');

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// });

// Instead of writing above code just do piping
rs.pipe(ws);