// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

// for (let i = 0; i <= 100; i++) {
// 	if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FIzz Buzz - " + i);
//   } else if (i % 3 == 0) {
//     console.log("Fizz - " + i);
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i)
//   }
// }

// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.

let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// console.log(str);

let my_str = "";

for (let i = 0; i <= str.length; i++) {
  while (j = 0; j <= my_str[i] != " ") {
    my_str += str[i];
  }
  console.log(my_str);
}


// for (let char = 0; char < str.length; char++) {
//   // console.log(str[char]);
// }
 index and for loop and line breaks are