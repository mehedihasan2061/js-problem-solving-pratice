// leap year function

// function leapYear(year) {
//     if ((year % 4 === 0) && (year % 100 !== 0)|| (year % 400 === 0)) {
//         console.log('is leap year');
//     }
//     else {
//         console.log('not leap year')
//     }
// }

// const isYear = leapYear(2023);




// ****feet to Inch****

/*
   1feet=12 inch;
   feet =144/12;
   ************************
*/


// function inchToFeet(inch) {
//     const feet = inch / 12;
//     return feet;
// }

// const dadaInch = 156;
// const dadaFeet = inchToFeet(dadaInch);
// console.log(dadaFeet);



// ****inch to feet *****

// function feetToInch(feet) {
//     const inch = feet * 12;
//     return inch;
// }
// const isFeet = 15;
// const isInch = feetToInch(isFeet);
// console.log(isInch)



        //    1miles=1.60km
        //   ***********************
        
        // miles to km 

// function milesToKm(miles) {
//     const km = miles * 1.60;
//     return km;
// }
// const isMiles = 8;
// const isKm = milesToKm(isMiles);
// console.log(isKm);




/*
 km to miles
*/
// function kmToMiles(km) {
//     const mile = km / 1.60;
//     return mile;
// }
// const totalkm = 16;
// const miles1 = kmToMiles(totalMiles);


/*
                     hOUR TO Min convert
        1hour=60min;
        5hour=60*5;
*/

function hourToMin(hour) {
    const minute = hour * 60;
    return minute;
}
const perHour = 8;
const totalMin = hourToMin(perHour);
console.log(totalMin)


/*
ঢাকা যাইতে সময় লাগবে 4 ঘন্টা!!! apply function
*/

function timeToDhaka(time) {
    const min = time * 60;
    return min;
}
const totalTime = 4;
const times = timeToDhaka(totalTime);
console.log(times);



// তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে।
//  সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even
// হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।


function oddEvenNum(number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const age = 28;
const result = oddEvenNum(age);
console.log(result);