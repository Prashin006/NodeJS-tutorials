// const fs = require('fs');
const fsPromises = require('fs').promises;
const { randomBytes } = require('crypto');
const path = require('path');

// fs.readFile('./files/starter.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     // console.log(data);      // outputs buffer data
//     // console.log(data.toString());       // instead of using toString() method we can use encoding of 'utf-8'
//     console.log(data);
// });

// Another way to open a file by using the 'path' module in a simpler way
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// fs.writeFile('./files/reply.txt', 'Nice to meet you!', (err) => {
//     if (err) throw err;
//     console.log('Write complete');
// });

// fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\nThis is another another me again!', (err) => {
//     if (err) throw err;
//     console.log('Append complete');
// });

// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'testing text', (err) => {
//     if (err) throw err;
//     console.log('Append complete');
// });

console.log('Hello...');

// By using appendFile and rename inside the callbacks of writeFile and appendFile respectively we are synchronously controlling the flow of our program
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', err => {
//     if (err) throw err;
//     console.log('Write complete');

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is.', err => {
//         if (err) throw err;
//         console.log('Append complete');

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), err => {
//             if (err) throw err;
//             console.log('Rename complete');
//         });

//     });

// });
// 'unlink' is used to delete the file
// Above thing is known as callback hell to avoid it we use fspromises => similar to async - await
// Here fileOps is a function and we need to call it for it to execute
const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8');
        console.log(data);
        await fsPromises.unlink('./files/starter.txt');
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you.')
        await fsPromises.rename('./files/promiseWrite.txt', './files/promiseComplete.txt');
        const newData = await fsPromises.readFile('./files/promiseComplete.txt', 'utf-8');
        console.log(newData);
    } catch (err) {
        console.error(err);
    }
}

fileOps();
// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1)
});

