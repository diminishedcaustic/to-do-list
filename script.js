const toDoList = document.querySelector("#to-do-list");
const addButton = document.querySelector("#add");
const inputTextField = document.querySelector("#input-text-field")

addButton.addEventListener('click', () => {
    if(inputTextField.value !== ''){
        let newItem = document.createElement("li")
        newItem.textContent = inputTextField.value

        toDoList.append(newItem)
        inputTextField.value = ""
    }
})