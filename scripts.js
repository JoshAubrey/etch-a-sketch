let rows = 32
let columns = 32
const container = document.getElementById("container")

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

            div.style.borderStyle = 'solid'
            div.style.borderWidth = '1px'
            div.style.borderColor = 'black'
            
            container.appendChild(div)
            
            //console.log(row,column)
        }
    }
    
    let gridSquares = document.querySelectorAll('#container div')
    gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', () => applyColor(gridSquare)))
    //gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseout', () => removeColor(gridSquare)))

}

function applyColor (gridSquare) {
    gridSquare.style.backgroundColor = 'black'
}

// function removeColor (gridSquare) {
//     gridSquare.style.backgroundColor = ''
// }

function newGrid () {
    container.innerHTML = ''
    let input = parseInt(prompt("How many squares per side should the new grid be?", "32"))
    while (Number.isNaN(input)) {
        console.log(typeof input)
        input = prompt("Please enter a number", "32")
    }
    rows = columns = input
    generateGrid()

}

generateGrid()

let newGridButton = document.querySelector('#newGrid')
newGridButton.addEventListener('click', newGrid)





