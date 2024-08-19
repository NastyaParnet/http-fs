const fs = require('fs');

const fsFunc = (operation, filename, text) => {
  if(operation === 'create') {
    return fs.promises.writeFile(filename, text)
      .then(() => `${filename} was created`)
      .catch(() => {throw new Error('Unknown error')});
  }
  else if(operation === 'read') {
    return fs.promises.readFile(filename)
      .then(data => data)
      .catch(() => {throw new Error('File not found')});
  }
  else {
    throw new Error('Operation unknown');
  }
}

module.exports = fsFunc;