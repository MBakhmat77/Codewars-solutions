//https://www.codewars.com/kata/525e5a1cb735154b320002c8
// Return the nth triangular number
function triangular( n ) {
 let nthnum;
  if (n < 0)return 0;
  return   n * ( n + 1)/2 ;
}
