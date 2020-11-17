https://www.codewars.com/kata/5546180ca783b6d2d5000062

Complete the function that returns an array of length n, starting with the given number x
and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
////////////////////////////////////////////////////////////////////////////////////////////
function squares(x, n) {
//var arr = new Array(n);
  var arr = [];
  let xBeg = x;
  if ( n <=0 )return [];
  if (x > 0 &&  n === 1) return [x];
  if (  x === 0 && n  === 1) return [x];
  if (x === 1 && n === 1) return [1];
    for (var i = 1; i < n; i++) 
        { x = Math.pow(x,2);
         arr[0]= xBeg;
      arr[i] = x;
    }
          return arr;

}
