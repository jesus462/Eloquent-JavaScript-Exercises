// LOOPING A TRIANGLE
let triangle = "#";

for(let i = 0; i < 7; i++) {
    console.log(triangle);
    triangle += "#";
}

console.log('<------>\n');

// FIZZBUZZ
for(let i = 1; i < 101; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

console.log('<------>\n');

// CHESSBOARD
const size = 8;
const emptySpace = " ";
const occupiedSpace = "#";
let grid = "";

for(let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
        if (i % 2 !== 0) {
            if (j % 2 == 0) grid += occupiedSpace;
            else  grid += emptySpace;
        } else {
            if (j % 2 !== 0) grid += occupiedSpace;
            else  grid += emptySpace;  
        }
    }
    grid += "\n"   
}

console.log(grid);