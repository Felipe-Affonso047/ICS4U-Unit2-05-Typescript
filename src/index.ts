/*
* This program calculates the magic squares.
*
* @author  Felipe Garcia Affonso
* @version 1.0
* @since   2021-12-15
*/

'use strict'

const THREE: number = 3
const FOUR: number = 4
const FIVE: number = 5
const SIX: number = 6
const SEVEN: number = 7
const EIGHT: number = 8
const NINE: number = 8
const MAGICNUM: number = 15

function genSquare (square: number[], currentSquare: number[], index: number) {
  // generate the magic squares.
  for (let counter: number = 0; counter < square.length; counter++) {
    if (currentSquare[counter] === 0) {
      // incriment to the next step
      square[index] = counter + 1
      currentSquare[counter] = 1

      // only fill in spots that have not yet been filled in
      if (index < square.length - 1) {
        genSquare(square, currentSquare, index + 1)
      } else if (isMagic(square)) {
        // if all done and it is magic, then print it out
        printMagicSquare(square)
      }
      currentSquare[counter] = 0
    }
  }
}

function isMagic (preSquare: number[]) {
  // returns true or false for whether or not array is a magic square
  const row1: number = preSquare[0] + preSquare[1] + preSquare[2]
  const row2 = preSquare[THREE] + preSquare[FOUR] + preSquare[FIVE]
  const row3 = preSquare[SIX] + preSquare[SEVEN] + preSquare[EIGHT]
  const col1 = preSquare[0] + preSquare[THREE] + preSquare[SIX]
  const col2 = preSquare[1] + preSquare[FOUR] + preSquare[SEVEN]
  const col3 = preSquare[2] + preSquare[FIVE] + preSquare[EIGHT]
  const diag1 = preSquare[0] + preSquare[FOUR] + preSquare[EIGHT]
  const diag2 = preSquare[2] + preSquare[FOUR] + preSquare[SIX]

  return (((row1 === MAGICNUM) && (row2 === MAGICNUM)) && ((row3 === MAGICNUM) && (col1 === MAGICNUM))) && (((col2 === MAGICNUM) && (col3 === MAGICNUM)) && ((diag1 === MAGICNUM) && (diag2 === MAGICNUM)))
}

function printMagicSquare (outputSquare: number[]) {
  // prints inputted array in a magic square format
  const firstRow: string = outputSquare[0].toString() + outputSquare[1].toString() + outputSquare[2].toString()
  const secondRow: string = outputSquare[3].toString() + outputSquare[4].toString() + outputSquare[5].toString()
  const thirdRow: string = outputSquare[6].toString() + outputSquare[7].toString() + outputSquare[8].toString()
  console.log('\n*****')
  console.log(firstRow)
  console.log(secondRow)
  console.log(thirdRow)
  console.log('*****')
}

const magicSquare: number[] = [1, 2, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE]
const extraArray: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log('\n')
console.log('All Possible Magic Squares (3x3):\n')
genSquare(magicSquare, extraArray, 0)

console.log('Done.')
