/*13 namata*/

/**
 *  === Math Table Function ===
 */
//  const numberOfMathTable = 13

//  function mathTable(number) {
//      let result = ''
//      for (let i = 1; i <= 10; i++) {
//          result += number + '*' + i + '=' + number * i + '\n'
 
//      }
//      console.log(result)
//  }
//  const table = mathTable(numberOfMathTable)

// fullname declare

var name1 = 'hablu';
var name2 = 'kanto';
var fullName = name1 + ' ' + name2;
console.log(fullName);



const numberOfMath = 13;
function mathTable(number) {
    let result = '';
    for (let i = 1; i <= 10; i++){
        result += number + '*' + i + '=' + number *  i+'\n'
        
    }
    return result;
}
const final = mathTable(numberOfMath);
console.log(final)