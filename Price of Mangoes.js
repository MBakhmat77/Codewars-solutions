https://www.codewars.com/kata/57a77726bb9944d000000b06
/////////////////////////////////////////////////////
function mango(quantity, price){
 let freeQuantity = Math.floor(quantity /3);
  let totalFree =freeQuantity * price;  
  let total = quantity * price - freeQuantity * price ;
 return total;
}  
