const container = document.querySelector("#container");
const containerGrid = document.querySelector("#containerGrid");
const resetbtn = document.querySelector("#resetbtn");
const changesizebtn = document.querySelector("#changesizebtn");

window.addEventListener("load", loadWindowEvt(16,16));
resetbtn.addEventListener("click",resetContainerGrid);
changesizebtn.addEventListener("click",changueContainerGrid);


function loadWindowEvt(){
    let lsizecolumns = arguments[0];
    let lsizerows = arguments[1];
    console.log(lsizecolumns);
    console.log(lsizerows);
    containerGrid.style.gridTemplateColumns = `repeat(${lsizecolumns}, 1fr)`;
    for(let i=0;i<lsizecolumns;i++){
        for(let j=0;j<lsizerows;j++){
            let ldiv = document.createElement("div");
            ldiv.classList.add('containerGridElement');    
            //ldiv.innerText ="X";   
            ldiv.addEventListener("mouseover", changeColor);
            containerGrid.appendChild(ldiv); 
        }
    }
}

function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }

function resetContainerGrid(){
    let lsizecolumns = arguments[0];
    let lsizerows = arguments[1];
    let containers = containerGrid.querySelectorAll(".containerGridElement");
    for(let i=0;i<containers.length;i++){
        containerGrid.removeChild(containers[i]);
    }
    console.log("lsizecolumns:",lsizecolumns); 
    console.log("lsizerows:",lsizerows); 
    if(!!lsizecolumns&&!!lsizerows){
        loadWindowEvt(lsizecolumns,lsizerows);
    }else{
        loadWindowEvt(16,16);
    }
    
}

function changueContainerGrid(){
    let newSize = prompt("Enter new size");
    resetContainerGrid(newSize,newSize);
}