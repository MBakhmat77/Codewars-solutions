//https://www.codewars.com/kata/57be674b93687de78c0001d9
function largestPower(n){
  let result = 0
  while(3**result < n) {
    result++;
    }
  return result-1;
}
