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
//             0            1               2       3          4        5       6        7          8
console.log("the length of the array: ", arr.length) 
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


var arr = ["Coding", "Web Fundamentals", 1, "Dojo", "Coding", "Rocks", "Dojo", "coding", "1", "dojo", "JS can be fun"]

console.log("the length of the array: ", arr.length) 
for(var i = 0; i < arr.length; i++) {
    if (arr[i] == "Coding") {
        arr[i] = "Coding Dojo Rocks!"
    } else if (arr[i] == "Dojo") {
        arr[i] = "Welcome to Coding Dojo!"
    } else if (arr[i] === 1 ){
      arr[i] = "they are exactly alike"
    } else if (arr[i] == 1) {
      arr[i] = "printing one"
    }else {
        arr[i] = "What's Up doc?"
    }
}
console.log(arr)

// the length of the array:  11
// [ 'Coding Dojo Rocks!',
//   'What\'s Up doc?',
//   'they are exactly alike',
//   'Welcome to Coding Dojo!',
//   'Coding Dojo Rocks!',
//   'What\'s Up doc?',
//   'Welcome to Coding Dojo!',
//   'What\'s Up doc?',
//   'printing one',
//   'What\'s Up doc?',
//   'What\'s Up doc?' ]







// https://pythontutor.com/render.html#code=var%20arr%20%3D%20%5B%22Coding%22,%20%22Web%20Fundamentals%22,%201,%20%22Dojo%22,%20%22Coding%22,%20%22Rocks%22,%20%22Dojo%22,%20%22coding%22,%20%221%22,%20%22dojo%22,%20%22JS%20can%20be%20fun%22%5D%0A%0Aconsole.log%28%22the%20length%20of%20the%20array%3A%20%22,%20arr.length%29%20%0Afor%28var%20i%20%3D%200%3B%20i%20%3C%20arr.length%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20if%20%28arr%5Bi%5D%20%3D%3D%20%22Coding%22%29%20%7B%0A%20%20%20%20%20%20%20%20arr%5Bi%5D%20%3D%20%22Coding%20Dojo%20Rocks!%22%0A%20%20%20%20%7D%20else%20if%20%28arr%5Bi%5D%20%3D%3D%20%22Dojo%22%29%20%7B%0A%20%20%20%20%20%20%20%20arr%5Bi%5D%20%3D%20%22Welcome%20to%20Coding%20Dojo!%22%0A%20%20%20%20%7D%20else%20if%20%28arr%5Bi%5D%20%3D%3D%3D%201%20%29%7B%0A%20%20%20%20%20%20arr%5Bi%5D%20%3D%20%22they%20are%20exactly%20alike%22%0A%20%20%20%20%7D%20else%20if%20%28arr%5Bi%5D%20%3D%3D%201%29%20%7B%0A%20%20%20%20%20%20arr%5Bi%5D%20%3D%20%22printing%20one%22%0A%20%20%20%20%7Delse%20%7B%0A%20%20%20%20%20%20%20%20arr%5Bi%5D%20%3D%20%22What's%20Up%20doc%3F%22%0A%20%20%20%20%7D%0A%7D%0Aconsole.log%28arr%29&cumulative=false&curInstr=71&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false