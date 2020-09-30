# Codewars-solutions
//Breaking chocolate problem
function breakChocolate(n,m) {
  let minBreak;
  if ( m===0 || n===0)return 0;
  minBreak = ( n * m ) - 1;
  return minBreak;
}
