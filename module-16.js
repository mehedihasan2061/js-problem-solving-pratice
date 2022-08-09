/*
                            ****practice-1****
                        ---------------------
*Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
help Harry calculate how much money the shopkeeper will return.

*

*/

var harryMom = 1000;
var oranges = 400;
var apples = 300;
var totalFruits = oranges + apples;
var givenShopkepper = harryMom - totalFruits;
console.log(givenShopkepper);


/*
                        *****practice-2*****


*Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
Bangla of a student.

*subject marks:-(75.25, 65, 80, 35.45, 99.50)
                        
*/

var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;
var totalSub = mathematics + biology + chemistry + physics + bangla;
var averageMarks = totalSub / 5;
var perMarks = averageMarks.toFixed(2);
console.log(perMarks);


/*
                          ****practice-3****
                         
*John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
combine these two strings and print them in one line. Help John write the program.

*/
var name1 = 'I am going to be'; 
var name2 = 'an awesome web developer'; 
var text = name1 + ' ' + name2;
console.log(text);


/*
 
                               ****practice-4*****
*
*Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
remainder would be if she divided the number by 5. Help Sarah write the program.
*/

var num1 = 119;
var num2 = 5;
var remainder = num1 % num2;
console.log(remainder);