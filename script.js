const toDoList = document.querySelector("#to-do-list");
const addButton = document.querySelector("#add");
const inputTextField = document.querySelector("#input-text-field")

addButton.addEventListener('click', () => {
    if(inputTextField.value != ''){
        let newItem = document.createElement("li");
        newItem.textContent = inputTextField.value;
        
        let newButton = document.createElement("button");
        newButton.textContent = 'x';
        newButton.classList.add("remove-button");

        newButton.addEventListener('click', () => {
            let parent = newButton.parentElement
            parent.parentElement.removeChild(parent);
        })

        newItem.append(newButton);
        
        toDoList.append(newItem);
        inputTextField.value = '';
    }
});