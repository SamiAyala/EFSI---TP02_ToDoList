let ArrayToDos = [
  {
    titulo: 'toDo 1',
    descripcion: 'Hacer algo 1',
    fechaCreacion: Date.now(),
    hecho: false
  },
  {
    titulo: 'toDo 2',
    descripcion: 'Hacer algo 2',
    fechaCreacion: Date.now(),
    hecho: false
  }
]
let botonAgregar = document.getElementById('botonAgregar')

botonAgregar.onclick = () => {
  let inputTitulo = document.getElementById('inputTitulo')
  let inputDescripcion = document.getElementById('inputDescripcion')
  if (inputTitulo.value.length>0 || inputDescripcion.value.length>0) {
    let inputFechaCreacion = Date.now()
    let inputHecho = false
    ArrayToDos.push({
      titulo: inputTitulo.value,
      descripcion: inputDescripcion.value,
      fechaCreacion: inputFechaCreacion,
      hecho: inputHecho
    })
    mostrarLista()
  } else {
    alert('Alguno de los campos esta vacio.')
  }
}
console.log(ArrayToDos)
/*botonAgregar.onclick =()=>{
    let listaToDo =document.getElementById("listaToDo");
    let inputTitulo=document.getElementById("inputTitulo");
    let inputDescripcion=document.getElementById("inputDescripcion");
    let li = document.getElementById("listElement");
    li.innerHTML = inputTitulo.value;
    li.innerHTML += inputDescripcion.value;

    listaToDo.appendChild(li);
}*/

function mostrarLista () {
  let listaToDo = document.getElementById('listaToDo')
  listaToDo.innerHTML = ''
  listaToDo.innerHTML = ArrayToDos.map(
    toDo =>
      `<li class="liToDo">Titulo: ${toDo.titulo}<br>Descripcion: ${toDo.descripcion} <br>Fecha de creacion: ${toDo.fechaCreacion}<br>Hecho: ${toDo.hecho}</li>`
  ).join(' - ')
}
mostrarLista()
