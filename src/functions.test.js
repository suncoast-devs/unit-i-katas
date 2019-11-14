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
 * 3) Define a function called doesContain that takes 2 arguments, an array and a value. 
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
test('sum()', t => {
  ensureDefined(t, 'sum')

  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', t => {
  ensureDefined(t, 'sumOfArray')

  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('doesContain()', t => {
  ensureDefined(t, 'doesContain')

  t.is(doesContain([66, 101], 66), true)
  t.is(doesContain([80, 117, 115, 104, 45, 85, 112, 115], 45), true)
  t.is(doesContain([80, 117, 115, 104, 45, 85, 112, 115], '45'), false)
  t.is(doesContain(['t', 'e', 's', 't'], 'e'), true)
  t.is(doesContain(['what', 'a', 'great', 'kata'], 'kat'), false)
  t.is(
    doesContain(['this', 'should', 3, 7, 3, 'still', 'work'], 'should'),
    true
  )
})

test('maps()', t => {
  ensureDefined(t, 'maps')

  t.deepEqual(maps([1, 2, 3]), [2, 4, 6])
  t.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8])
  t.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4])
})

test('noSpace()', t => {
  ensureDefined(t, 'noSpace')
  t.is(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB')
  t.is(
    noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'),
    '88Bifk8hB8BB8BBBB888chl8BhBfd'
  )
  t.is(noSpace('8aaaaa dddd r     '), '8aaaaaddddr')
})
/* eslint-enable */
