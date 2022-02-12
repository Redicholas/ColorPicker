const colorPicker = document.getElementById("color-picker")
const colorScheme = document.getElementById("color-scheme")
const submitBtn = document.getElementById("submit-btn")
const form = document.getElementById("form")

let container = document.getElementById("container")
let color = document.getElementById("color")
let col = "000"
let scheme = colorScheme.value

function fetcher() {  
     fetch(`https://www.thecolorapi.com/scheme?hex=${col}&mode=${scheme}`)
        .then(res => res.json())
        .then(data => {
          let col1Hex = data.colors[0].hex.clean
          let col2Hex = data.colors[1].hex.clean
          let col3Hex = data.colors[2].hex.clean
          let col4Hex = data.colors[3].hex.clean
          let col5Hex = data.colors[4].hex.clean
          
          let col1Img = data.colors[0].image.bare
          let col2Img = data.colors[1].image.bare
          let col3Img = data.colors[2].image.bare
          let col4Img = data.colors[3].image.bare
          let col5Img = data.colors[4].image.bare
          
          container.innerHTML = 
           `
              <div id="color"><img src="${col1Img}" /><h2>#${col1Hex}</h2></div>
              <div id="color"><img src="${col2Img}" /><h2>#${col2Hex}</h2></div>
              <div id="color"><img src="${col3Img}" /><h2>#${col3Hex}</h2></div>
              <div id="color"><img src="${col4Img}" /><h2>#${col4Hex}</h2></div>
              <div id="color"><img src="${col5Img}" /><h2>#${col5Hex}</h2></div>
           `
     })
 }

fetcher()

submitBtn.addEventListener("click", function(event) {
    col = colorPicker.value.substring(1)
    scheme = colorScheme.value
    fetcher()
    event.preventDefault()
 })
