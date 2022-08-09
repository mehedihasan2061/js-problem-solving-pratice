var fruits = ['apple', 'banana', 'orange'];
var result = fruits.indexOf('')








/*                      ***practice-3***

80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

*/

var marks = 30;

if (marks >= 90) {
    console.log('Jane’s total score is 95')
}
else if (marks>=80) {
    console.log('my total score is 85');
}
else if (marks >= 60) {
    console.log('Tom’s total score is 66')
}
else if (marks >= 50) {
    console.log('Peter’s total score is 56')
}
else if (marks >= 40) {
    console.log('John’s total score is 40.')
}
else {
    console.log('ami fail')
}

/*             ***practice-3***

You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else.
*/

// var num1 = 13;
// var num2 = 79;
// var num3 = 45;

// if (num1 > num2) {
//     if (num1 > num3) {
//         console.log(num1);
//     }
//     else {
//         console.log(num3)
//     }
// }
// else if (num2 > num3) {
//     console.log(num2)
// }
// else {
//     console.log(num3)
// }





// find the smallest number

var number1 = 7;
var number2 = 13;
var number3 = 3;

if (number1 < number2) {
    if (number1 < number3) {
        console.log('smallest number',number1)
    }
    else {
        console.log(number3)
    }
}
else if (number2 < number3) {
    console.log(number2);
}
else {
    console.log(number3)
}