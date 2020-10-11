//https://www.codewars.com/kata/56d6c333c9ae3fc32800070f
function yearDays(year){
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        // Leap year
        return  `${year} has 366 days`;
    } else {
        // Not a leap year
        return `${year} has 365 days`;
    }
}
