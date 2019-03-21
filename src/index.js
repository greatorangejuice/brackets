// module.exports =
function check(str, bracketsConfig) {
  if (!(str.length % 2 == 0)) {
    return false
  }
  // concat array for find open and close brackets 
  let newArray = bracketsConfig.reduce(
    (result, element) => result.concat(element), []
  )
  console.log(`after concat: `, newArray)

  let openSymbols = [];
  let closeSymbols = [];
  newArray.forEach((item, index) => {
    if (index % 2 == 0) {
      openSymbols.push(item)
    } else {
      closeSymbols.push(item)
    }
  });
  console.log("Открывающие скобки " + openSymbols)
  console.log("Закрывающие скобки " + closeSymbols)

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    // Check our inner symbol. Should be open
    if (openSymbols.includes(str[i])) {
      stack.push(str[i]);
    } else {
      stack.pop();
    }
  }
  if (stack.length == 0) {
    return true
  } else {
    return false
  }

}

console.log(check('[(])', [
  ['(', ')'],
  ['[', ']']
]));



// var arrays = [
//   ['(', ')'],
//   ['[', ']']
// ];

// function convertToSimpleArray(array) {
//   var res = [];
//   for (var i = 0; i < array.length; i++)
//     if (!Array.isArray(array[i]))
//       res.push(array[i]);
//     else
//       res = res.concat(convertToSimpleArray(array[i]));
//   return res;
// }
// console.log(convertToSimpleArray(arrays));