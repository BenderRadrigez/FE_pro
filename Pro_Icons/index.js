// const container = document.querySelector("div");
// const text = document.querySelector(".text");
// const link = document.querySelector("#info");

// const boxes = document.querySelectorAll("div");

// const body = document.querySelector("body");
// const newDiv = document.createElement("div");
// const p = document.createElement("p");

// newDiv.setAttribute("class", "name");
// p.setAttribute("id", "par")
// p.textContent = "lorem";
// body.appendChild(newDiv);
// newDiv.appendChild(p);

// console.log(p);

const body = document.querySelector("body"); 

function render(){
    const block = document.createElement("div");
    block.setAttribute("class", "main");
    block.setAttribute("style", "background: tomato; width: 20px; height: 15px;");
    body.appendChild(block);
    console.log(block);

}