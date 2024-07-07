function printRightTriangle(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}

// ! Reverse

// function printRightTriangle(num) {
//   let str = "";
//   for (let i = num; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//       str += "*";
//     }
//     str += "\n";
//   }
//   return str;
// }

console.log(printRightTriangle(5));