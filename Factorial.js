//https://www.codewars.com/kata/57a049e253ba33ac5e000212
function factorial(n){
  let fact = 1;
  let i = 1;
  while ( i <= n){
    fact = fact * i;
    i++;
  }
  return fact;
}
