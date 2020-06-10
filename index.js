function mapToNegativize(sourceArray){
  let newArr = [];
  sourceArray.forEach(element => {
    newArr.push(element * -1);
  });
  return newArr;
}

