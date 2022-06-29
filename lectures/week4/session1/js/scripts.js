var tunes = "https://dojo.navyladyveteran.com/characters/?format=json"
var squish = "https://dojo.navyladyveteran.com/squishies/"
console.log("*******", tunes)

async function getTunes() {
    var response = await fetch(`${squish}`)
    console.log("########", response)
    var data = await response.json()
    console.log("@@@@@@@",data)
    console.log("index 0:", data[0])
    console.log("tweety:", data[4].birthDay)
    console.log("bugs bday and spouse:", data[0].birthDay, data[0].spouse)
    var result = document.getElementById('witchHazel')
    result.innerHTML = data[13].name
    var tazz = document.getElementById('taz')
    tazz.innerHTML = '<img src="'+data[5].img+'" alt="'+data[5].name+'"/>'
    // for (var i=0; i< data.length; i++) {
    //     var node = document.createElement('div')
    //     var h1 = document.createElement('h1')
    //     var name = document.createTextNode(data[i].name)
    //     h1.appendChild(name)
    //     var img = document.createElement('img')
    //     img.src = `${data[i].img}`
    //     img.alt = `${data[i].name}`
    //     node.appendChild(img)
    //     node.appendChild(h1)
    //     document.getElementById('loop').appendChild(node)
    // }
}
getTunes()

console.log("I am running while the tunes is also")