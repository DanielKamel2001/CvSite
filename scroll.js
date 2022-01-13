// Array containing  the infromation of each project
const projects = [
    {
        id:0,
        title: "CV Site",
        img:"./images/lonePine.png",
        projectDesc: "This site which I created and hosted to show off some of the things that I have made.",
        link:""
    },
    {
        id:1,
        title: "Reflex Game",
        img:"./images/reflexSite.png",
        projectDesc: "A Simple Reflex Game where the player presses a keyboard button witin a certain amount of time to gain points;If the player takes to long or presses the wrong key they lose points. ",
        link:"http://www.danielgohara.com",
    },

]

// the elements on the site to change with each project
const projectTitle = document.getElementById("projectTitle");
const projectDesc = document.getElementById("projectDesc");
const image = document.getElementById("sample-img");
const link = document.getElementById("projectLink");

const buttonPrev = document.getElementById("prevButton");
const buttonNext = document.getElementById("nextButton");

// tracks the current displayed project
let currentProject = 0;

// funtion to swap which project is currently being displayed
function swapTo(id){
    const item = projects[id];
    projectTitle.textContent = item.title;
    projectDesc.textContent = item.projectDesc;
    image.src = item.img;
    link.href = item.link;
}

//displays the first project on load
window.addEventListener("DOMContentLoaded",function () {
    swapTo(currentProject);
});

// set the buttons to swap to next/previous project on click
buttonNext.addEventListener('click',function(){
    currentProject++;
    if (currentProject>=projects.length){currentProject = 0;}
    swapTo(currentProject);
});

buttonPrev.addEventListener('click',function(){
    currentProject--;
    if (currentProject<0){currentProject = 0;}
    swapTo(currentProject);
});