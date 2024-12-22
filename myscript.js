const container = document.querySelector(".container")

function makeRows(rows,columns){
    for (i = 0; i< (rows*columns);i++){
        let cell = document.createElement("div")
        container.appendChild(cell).className = "grid-item"
    }
}


makeRows(16,16)

const gridItems = document.querySelectorAll(".grid-item")
function color(e){
    e.target.style.backgroundColor = "black"
}

gridItems.forEach(item=> {
    item.addEventListener("mouseover",color,false)
});