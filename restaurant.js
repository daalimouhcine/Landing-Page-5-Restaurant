const headerButton = document.querySelector(".h-c");
const part3t = document.querySelector(".tc");
const partb = document.querySelector(".bc");


//------ Functions 

function startB(item) {
    item.classList.add("on");
}
function endB(item) {
    item.classList.remove("on");
}

function Sbg(item) {
    headerButton.classList.add("on-h");
}
function Ebg(item) {
    headerButton.classList.remove("on-h");
}

function Sbt(item) {
    part3t.classList.add("tc-on");
}
function Ebt(item) {
    part3t.classList.remove("tc-on");
}
function Sbb(item) {
    partb.classList.add("bc-on");
}
function Ebb(item) {
    partb.classList.remove("bc-on");
}