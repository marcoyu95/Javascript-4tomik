document.addEventListener('DOMContentLoaded',function(){//DOMContentLoaded no ejecuta javascript hasta que todo el html este cargado por completo; ej puede pasar que el boton add no lo tenga cargado al darle clic y tira error.
    const btn = document.getElementById('add');//obtengo el boton con el id add; variable btn tiene una referencia al boton; const no puedo modificarla ya que es constante
    const title = document.getElementById('title');//obtengo el input title
    const description = document.getElementById('description');//obtengo el input description

    btn.onclick = function(){
        console.log('Title:',title.value);
        console.log('Description:',description.value);
    };
});
//DOM document object model, representa el html en forma de objetos para poder usarlos con javascript 
