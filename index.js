document.addEventListener('DOMContentLoaded',function(){//DOMContentLoaded no ejecuta javascript hasta que todo el html este cargado por completo; ej puede pasar que el boton add no lo tenga cargado al darle clic y tira error.
    const btn = document.getElementById('add');//obtengo el boton con el id add; variable btn tiene una referencia al boton; const no puedo modificarla ya que es constante
    const title = document.getElementById('title');//obtengo el input title
    const description = document.getElementById('description');//obtengo el input description
    const table = document.getElementById('table');//obtengo la tabla
    const alert = document.getElementById('alert');

    function addTodo(){
        if(title.value === '' || description.value === ''){ // title.value == '' error ya que 2 == '2' da verdadero; usar 2 === '2' ademas compara el tipo de dato
            alert.classList.remove('d-none');//quita el d-none(oculta el elemento) lo hace visible.
            alert.innerHTML = 'Title and description are required';
            return;
        }
        
        alert.classList.add('d-none');//agrega el d-none, lo oculta
        
    }

    btn.onclick = addTodo;
});
//DOM document object model, representa el html en forma de objetos para poder usarlos con javascript 
