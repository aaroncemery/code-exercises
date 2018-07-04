/* this is a function that goes through an array and counts the number of times
*  a number appears, and then returns the number that appears an odd number of
*  times.
*/

function findOdd(A) { 
  var count = 0;
  for(var i = 0; i <= A.length; i++) {
    for(var j = 0; j < A.length; j++) {
      if (A[i] === A[j]) {
        count++;
      }
    }
    if(count % 2 != 0) {
      return A[i];
    }
  }
  count = 0;
}
