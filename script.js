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

// submit form
form.addEventListener("submit", addItem);
//clear list
clearBtn.addEventListener("click", clearItems);
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);

// ******* functions ********

// add item
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if (value !=="" && !editFlag) {
        const element = document.createElement("article");
        let attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.classList.add("grocery-item");
        element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
            <!-- edit btn -->
                <button type="button" class="edit-btn">
                    <i class="fas fa-edit"></i>
                </button>
                <! -- delete button -->
                <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            `;
    // add event lsteners to both buttons
        const deleteBtn = element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", dleteItem);
        const editBtn = element.querySelector(".edit-btn");
        editBtn.addEventListener("click", editItem)

        //append child
        list.appendChild(element);
        //display alert
        displayAlert("item added to the list", "success");
        //show container
        container.classList.add("show-container");
        //set local storage
        addToLocalStorage(id, value);
        //set back to default
        setBackToDefault();
    } else if (value !=="" && editFlag) {
        editElement.innerHTML = value;
        displayAlert("Value Changed", "Success")

        // edit local storage
        editLocalStorage(editID, value)
        setBackToDefault();
    } else {
        displayAlert("Please Enter a Value", "Danger");
    }
}


