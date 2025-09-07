function addNums(num1, num2) {
    return num1 + num2
}

function subtractNums(num1, num2) {
    return num1 - num2
}

function isNumber(num) {
    return !isNaN(parseInt(num))
}

function multiplyNums(num1, num2) {
    return num1 * num2
}

// Common JS Export Method ------------
// module.exports = { addNums, subtractNums, isNumber, multiplyNums };
// console.log(module); // The module object with the exports property where the functions are added

// ESM Export Method -------------
export { addNums, subtractNums, isNumber, multiplyNums }

// Alternatively, for ESM
// export function addNums(num1, num2) {
//     return num1 + num2
// }
