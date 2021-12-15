/*
* This program calculates the magic squares.
*
* @author  Felipe Garcia Affonso
* @version 1.0
* @since   2021-12-15
*/

"use strict"

const ps = require("prompt-sync")
let prompt = ps()

const THREE: number = 3
const FOUR: number = 4
const FIVE: number = 5
const SIX: number = 6
const SEVEN: number = 7
const EIGHT: number = 8
const NINE: number = 8
const MAGICNUM: number = 15

function genSquare(square: number[], currentSquare: number[], index: number) {
  // generate the magic squares.
  for (var counter: number = 0; counter < square.length; counter++) {
    if (currentSquare[counter] == 0) {
      // incriment to the next step
      square[index] = counter + 1;
      currentSquare[counter] = 1;

      // only fill in spots that have not yet been filled in
      if (index < square.length - 1) {
        genSquare(square, currentSquare, index + 1);
      } else if (isMagic(square)) {
        // if all done and it is magic, then print it out
        printMagicSquare(square);
      }
        currentSquare[counter] = 0;
    }
  }
}

function isMagic(preSquare: number[]) {
  // returns true or false for whether or not array is a magic square
  let row1: number = preSquare[0] + preSquare[1] + preSquare[2];
  let row2 = preSquare[THREE] + preSquare[FOUR] + preSquare[FIVE];
  let row3 = preSquare[SIX] + preSquare[SEVEN] + preSquare[EIGHT];
  let col1 = preSquare[0] + preSquare[THREE] + preSquare[SIX];
  let col2 = preSquare[1] + preSquare[FOUR] + preSquare[SEVEN];
  let col3 = preSquare[2] + preSquare[FIVE] + preSquare[EIGHT];
  let diag1 = preSquare[0] + preSquare[FOUR] + preSquare[EIGHT];
  let diag2 = preSquare[2] + preSquare[FOUR] + preSquare[SIX];

  return row1 === MAGICNUM && row2 === MAGICNUM && row3 === MAGICNUM
         && col1 === MAGICNUM && col2 === MAGICNUM
         && col3 === MAGICNUM && diag1 === MAGICNUM && diag2 === MAGICNUM;
}

function printMagicSquare(outputSquare: number[]) {
        // prints inputted array in a magic square format
        console.log("\n*****");
 for (var count: number = 0; count < outputSquare.length; count++) {
   if (count == THREE || count == SIX) {
     console.log();
     console.log(outputSquare[count] + " ");
   } else {
     console.log(outputSquare[count] + " ");
   }
 }
 console.log("\n*****");
}

var magicSquare: number[] = [1, 2, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE]
var extraArray: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log("\n");
console.log("All Possible Magic Squares (3x3):\n");
genSquare(magicSquare, extraArray, 0);

console.log("Done.");

