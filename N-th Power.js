https://www.codewars.com/kata/57d814e4950d8489720008db
number1:
function index(array, n){
  let powN;
  for (let i = 0; i < array.length; i++){
    powN = Math.pow(array[n],n);
  if (n < 0 || n > array.length-1) return -1;
  }
  return powN;
}
//////////////////////////////////////////////////
number2:
function index(array, n){
  let powN;
  for (let i = 0; i < array.length; i++){
    powN = array[n] ** n;
  if (n < 0 || n > array.length-1) return -1;
  }
  return powN;
}
