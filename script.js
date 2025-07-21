const toDoList = document.querySelector("#to-do-list");
const addButton = document.querySelector("#add");
const inputTextField = document.querySelector("#input-text-field")

addButton.addEventListener('click', addItem);

document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        addItem();
    }
});

function addItem() {
    if(inputTextField.value != ''){
        let newItem = document.createElement("li");
        let newP = document.createElement("p");
        newP.textContent = inputTextField.value;
        
        let newButton = document.createElement("button");
        newButton.textContent = 'x';
        newButton.classList.add("remove-button");

        newButton.addEventListener('click', () => {
            let parent = newButton.parentElement
            parent.parentElement.removeChild(parent);
        })

        newItem.append(newP);
        newItem.append(newButton);
        
        toDoList.append(newItem);
        inputTextField.value = '';
    }
}