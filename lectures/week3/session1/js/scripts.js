console.log("JS file connected")

// function addingNumbers(a, b, c) {
//     console.log("adding a and b:", a + b)
//     console.log("print c:", c)
// }
// addingNumbers(4, 6, 'three')


// Multiply a * b
// var a = 20
// var b = 30

// a = 400

function multiplying() {
    var a = document.details.a.value
    var b = document.details.b.value
    var c = a * b
    console.log("results:", c)
}

// multiplying()

// Rule of thumb if when declairing a function with parameters invoking the function must also have parameters

function showData() {
    var name = document.details.name.value
    var location = document.details.location.value
    console.log("You submitted the following in the form to an alert box: ", name, location)
    alert("My name is " + name + ' and my location is ' + location)
    multiplying()
}
// line 25 - creating a function called showData
// line 26 - creating a variable called name and telling it where to find it on the html page document = html details = name of form name = name of input value = what the user typed
// line 28 - printing to the console the text in "" and the values of name and location
// line 29 - creating an alert box on the html page with a phrase that includes the values of name and location