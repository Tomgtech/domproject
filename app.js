// console.log("hello world");
// const body = document.querySelector("body");
// console.log("body");
// const h1 = document.querySelector("h1");
// console.log("h1");
// h1.textContent = "hello world";
// conslone.log(h1);
const body = document.querySelector("body");

const h1 = document.createElement("h1");
h1.textContent = "This is a heading!";
body.appendChild(h1);
const h1 = document.querySelector("h1");
h1.remove();
