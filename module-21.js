const number = [22, 31, 12, 33, 17, 45, 67, 57]
let smallNumber=""
function smallestNumber(number) {
    for (let i = 0; i < number.length; i++){
        if (number[i] > smallNumber) {
            smallNumber = number;
        }
        
    }
    return smallNumber;
}
const finalNumber = smallestNumber();

   
