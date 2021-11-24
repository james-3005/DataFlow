const getIndex = (array, value) =>{
  let length = array.length, i=0;
  for(i; i < length; i++)
    if (array[i] === value)
      return i;
  return -1;
}

module.exports = {getIndex}

