


// loop through a given array and print every other index
// var arr = [1,2,3,4,5,6,7,8,9]
// Step #1 start the for loop with i = 0
// Step #2 tell it where to end with arr.length
// Step #3 tell it to increment by 2 with i+2
// Step #4 console.log if the conditions are met

// for (var i=0; i < arr.length; i+=2) {
//     console.log("the value of the current index is: ", i)
// }

function loop(a) {
    for (var i=0; i < a.length; i+=2) {
        console.log("function loop value of I: ", i)
    }
}
// loop(arr)

// if the index is positive console.log the value of i if it is negative console.log "negative number"
var numbers = [-1, 3, 6,-6, 9, -24, 8, 6, -100, 5000]
// Step #1 start the for loop with i = 0
// Step #2 tell it where to end with array.length
// Step #3 how to increment with i++
// Step #4 instruction start with 1st if statement - if i >= 0 console.log the value of
// Step #5 continue conditional statement with - else console.log "negative number"

function positive(b) {
    for (var i=0; i < b.length; i++) {
        if (b[i] > 0) {
            console.log("the value is: ", b[i])
        } else {
            console.log("negative number")
        }
    }
}
positive(numbers)
// positive([-1, 3, 6,-6, 9, -24, 8, 6, -100, 5000])


function positive02(b) {
    for (var i=0; i < b.length; i++) {
        if (i > 0) {
            console.log("the value is: ", i)
        } else {
            console.log("negative number")
        }
    }
}
// In the above function we will get the index numbers only as that is what i is = to so like in the function line 30 b[i] says to check the value of the index that i is