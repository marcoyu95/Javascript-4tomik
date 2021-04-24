const btn = document.getElementById('add');//obtengo el boton con el id add; variable btn tiene una referencia al boton; const no puedo modificarla ya que es constante
btn.addEventListener('click', function(){//le asigna al boton una accion; cuando hace click llama a la funcion
    console.log('Click');//muestro para ver si funciona, revisar la consola

});