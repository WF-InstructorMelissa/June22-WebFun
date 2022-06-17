// for(i=0; i<10; i++) { //  i=0 means i starts at 0 i < 10 means stop when i is no longer less than 10 i++ means increase the number by 1 each time the loop finishes
//     console.log(i) // print to the terminal/console the value of i while loop is running
// }


for (i=10; i>0; i--) {
    console.log(i)
}

console.log("Making sure we linked up our JS correctly")
console.log(1)

function firstAlert() {
    alert("Hey what's cookin?")
    console.log("alert function ran")
}
// Change the color of the h1 tag
// 1. Create function h1Color
// 2. What is going to change = element name
// 3. How its going to change = text color 
// 4. How will it be activated
// 5. Tell it to change back = using conditionals if color = white change to red otherwise change to white

function h1Color(element) {
    console.log("element clicked")
    if (element.style.color = '#ffffff') {
        element.style.color = '#ff0000'
        // console.log("color changed to red")
    }
    // else {
    //     element.style.color = '#ffffff'
    //     // console.log("color changed back to white")
    // }
}
function hideCat(element) {
    console.log("You clicked the profile pic")
    // element.style.zIndex = '3'
    element.style.display = 'none'
}