const projects = [
    {
        id:0,
        title: "CV Site",
        img:"./images/lonePine.png",
        projectDesc: "This site which I created and hosted to show off some of the things that I have made.",
        link:"_self"
    },
    {
        id:1,
        title: "Reflex Game",
        img:"./images/reflexSite.png",
        projectDesc: "A Simple Reflex Game where the player presses a keyboard button witin a certain amount of time to gain points;If the player takes to long or presses the wrong key they lose points. ",
        link:"danielgohara.com",
    },

]


const projectTitle = document.getElementById("projectTitle");
const projectDesc = document.getElementById("projectDesc");
const image = document.getElementById("sample-img");
const link = document.getElementById("projectLink");

const buttonPrev = document.querySelector("prev");
const buttonNext = document.querySelector("next");

console.log(projectTitle); 
console.log(projectDesc);  
let currentProject = 0;

window.addEventListener("DOMContentLoaded",function () {
    const item = projects[currentProject];
    projectTitle.textContent = item.title;
    projectDesc.textContent = item.projectDesc;
    image.src = item.img;
    link.href = item.link;
});
function swap(){

}