var test = [1,2,3,4];


function chunk(array, size){
  if(typeof size !== 'number' || size < 1){
    size = 1;
  }
  var temp = [];
  for(let i = 0; i < Object.keys(array).length; i = i + size){
    if( i+size <= Object.keys(array).length){
      temp.push(array.slice(i, i + size));
      console.log(i);
    }else if(i+size > Object.keys(array).length){
      temp.push(array.slice(i, array.lenght));
    }
  }
  return temp;
}
console.log(chunk(test, 2));