import AddTodo from './components/add-todo.js';

export default class View {
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');//obtengo la tabla
        this.addTodoForm = new AddTodo();
        this.addTodoForm.onClick((title,description) => this.addTodo(title,description));
    }

    setModel(model){
        this.model = model;
    }

    toogleCompleted(id){
        this.model.toggleCompleted(id);
    }

    addTodo(title, description){
        const todo = this.model.addTodo(title,description);
        this.createRow(todo);
    }

    removeTodo(id){
        this.model.removeTodo(id);
        document.getElementById(id).remove();
    }

    createRow(todo){
        const row = table.insertRow();//inserta una fila en la tabla
        row.setAttribute('id',todo.id);//agrega un id a la fila nueva para poder indetificarla al querer borrar
        row.innerHTML=`
        <td>${todo.title}</td>
        <td>${todo.description}</td>
        <td class="text-center">
          
        </td>
        <td class="text-right">
          <button class="btn btn-primary mb-1">
            <i class="fa fa-pencil"></i>
          </button>
        </td>     
        `;//innerHTML inserta un html

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.onclick=() => this.toogleCompleted(todo.id);
        row.children[2].appendChild(checkbox);//agrega el checkbox a la fila

        const removeBtn = document.createElement('button');//crea el boton 
        removeBtn.classList.add('btn','btn-danger','mb-1','ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = () => this.removeTodo(todo.id);//le asigna a ese boton la funcion de borrar la fila
        row.children[3].appendChild(removeBtn);//agrega el boton a la fila
    }
}