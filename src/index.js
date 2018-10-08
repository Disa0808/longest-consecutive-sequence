module.exports = function longestConsecutiveLength(array) {
  const sortedArray = array.sort((a, b) => {
    return a - b;
  });
  let longestSequence = 0;
  let tmpSequence = 1;
  

  switch(+sortedArray.length){
    case 0:
      longestSequence = 0;
      break;
    case 1:
      longestSequence = 1;
      break;
    default:
      for(var i = 1; i < sortedArray.length; i++) {
        if(sortedArray[i] - sortedArray[i-1] == 1){
          tmpSequence++;
          continue;
        } 
        if(sortedArray[i] === sortedArray[i-1]){
          continue;
        } else {
          if(tmpSequence > longestSequence) {
            longestSequence = tmpSequence;
          }
          tmpSequence = 1;
        }
      } 
  }


  return longestSequence;

}
