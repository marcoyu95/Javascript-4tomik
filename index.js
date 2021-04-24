document.addEventListener('DOMContentLoaded',function(){//DOMContentLoaded no ejecuta javascript hasta que todo el html este cargado por completo; ej puede pasar que el boton add no lo tenga cargado al darle clic y tira error.
    const btn = document.getElementById('add');//obtengo el boton con el id add; variable btn tiene una referencia al boton; const no puedo modificarla ya que es constante
    const title = document.getElementById('title');//obtengo el input title
    const description = document.getElementById('description');//obtengo el input description
    const table = document.getElementById('table');//obtengo la tabla
    const alert = document.getElementById('alert');
    let id = 1;

    function removeTodo(id){//borra la fila
        document.getElementById(id).remove();
    }

    function addTodo(){
        if(title.value === '' || description.value === ''){ // title.value == '' error ya que 2 == '2' da verdadero; usar 2 === '2' ademas compara el tipo de dato
            alert.classList.remove('d-none');//quita el d-none(oculta el elemento) lo hace visible.
            alert.innerHTML = 'Title and description are required';
            return;
        }

        alert.classList.add('d-none');//agrega el d-none, lo oculta
        const row = table.insertRow();//inserta una fila en la tabla
        row.setAttribute('id',id++);//agrega un id a la fila nueva para poder indetificarla al querer borrar
        row.innerHTML=`
        <td>${title.value}</td>
        <td>${description.value}</td>
        <td class="text-center">
          <input type="checkbox">
        </td>
        <td class="text-right">
          <button class="btn btn-primary mb-1">
            <i class="fa fa-pencil"></i>
          </button>
        </td>     
        `;//innerHTML inserta un html

        const removeBtn = document.createElement('button');//crea el boton 
        removeBtn.classList.add('btn','btn-danger','mb-1','ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = function(e){//le asigna a ese boton la funcion de borrar la fila
            removeTodo(row.getAttribute('id'));
        };
        row.children[3].appendChild(removeBtn);//agrega el boton a la fila
    }

    btn.onclick = addTodo;
});
//DOM document object model, representa el html en forma de objetos para poder usarlos con javascript 
