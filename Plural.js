//https://www.codewars.com/kata/52ceafd1f235ce81aa00073a
function plural(n) {
  if ( n === 0)return true;
  else if ( n > 0 && n < 1 ) return true;
  else if ( n === 1 ) return false;
  else if ( n > 1)return true;
}
