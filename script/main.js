// call form
let form = document.getElementsByTagName("form")[0];
// call inputs
let inputNum = document.querySelectorAll("input")[0];
let inputText = document.querySelectorAll("input")[1];
let select = document.getElementsByTagName("select")[0];
let inputCreate = document.querySelectorAll("input")[2];
// call div result
let divResult = document.getElementsByClassName("results")[0];

form.onsubmit = function() {return false} // to not send the form

// create in click
inputCreate.onclick = function() {
    divResult.innerHTML = ""; // Make previous elments dissapear
    // Create Divs
    if (select[0].value === select.value) {
        divResult.setAttribute("class", "div")
        for (let i = 0; i < inputNum.value; i++) {
            let newElements = document.createElement("div");
            newElements.setAttribute("class", "box");
            newElements.setAttribute("title", "Element");
            newElements.setAttribute("id", `id-${i + 1}`);
            newElements.textContent = `${inputText.value}`;
            divResult.appendChild(newElements)
        }
    }
    // Create Sections
    else if (select[1].value === select.value) {
        divResult.setAttribute("class", "section")
        for (let i = 0; i < inputNum.value; i++) {
            let newElements = document.createElement("section");
            newElements.setAttribute("class", "box");
            newElements.setAttribute("title", "Element");
            newElements.setAttribute("id", `id-${i + 1}`);
            newElements.textContent = `${inputText.value}`;
            divResult.appendChild(newElements)
        }
    }   
}
