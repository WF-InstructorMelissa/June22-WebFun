var tunes = "https://dojo.navyladyveteran.com/characters/?format=json"
var squish = "https://dojo.navyladyveteran.com/squishies/"
console.log("*******", tunes)

async function getTunes() {
    var response = await fetch(`${squish}`)
    var data = await response.json()
    let htmlResponse = ''
    for (var i=0; i< data.length; i++) {
        // var node = document.createElement('div')
        // var h1 = document.createElement('h1')
        // var name = document.createTextNode(data[i].name)
        // h1.appendChild(name)
        // var img = document.createElement('img')
        // img.src = `${data[i].img}`
        // img.alt = `${data[i].name}`
        // node.appendChild(img)
        // node.appendChild(h1)
        // document.getElementById('loop').appendChild(node)
        // var loop = document.getElementById('loop')
        // loop.innerHTML = '<img src="'+data[i].img+'" alt="'+data[i].name+'"/>'
        htmlResponse += `
            <div class="column">
                <img src="${data[i].img}" alt="${data[i].name}" />
                <h2>${data[i].name}</h2>
            </div>
        `
    }
    document.getElementById('loop').innerHTML = htmlResponse
}
getTunes()

var nasa = keys.NASAKEY
// Line  = creating a var calling nasa setting it equal to keys.NASAKEY
// keys = the file name
// NASAKEY = the function name

// var nasa = NASAKEY
$(document).ready(function() {
    nasaurl = `https://api.nasa.gov/planetary/apod?api_key=${nasa}`
    $.get(nasaurl, function(res) {
        console.log(res)
        var html_str = ""
        html_str +="<img id='img' src='" + res.url + "' alt='Nasa Photo'> <h3>" + res.title + "</h3>"
        $(".photo").html(html_str)
    }, 'json')
})

console.log("I am running while the tunes is also")