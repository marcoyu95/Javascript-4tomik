export default class Model {
    constructor(){
        this.view = null;
        this.todos = [];
        this.currentId=1;
    }
    setView(view){
        this.view = view;
    }

    getTodos(){
        return this.todos;
    }

    findTodo (id) {
        return this.todos.findIndex((todo) => todo.id === id);
    }

    toggleCompleted (id){
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        console.log(this.todos);
    }

    addTodo(title, description){
        const todo = {//objeto
            id:this.currentId++,
            title,//es igual a title:title,
            description,
            completed:false,
        }

        this.todos.push(todo);
        console.log(this.todos)
        //return Object.assign({},todo);//clona el objeto, asi no devuelvo el mismo objeto por referencia
        return {...todo};//expande el objeto todo; no es nas un objeto todo
    }

    removeTodo(id){
        const index = this.findTodo(id);
        this.todos.splice(index,1);//borra desde la posicion index 1 elemento
    }
}