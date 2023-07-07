// 1. Select all elements
const form = document.querySelector("#new-item-form")
const list =document.querySelector("#list")
const input = document.querySelector("#item-input")

// 2. When the form is submitted, add a new element
form.addEventListener("submit", e=> {
    e.preventDefault()

    // 1. Create a new item
    const item = document.createElement("li")
    item.innerText=input.value
    item.classList.add("list-item")

    // 2. Add that item to the list
    list.appendChild(item)

    // 3. Clear input
    input.value= ""

    // 4. Setup event listener to delete item when clicked
    item.addEventListener("click", () => {
        item.remove()
    })
    


// if li is given create element, new data adds with a point
// if div in create element, new data without point
// to change the style of point, need to change in html or css


})

