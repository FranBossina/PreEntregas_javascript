const listaDeCompras = [];

//declaracion de funciones -------------------------------------------

function agregarElemento(elemento) {
  if (elemento !== null) {
    listaDeCompras.push(elemento);
    console.log(elemento + ' ha sido agregado a la lista')
  }
}

function eliminarElemento(elemento) {
  if (elemento !== null) {

    const indice = listaDeCompras.indexOf(elemento);
    if (indice !== -1) {
      let respuesta = confirm('Seguro que deseas eliminar ' + elemento + ' de la lista');
      if (respuesta == true) {
        listaDeCompras.splice(indice, 1);
        console.log(elemento + ' ha sido eliminado de la lista');
      }
    }
    else {
      console.log(elemento + ' no esta en la lista');
    }
  }
}

function mostrarLista() {
  console.log('Lista de compras:');
  for (let i = 0; i < listaDeCompras.length; i += 1) {
    console.log(listaDeCompras[i]);
  }
}

//--------------------------------------------------------------------

alert('=== Agregar elementos ===')
let agregar = '';
while (agregar !== null) {
  agregar = prompt('Ingrese el nombre del elemento');
  if (agregar !== '') {
    agregarElemento(agregar);
  }
  else if (agregar === null) {
    break;
  }
  else {
    alert('Nombre invalido');
  }
}

alert('=== Quitar elementos ===')
let quitar = '';
while (quitar !== null) {
  quitar = prompt('Ingrese el nombre del elemento');
  if (quitar !== '') {
    eliminarElemento(quitar);
  }
  else if (quitar === null) {
    break
  }
  else {
    alert('Nombre invalido')
  }
}

mostrarLista()