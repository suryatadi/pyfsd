// // console.log("Mohan");

// const header = document.getElementById("header")
// console.log(header)
// header.style.color ="blue"

// const classselector = document.getElementsByClassName("classselector")
// console.log(classselector)
// const arr=Array.from(classselector)

// // classselector[0].style.color ="blue" 
// // classselector[1].style.color ="blue" 
// // classselector[2].style.color ="blue" 
// // classselector[3].style.color ="blue" 
// arr.forEach((ele)=> {
//     ele.style.color="blue"
// })

// const h3=document.getElementsByTagName("h3")
// console.log(h3)
// const arrr=Array.from(h3)
// arrr.forEach((ele) =>{
//     ele.style.color="brown"
//     ele.style.background="red"
// });

// const classselector=document.querySelector(".classselector")
// console.log(classselector)
// classselector.style.color="blue"


// const h3=document.querySelector("h3")
// console.log(h3)
// h3.style.color="blue"

// const classselector=document.querySelectorAll(".classselector")
// console.log(classselector)

// classselector.forEach((ele) =>{
//     ele.style.color="blue"
// })

// const h3=document.querySelectorAll("h3")
// h3.forEach((ele) =>{
//     ele.style.color="orange"
// })
const header=document.querySelector("#header")
const main=document.getElementById("main")
const outer=document.getElementById("outer")
header.textContent= "Hello Mohan!,how are u?"
main.innerHTML="<p>this is innerhtml text</p>"


const inner=document.createElement("div")
inner.setAttribute("class","inner")
inner.innerHTML="<p>hello</p"
outer.appendChild(inner)