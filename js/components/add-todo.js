export default class AddTodo {
    constructor(){
        this.btn = document.getElementById('add');//obtengo el boton con el id add; variable btn tiene una referencia al boton; const no puedo modificarla ya que es constante
        this.title = document.getElementById('title');//obtengo el input title
        this.description = document.getElementById('description');//obtengo el input description
    
    }

    onClick(callback){
        this.btn.onclick = () => {
            if(title.value === '' || description.value === ''){ // title.value == '' error ya que 2 == '2' da verdadero; usar 2 === '2' ademas compara el tipo de dato
            // alert.classList.remove('d-none');//quita el d-none(oculta el elemento) lo hace visible.
            // alert.innerHTML = 'Title and description are required';
            // return;
                console.log('Error');
            } else{
                callback(this.title.value,this.description.value);
            }
        }


    }
}