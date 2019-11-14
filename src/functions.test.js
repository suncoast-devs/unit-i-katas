/*

   Welcome to final kata challenges. This are a few hand selected problems to test your knowledge of JavaScript. 
  
   As you write and save your code, you can look in your terminal where you
   ran `yarn start` to see if your code is working. The tests continuously check
   your work each time you save. If a test is failing either you have not yet
   defined that function or you have not defined it correctly.


      Once you finish a function and have it correct, the test will tell you if/how
   the next function is working.

   Complete all 5 to be done with this assignment. 
*/

/*
 * 1) Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

// ...

/*
 * 2) Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */

/**
 *
 * 3) Define a function called check that takes 2 arguments, an array and a value. 
 *    Check whether the provided array contains the value. Array can contain numbers or strings.
      Your function should return true if the array contains the value, false if not.
 */

/**
 * 4) defined a function called maps. This takes 1 argument, an array or numbers. 
 * Your function should return a new array with each value doubled.
    For example:

    [1, 2, 3] --> [2, 4, 6]

   Try to use the map method - it comes in very handy quite a lot so is a good one to know.
 *    
 */

/**
 * 5) Write a function called noSpace. This function takes one argument, a string. 
 *    This function should return the string with no spaces. 
 *    For example: 
 *    noSpace("This is a my cool thing") should return "Thisisamycoolthing"

 
/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

const ensureDefined = (t, method) => {
  if (eval(`typeof ${method}`) !== 'function') {
    t.fail(
      `\n\n\n\n\n⚡️⚡️⚡️⚡️⚡️ The next step is to define the function ${method} ⚡️⚡️⚡️⚡️⚡️\n\n\n`
    )
  }
}

test('Function Check', t => ensureDefined(t, 'yelling'))
test('yelling()', t => {
  t.deepEqual(yelling(['now', 'is', 'the', 'time']), [
    'NOW',
    'IS',
    'THE',
    'TIME'
  ])
})

test('Function Check', t => ensureDefined(t, 'doubleTrouble'))
test('doubleTrouble()', t => {
  t.deepEqual(doubleTrouble([2, 3, 9, 0, -5]), [4, 6, 18, 0, -10])
})

test('Function Check', t => ensureDefined(t, 'stringyIndexes'))
test('stringyIndexes', t => {
  t.deepEqual(stringyIndexes(['how', 'now', 'brown', 'cow']), [
    'how is at index 0',
    'now is at index 1',
    'brown is at index 2',
    'cow is at index 3'
  ])
})

test('Function Check', t => ensureDefined(t, 'onlyTheEvenSurvive'))
test('onlyTheEvenSurvive', t => {
  t.deepEqual(onlyTheEvenSurvive([42, 50, 100, 5, -43, 17, 44]), [
    42,
    50,
    100,
    44
  ])
})

test('Function Check', t => ensureDefined(t, 'onlyTheEvenIndexedSurvive'))
test('onlyTheEvenIndexedSurvive', t => {
  t.deepEqual(
    onlyTheEvenIndexedSurvive([
      31,
      67,
      64,
      96,
      14,
      24,
      43,
      51,
      48,
      80,
      58,
      43,
      64,
      84,
      98,
      99,
      69,
      93,
      5,
      32,
      29,
      4,
      28,
      18,
      86,
      22,
      20,
      74,
      35,
      27,
      85,
      79,
      65,
      32,
      56,
      94,
      93,
      20,
      29,
      22,
      72
    ]),
    [
      31,
      64,
      14,
      43,
      48,
      58,
      64,
      98,
      69,
      5,
      29,
      28,
      86,
      20,
      35,
      85,
      65,
      56,
      93,
      29,
      72
    ]
  )
})

test('Function Check', t => ensureDefined(t, 'bestMoviesOfTheYear'))
test('bestMoviesOfTheYear', t => {
  const movies = [
    { name: 'The Grand Budapest Hotel', year: 2014, score: 91 },
    { name: 'Birdman', year: 2014, score: 91 },
    { name: 'Transformers: Age of Extinction', year: 2014, score: 18 },
    { name: 'Rage', year: 2014, score: 14 },
    { name: 'Get Out', year: 2017, score: 99 },
    { name: 'Justice League', year: 2017, score: 40 },
    { name: 'Ghost in the Shell', year: 2017, score: 46 },
    { name: 'The Big Sick', year: 2017, score: 98 }
  ]

  t.deepEqual(bestMoviesOfTheYear(movies, 2014), [
    'The Grand Budapest Hotel',
    'Birdman'
  ])

  t.deepEqual(bestMoviesOfTheYear(movies, 2017), ['Get Out', 'The Big Sick'])

  t.deepEqual(bestMoviesOfTheYear(movies, 2001), [])
})

test('Function Check', t => ensureDefined(t, 'everyoneIsOdd'))
test('everyoneIsOdd', t => {
  t.is(everyoneIsOdd([9, 15, 27, 101, 33]), true)
  t.is(everyoneIsOdd([9, 23, 3, 4, 77]), false)
})

test('Function Check', t => ensureDefined(t, 'findTheNeedle'))
test('findTheNeedle', t => {
  t.is(
    findTheNeedle(['one', 'time', 'there was a needle at', 'the market']),
    'there was a needle at'
  )
})

test('Function Check', t => ensureDefined(t, 'findTheNeedleIndex'))
test('findTheNeedleIndex', t => {
  t.is(
    findTheNeedleIndex(['one', 'time', 'there was a needle at', 'the market']),
    2
  )
})

test('Function Check', t => ensureDefined(t, 'someoneToLove'))
test('someoneToLove()', t => {
  t.is(someoneToLove(['how', 'now', 'brown', 'cow']), false)
  t.is(someoneToLove(['how', 'now', 'blue', 'cow']), true)
})

test('Function Check', t => ensureDefined(t, 'mapYourself'))
test('mapYourself()', t => {
  const originalMap = Array.prototype.map

  Array.prototype.map = () => []

  t.deepEqual(mapYourself([1, 2, 3]), [2, 4, 6])
  t.deepEqual(mapYourself([9, 0, 1]), [18, 0, 2])

  Array.prototype.map = originalMap
})

test('Function Check', t => ensureDefined(t, 'filterYourself'))
test('filterYourself()', t => {
  const original = Array.prototype.filter

  Array.prototype.filter = () => []

  t.deepEqual(filterYourself([8, 1, 2, 3]), [8, 2])

  Array.prototype.filter = original
})

test('Function Check', t => ensureDefined(t, 'everyYourself'))
test('everyYourself()', t => {
  const original = Array.prototype.every

  Array.prototype.every = () => undefined

  t.deepEqual(everyYourself([8, 1, 2, 3]), false)
  t.deepEqual(everyYourself([8, 10, 22, 38]), true)

  Array.prototype.every = original
})

/* eslint-enable */
