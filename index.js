function mapToNegativize(sourceArray){
  let newArr = [];
  sourceArray.forEach(element => {
    newArr.push(element * -1);
  });
  return newArr;
}

function mapToNoChange(sourceArray){
  let newArr = [...sourceArray];
  return newArr;
}

function mapToDouble(sourceArray){
  let newArr = [];
  sourceArray.forEach(element => {
    newArr.push(element * 2);
  });
  return newArr;
}

function mapToSquare(sourceArray){
  let newArr = [];
  sourceArray.forEach(element => {
    newArr.push(element ** 2);
  });
  return newArr;
}

function reduceToTotal(sourceArray, startingPoint = 0){
  let total = 0;
  sourceArray.forEach(element => {
    total += startingPoint;
  });
  return total;
}

function 