const input = document.getElementById("nameInput");

function addCheckbox(){
    let newDiv = document.createElement('div');

    newDiv.className = 'divs';
    newDiv.textContent = `${input.value}`;

    document.body.appendChild(newDiv);

    let checkbox = document.createElement('input');

    checkbox.type = 'checkbox';

    let removeBtn = document.createElement('button');

    removeBtn.textContent = "Remove";

    newDiv.appendChild(checkbox);
    newDiv.appendChild(removeBtn);

    removeBtn.onclick = function() {
        removeBtn.parentElement.remove();
    };
}