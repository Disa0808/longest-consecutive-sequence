module.exports = function longestConsecutiveLength(array) {
  var sortedArray = array.sort(function(a, b) {
    return a - b;
  });
  var longestSequence = 0;
  var tmpSequence = 1;
  
  // sortedArray.map(function(itm, inx, arr){
  //   if(itm - arr[inx] == 1){
  //     tmpSequence++;
  //   } else {
  //     if(tmpSequence > longestSequence) {
  //       longestSequence = tmpSequence;
  //     }
  //     tmpSequence = 1;
  //   }
  // });

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
