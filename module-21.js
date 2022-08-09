// smallest number declare in array 
function smallestNumber(numbers) {
    let smallNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if (numbers.length < smallNumber) {
            smallNumber = number;
        }
    }
    return smallNumber;
}


const arr = [99, 31, 12, 33, 17, 45, 67, 57,9]
const finalNumber = smallestNumber(arr);
console.log(finalNumber);

   
