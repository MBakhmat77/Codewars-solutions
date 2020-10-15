function differenceOfSquares(n){
  let dif;
  let sum = 0;
  let i = 1;
  while ( i <= n){
    sum = (sum + i) ;
    i++; 
  }
  sum = sum ** 2;
  let sumsq = 0;
  let j = 1;
  j = j ** 2;
  
  while ( j  <= n){
    sumsq = sumsq + (j ** 2) ;
    j++;
  }
  return sum -sumsq;
}
