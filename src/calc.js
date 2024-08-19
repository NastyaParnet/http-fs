const calcFunc = (operation, a, b) => {
  let result = null;
  switch(operation) {
    case 'add': 
      result = a + b;
      break;
    case 'sub': 
      result = a - b;
      break;
    case 'mul': 
      result = a * b;
      break;
    case 'div': 
      result = a / b;
      break;
  }
  if(result === null) throw new Error('Operation unknown');
  return String(result);
}

module.exports = calcFunc;