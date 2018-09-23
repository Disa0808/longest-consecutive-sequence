module.exports = function longestConsecutiveLength(array) {
  var sortedArray = array.sort(function(a, b) {
    return a - b;
  });
  var longestSequence = 0;
  var tmpSequence = 0;
  
  for(var i = 1; i < sortedArray.length; i++) {
    if(sortedArray[i] - sortedArray[i-1] == 1){
      tmpSequence++;
      continue;
    } else {
      if(tmpSequence > longestSequence) {
        longestSequence = tmpSequence;
      }
      tmpSequence = 1;
    }
  } 
  return longestSequence;

}
