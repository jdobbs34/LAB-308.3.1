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


// What fo we know?
// What do we infer
// 4 variables for cells, start with an empty string
// Cells are seperated by commas
// Rows are seperated by new lines.

// Categories
// commas <- new line
// newline escape sequence <- new row
// EVERYTHING else all other chars - populate a cell
// console.log(cell1, cell2, cell3, cell4);

// Variables - we using the empty string so that we can concantenate

//  Starting CSV code

let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Variables - we using the empty string so that we can concatenate
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let commas = 0;

for (let i = 0; i < str.length; i++) {
  let current = str[i];

  if (current == ",") {
    commas++;
  } else if (current == "\n") {
    console.log(cell1, cell2, cell3, cell4);
    cell1 = '';
    cell2 = '';
    cell3 = '';
    cell4 = '';

    commas = 0;
  } else {
    if (commas == 0) {
      cell1 += current;
    } else if (commas == 1) {
      cell2 += current;
    } else if (commas == 3) {
      cell3 += current;
    } else {
      cell4 += current;
    }
  }

  if(i + 1 == str.length){
    console.log(cell1, cell2, cell3, cell4);
  }
}


 // ELSE IF str[i] == '/n' do this
 // ELSE its a char - do this



//  console.log(str[i])
// All strings (and arrays) have access to the length property


// console.log(str);

// let my_str = "";

// for (let i = 0; i <= str.length; i++) {
//   while (j = 0; j <= my_str[i] != " ") {
//     my_str += str[i];
//   }
//   console.log(my_str);
// }


// for (let char = 0; char < str.length; char++) {
//   // console.log(str[char]);
// }
// index and for loop and line breaks are