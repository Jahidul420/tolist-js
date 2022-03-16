


let form = document.querySelector('form');
let inputFild = document.querySelector('#task-fild');
let incUl = document.querySelector('#incItems');
let comUl = document.querySelector('.completed-box ul');


// Functions

let createLi = function(submitValue){
    let liItems = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = submitValue;
    checkBox.type = 'checkbox';
    checkBox.className = 'form-check-input';

    liItems.appendChild(checkBox);
    liItems.appendChild(label);

    return liItems;
}

let addTask = function(event){
    event.preventDefault();
    let liItems = createLi(inputFild.value);

    incUl.appendChild(liItems);
    inputFild.value = '';

    bindComLi(liItems, completeTask);
}


let completeTask = function(){
    let liItems = this.parentNode;
    let deleteButton = document.createElement('button');

    deleteButton.innerText = "Delete";
    deleteButton.setAttribute('id', 'delete');
    deleteButton.className = 'btn btn-danger btn-sm ms-4 mb-1';
    liItems.appendChild(deleteButton);

    let removeCbox = liItems.querySelector('input[type="checkbox"]');
    removeCbox.remove();
    comUl.appendChild(liItems);

    deleteLiItems(liItems, deleteBtnFunc);
}



let bindComLi = function(fullLiTtem, takeCboxFunc){
    let markCbox = fullLiTtem.querySelector('input[type="checkbox"]');
    markCbox.onchange = takeCboxFunc;   
}

let deleteBtnFunc = function(){
    let liItems = this.parentNode;
    let ul = liItems.parentNode;
    ul.removeChild(liItems);
}

let deleteLiItems = function(comliItems, deleteFunc){
    let markDbtn = comliItems.querySelector('#delete');
    console.log(markDbtn);
    markDbtn.onclick = deleteFunc;
}

form.addEventListener('submit', addTask);