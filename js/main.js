// ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ███████████████████ PRIMERA PRE ENTREGA ███████████████████ PRIMERA PRE ENTREGA ███████████████████ PRIMERA PRE ENTREGA ████████████████████
// ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████


/*
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
*/

// ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ███████████████████ SEGUNDA PRE ENTREGA ███████████████████ SEGUNDA PRE ENTREGA ███████████████████ SEGUNDA PRE ENTREGA ████████████████████
// ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████

let stockGeneral = [];
let stockReserva = [];
let stockDescarte = [];

class Item {
  constructor (nombre, cantidad) {
    this.producto = nombre;
    this.cantidad = cantidad;
  }
}

// Declaracion de funciones ========================================================================================

// Capitalize
function capitalizePrimeraLetra1(str) {
  return str.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())         // replace(): para remplazar. /^\w/: con "/" delimitamos el patron, en este caso "^\w", "^" nos indica el inicio del str, "\w" representa cualquier caracter alfanumerico (entonces el patron significa buscar el primer caracter alfanumerico que se encuentre al inicio del str)
}

// Mas comprimida
const capitalizePrimeraLetra2 = str => str.toLowerCase().replace(/^\w/, c => c.toUpperCase());

// ► La misma funcion pero sin funcion flecha:
function capitalizePrimeraLetra(str) {
  const minusculas = str.toLowerCase();
  const primerCaracter = minusculas.charAt(0).toUpperCase();
  return primerCaracter + minusculas.slice(1);                            // .slice(1, minusculas.length)
}

// ► Funcion para ver el contenido de los stocks
function verStock() {
  const depositoCapitalizado = prompt('Ingrese el deposito que desea consultar (General-Reserva-Descarte): ');
  const deposito = capitalizePrimeraLetra(depositoCapitalizado)
  switch (deposito) {
    case 'General':                                                       // con .forEach recorremos todos los objetos que contiene el array
      console.log('=== Stock general ===')                                // item => {} es lo mismo que function(item) {} que es una funcion anonima
      stockGeneral.forEach(i => {                                         // item es el nombre que le damos a cada objeto que contiene el array y si le agregamos .propiedad llamamos a su valor
        console.log(i.producto + ' X ' + i.cantidad);                     // item.producto es el equivalente a objeto.producto (item1.producto) (item2.producto) dentro del array no tiene nombre pero si esta indexado
      })                                                                  // es como si se creara un nuevo objeto a partir del constructor y luego llamamos a una de sus propiedades
      break;                                                              // let item1 = new Item(pan, 3) item1.producto me entrega pan y item1.cantidad me entrega 3
    case 'Reserva':
      console.log('=== Stock reserva ===')
      stockReserva.forEach(i => {
        console.log(i.producto + ' X ' + i.cantidad);
      })
      break;
    case 'Descarte':
      console.log('=== Stock descarte ===')
      stockReserva.forEach(i => {
        console.log(i.producto + ' X ' + i.cantidad);
      })
      break;
  }
}

// ► Funcion que crea un objeto con el constructor y si todo se cumple al final lo guarda en el array
function agregarObjeto(deposito) {
  while(true) {                                                           // Continua hasta que se ejecute un break
    const nombre = prompt('Ingrese el nombre del producto: ');
    if (nombre !== null) {                                                // Cancelar es igual a null
      if (nombre.trim() !== '') {                                         // Se asegura que el usuario no ingrese un string vacio o con espacio
        const cantidad = prompt('Indique la cantidad: ');
        if (!isNaN(cantidad) && cantidad.trim() !== '') {                 // Comprueba si no, no es un numero (si es un numero)
          const nombreCapitalizado = capitalizePrimeraLetra(nombre);
          const nuevoObjeto = new Item(nombreCapitalizado, cantidad);
          deposito.push(nuevoObjeto);
          console.log('Se agrego correctamente ' + nombre + ' X ' + cantidad + ' a ' + deposito)
        } else {
          console.log('Cantidad invalida. Intente nuevamente.');
        }
      } else {
        console.log('Nombre de producto inválido. Intente nuevamente.')
      }
    } else {
      break;
    }
  }
}

// ► Funcion para mover productos de un deposito a otro
function moverProducto(origen, destino) {
  
  const nombreCapitalizado = prompt('Ingrese el nombre del producto que desea mover: ');
  const nombre = capitalizePrimeraLetra(nombreCapitalizado);

  const cantidad = prompt('Indique la cantidad que desea mover');
  let encontrado = false;

  for (let i = 0; i < origen.length; i += 1) {
    if (origen[i].producto === nombre) {                                  // accede a el 'valor' de la 'propiedad' especificada del 'objeto' ubicado en el 'indice' especificado (i) del 'array'
      const cantidadOrigen = origen[i].cantidad;                          // obtengo la cantidad actual del producto en el deposito de origen
      if (cantidadOrigen >= cantidad) {                                   // compruebo si la cantidad en el deposito de origen es igual o mayor a la solicitada
        origen[i].cantidad -= cantidad;                                   // le resto la cantidad solisitada a la cantidad en el deposito de origen
        const existenciaOrigen = destino.find(i => i.producto === nombre)
        if (existenciaOrigen) {
          existenciaOrigen.cantidad += cantidad;
        } else {
          destino.push(new Item(nombre, cantidad));
        }
        console.log('Se movieron ' + cantidad + ' ' + nombre);
        encontrado = true;
        break;
      } else {
        console.log('No hay suficiente cantidad de ' + nombre);
        encontrado = true;
        break;
      }
    }
  }
  if (!encontrado) {
    console.log('El producto ' + nombre + ' no se encontró');
  }
}


agregarObjeto(stockGeneral);
verStock()
moverProducto(stockGeneral, stockReserva);
verStock()
verStock()





/*
// ► Funcion para mover objetos de un stock a otro
function moverItem() {
  const origen = prompt('Origen: General-Reserva-Descarte: ');
  const destino = promt('Destino: General-Reserva-Descarte:  ');
  const producto = prompt('Ingrese el nombre del producto a mover: ');
  const cantidad = prompt('Indique la cantidad que desea mover')

  let stockOrigen, stockDestino;                                           // Declaro dos variable al mismo tiempo
  
  if (origen === 'General') {
    stockOrigen = stockGeneral;
  } else if (origen === 'Reserva') {
    stockOrigen = stockReserva;
  } else if (origen === 'Descarte') {
    stockOrigen = stockDescarte
  } else {
    console.log('Asegúrese de escribir correctamente');
    return;
  }

  if (destino === 'General') {
    stockDestino = stockGeneral;
  } else if (destino === 'Reserva') {
    stockDestino = stockReserva;
  } else if (destino === 'Descarte') {
    stockDestino = stockDescarte
  } else {
    console.log('Asegúrese de escribir correctamente');
    return;
  }

  const objetoEncontrado = buscadorItem(stockOrigen, producto)

  if (!objetoEncontrado) {
    console.log
  }


}*/