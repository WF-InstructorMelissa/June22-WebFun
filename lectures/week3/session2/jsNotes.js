// Basic for loop flow
for(i = 0; i < 5; i++) {
    console.log(i)
}
// Step #1 - check if i is less than 5, move to step #2
// Step #2 - if True Move to Step 4, if False move to step 3
// Step #3 - Stop, the loop is done
// Step #4 - Follow instructions in { } in this case console.log i and move to step #5
// Step #5 - finish loop instructions of i++, and return to step #1 with new value for i

// The output is as follows:
// 0
// 1
// 2
// 3
// 4

// For loop with conditionals flow
var arr = ["Coding", "Web Fundamentals", "Dojo", "Coding", "Rocks", "Dojo", "coding", "dojo", "JS can be fun"]
for(i = 0; i < arr.length; i++) {
    if (arr[i] == "Coding") {
        arr[i] = "Coding Dojo Rocks!"
    } else if (arr[i] == "Dojo") {
        arr[i] = "Welcome to Coding Dojo!"
    } else {
        arr[i] = "What's Up doc?"
    }
}
console.log(arr)

// We have an array with a length of 9
// Our for loop states that i will start at the 1st index, stop at the last index, and increase i by 1 each time we go through the loop
// Step #1 Check the value of i move to step #2
// Step #2 is i less than the length of the array?  if Yes move to step #4 if no move to Step #3
// Step #3 console.log the arr our for loop is now over
// Step #4 enter 1st conditional (if) is i equal to the string "Coding"?  if yes move to step #5, if no move to step #7
// Step #5 follow instructions for the conditional statement you answered yes to and change the value of i and move to step #6
// Step #6 add 1 to the index and go back to step #2
// Step #7 The last conditional was false we now enter the next conditional (else if) is i equal to the string "Dojo"?  if yes proceed to step #5 if no move to step #8
// Step #8 The last conditional was false we now enter the last conditional (else) we don't care at this point what i is equal to as if failed all other test just proceed to step #5

// The output is as follows: 
// [
//   'Coding Dojo Rocks!',
//   "What's Up doc?",
//   'Welcome to Coding Dojo!',
//   'Coding Dojo Rocks!',
//   "What's Up doc?",
//   'Welcome to Coding Dojo!',
//   "What's Up doc?",
//   "What's Up doc?",
//   "What's Up doc?"
// ]
