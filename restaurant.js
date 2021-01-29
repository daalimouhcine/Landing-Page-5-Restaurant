const headerButton = document.querySelector(".h-c");
const part3t = document.querySelector(".tc");
const partb = document.querySelector(".bc");
const search = document.querySelector(".search");
const searchId = document.querySelector("#search-id");
const searchInput = document.querySelector("#search-input");
const mobileBar = document.querySelector(".mobile-menu");
const mobileBg = document.querySelector(".mobile-bg");

//------ Functions 

function startB(item) {
    item.classList.add("on");
}
function endB(item) {
    item.classList.remove("on");
}

function Sbg() {
    headerButton.classList.add("on-h");
}
function Ebg() {
    headerButton.classList.remove("on-h");
}

function Sbt() {
    part3t.classList.add("tc-on");
}
function Ebt() {
    part3t.classList.remove("tc-on");
}
function Sbb() {
    partb.classList.add("bc-on");
}
function Ebb() {
    partb.classList.remove("bc-on");
}


searchId.addEventListener("click",function() {
    if(searchInput.value !== "") {
        alert(`(${searchInput.value}) This is the search word you want`);

    } else if(searchInput.value === "") {
        search.classList.toggle("search-on")
    }
});

mobileBar.addEventListener("click",function () {
    mobileBg.classList.toggle("mobile-menu-on");
    mobileBar.classList.toggle("mobile-bar-on");
});