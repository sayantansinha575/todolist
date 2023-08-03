var form = document.getElementById('form');
var input = document.getElementById('input');
var msg = document.getElementById('msg');
var posts = document.getElementById('posts');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('click');
    validation();
})

const validation = () => {
    if (input.value == '') {
        msg.innerHTML = "Fill The Form";
    } else {
        insertData();
    }
}

var data = {};

const insertData = () => {
    data['text'] = input.value;
    input.value = '';
    console.log(data);
    todoLists();
}

const todoLists = () => {
    posts.innerHTML +=
        ` <div>
                    <p>${data.text}</p>
                    <span class="options">
                        <i class="fas fa-edit" onClick="editData(this)"></i>
                        <i class="fas fa-trash-alt" onClick="deleteData(this)"></i>
                    </span>
                </div>`;
    input.value = '';
}

const deleteData = (e) => {
    e.parentElement.parentElement.remove();
}

const editData = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}