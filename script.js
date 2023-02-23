//const orginDiv = document.createElement('div');
//orginDiv.setAttribute("id", "container");


const container = document.getElementById("container");

function rowsCols(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};

rowsCols(16, 16);



//function hoveOut() {
  //  this.style.backgroundColor = "white";
//}

function hovebutton() {
    this.style.backgroundColor = "blue";
}

function resetColors() {
    container = document.querySelectorAll('.grid-item').forEach(cell => {
    cell.style.backgroundColor = "white";
  })
};

function clearGrid() {
    //container = document.getElementById("container");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
};

const clearGridBtn = document.createElement("button");
clearGridBtn.innerText = 'clear Grid';
document.body.appendChild(clearGridBtn);

clearGridBtn.addEventListener('click', clearGrid);



function createGrid() {
   alert("How many rows and columns for new grid?");
    let rows = prompt("How many rows? Max = 100");
    let cols = prompt("How many columns? Max = 100");
    if (rows > 100) {
        alert("Needs to be under 100");
        return;
    }
    else if ( cols > 100) {
        alert("Needs to be under 100")
        return;
    }
    rowsCols(rows, cols);
};

function testA() {
    alert("testeded");
};


const hoveA = document.querySelectorAll('.grid-item');
const hove = document.querySelectorAll('.grid-item');
hove.forEach(hove => hove.addEventListener('mouseover', hovebutton));
//hoveA.forEach(hoveA => hoveA.addEventListener('mouseout', hoveOut));

const askBtn = document.createElement("button");
askBtn.innerText = 'clear color';
document.body.appendChild(askBtn);

askBtn.addEventListener('click', resetColors);

const gridBtn = document.createElement("button");
gridBtn.innerText = "New Grid";
document.body.appendChild(gridBtn);

gridBtn.addEventListener('click', createGrid);

// the button will remove the old grid
// generate a new grid with max of 100 for answer and max 960px wide


//document.getElementById("container").addEventListener("mouseover", mouseOver);
//document.getElementById("container").addEventListener("mouseout", mouseOut);


//function mouseOver() {
  //  document.getElementById("container").style.backgroundColor = "red";
//}
//function mouseOut() {
  //  document.getElementById("container").style.backgroundColor = "white";
//}

// 1. create a trail as the mouse goes over
// 2. add a button top of screen add a popup asking for
// the # of squares per side for new grid. Once entered
// the existing grid is removied and a new grid generated
//in same total space on pad set limit max 100


