https://www.codewars.com/kata/546e2562b03326a88e000020
//////////////////////////////////////////////////////
function squareDigits(num){
 let number = num + '';
  let arr = number.split('');  
 let sqr;
sqr = arr.map(number => Math.pow(number,2));
 let result =  Number(sqr.join(''));
 return result;
}
