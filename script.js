// * select items *

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.querySelector("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list")
const clearBtn = document.querySelector(".clear-btn");

// edit option

let editElement;
let editFlag =  false;
let editID = "";
//event listeners

