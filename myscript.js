const container = document.querySelector(".container")

function makeRows(rows,columns){
    for (i = 0; i< (rows*columns);i++){
        let cell = document.createElement("div")
        container.appendChild(cell).className = "grid-item"
    }
}
makeRows(16,16)

// background color changes to black on hovering
const gridItems = document.querySelectorAll(".grid-item")
const staticButton = document.querySelector(".color")

function staticColor(){
    function color(e){
        e.target.style.backgroundColor = "black"
    }
    gridItems.forEach(item=> {
        item.addEventListener("mouseover",color,false)
    });
}

staticButton.addEventListener("click",staticColor,false)

// background color changes to white when clicked clear (empty playground)
const clearButton = document.querySelector(".clear")

function clear(){
    gridItems.forEach(item=> {
        item.setAttribute("style","background-color:white")
    });

}
clearButton.addEventListener("click",clear,false)

//background color changes to random rainbow colors when clicked useRainbow 

const rainbowButton = document.querySelector(".rainbow")
let colors = {0:"red",1:"blue",2:"green",3:"yellow",4:"black",5:"pink",6:"violet"}

function ClickRainbow(){
    function Rainbow(e){
        e.target.style.backgroundColor = colors[Math.floor(Math.random()*6)]
    }
    gridItems.forEach(item=> {
        item.addEventListener("mouseover",Rainbow,false)
    });
}

rainbowButton.addEventListener("click",ClickRainbow,false)