var _ = {
  clamp(number, lower, upper){
    return Math.min(upper, Math.max(number, lower))
  },
  inRange(number, start, end){
    if(typeof end === 'undefined'){
      end = (start > 0 ? start : 0);
      start = (start > 0 ? 0 : start);
    }
    if(start > end){
      [start, end] = [end, start];
    }
    return (start <= number && number < end)? true : false;
  },
  words(string){
    return string.split(' ');
  },
  pad(string, maxSize){
    if(string.length>maxSize){
      return string;
    }
    let startPaddingLength = Math.floor((maxSize - string.length)/2);
    let endPaddingLength = maxSize - string.length - startPaddingLength
    let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;
  }, 
  has()
};




// Do not write or modify code below this line.
module.exports = _;