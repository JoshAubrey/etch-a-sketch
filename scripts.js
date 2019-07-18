const container = document.getElementById("container")
let rows = 32
let columns = 32
let rgbColors = true

function generateGrid () {
    container.style.display = 'grid'
    container.style.gridTemplateRows = rows
    container.style.gridTemplateColumns = columns
    container.style.width = '720px'
    container.style.height = '720px'
    container.style.borderStyle = 'solid'
    container.style.borderWidth = '1px'
    container.style.borderColor = 'black'

    for (let row = 1; row <= rows; row++) {
        for (let column = 1; column <= columns; column++) {
            let div = document.createElement("div")
            div.id = `${row},${column}`
            
            div.style.gridRow = row
            div.style.gridColumn = column
            
            container.appendChild(div)
            
        }
    }
    
    let gridSquares = document.querySelectorAll('#container div')
    gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', () => applyColor(gridSquare)))

}

function applyColor (gridSquare) {
    if (rgbColors == true) {
        if (gridSquare.style.backgroundColor == '') {
            const r = Math.floor(Math.random() * 256)
            const g = Math.floor(Math.random() * 256)
            const b = Math.floor(Math.random() * 256)
            gridSquare.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
        }
        else {
            gridSquare.style.backgroundColor = shadeRGBColor(gridSquare.style.backgroundColor, '-.10')
        }
    }
    else {
        gridSquare.style.backgroundColor = 'black'
    }
}

function shadeRGBColor(color, percent) {
    var f=color.split(","),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=parseInt(f[0].slice(4)),G=parseInt(f[1]),B=parseInt(f[2]);
    return "rgb("+(Math.round((t-R)*p)+R)+","+(Math.round((t-G)*p)+G)+","+(Math.round((t-B)*p)+B)+")";
}

function newGrid () {

    let input = prompt("How many squares per side should the new grid be?", "32")
    if (input == null) return

    while (Number.isNaN(parseInt(input))) {
        input = prompt("Please enter a number", "32")
        if (input == null) return
    }

    rows = columns = input
    container.innerHTML = ''
    generateGrid()

}

generateGrid()

let newGridButton = document.querySelector('#newGrid')
newGridButton.addEventListener('click', newGrid)

let rgbCheckbox = document.querySelector('#rgbCheckbox')
rgbCheckbox.addEventListener('click', (e) => {
    if (e.target.checked){
        rgbColors = true
    }
    else {
        rgbColors = false
    }
})





