let ArrayToDos = [
  {
    id: makeid(10),
    titulo: 'toDo 1',
    descripcion: 'Hacer algo 1',
    fechaCreacion: new Date(),
    timestamp: parseInt((new Date()).getTime(), 16),
    hecho: false,
    fechaHecho: null,
    timestampHecho: null
  },
  {
    id: makeid(10),
    titulo: 'toDo 2',
    descripcion: 'Hacer algo 2',
    fechaCreacion: new Date(),
    timestamp: parseInt((new Date()).getTime(), 16),
    hecho: false,
    fechaHecho: null,
    timestampHecho: null
  },
]
let botonAgregar = document.getElementById('botonAgregar')
let botonMasRapido = document.getElementById('botonMasRapido')

botonAgregar.onclick = () => {
  let inputTitulo = document.getElementById('inputTitulo')
  let inputDescripcion = document.getElementById('inputDescripcion')
  if (inputTitulo.value.length > 0 || inputDescripcion.value.length > 0) {
    ArrayToDos.push({
      id: makeid(10),
      titulo: inputTitulo.value,
      descripcion: inputDescripcion.value,
      fechaCreacion: new Date(),
      timestamp: parseInt((new Date()).getTime(), 16),
      hecho: false,
      fechaHecho: null,
      timestampHecho: null
    })
    mostrarLista()
  } else {
    alert('Alguno de los campos esta vacio.')
  }
}
function mostrarLista() {
  let listaToDo = document.getElementById('listaToDo')
  listaToDo.innerHTML = ''
  listaToDo.innerHTML = ArrayToDos.map(
    toDo => `<div id="divToDo" class="w-50 p-4"><p class="position-absolute start-50 translate-middle"> ${toDo.hecho ? '<s>' : ''}${toDo.titulo}</s></p><br><button class="btn btn-primary position-absolute start-50 translate-middle" type="button" data-bs-toggle="collapse" data-bs-target="#${toDo.id}" aria-expanded="false" aria-controls="collapseExample" id="buttonToDo">
    Ver Más
  </button>
</p>
<div class="collapse" id="${toDo.id}">
  <div class="card card-body">
      <p class="pToDo" id="pToDo">Descripcion: ${toDo.descripcion} <br>Fecha de creacion: ${toDo.fechaCreacion.toLocaleDateString('es')}<br>timestamp: ${toDo.timestamp}
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onclick="toggleHecho('${toDo.id}')" ${toDo.hecho ? 'checked' : ''}>
    </div> ${toDo.hecho ? "Fecha en la que se hizo: " + toDo.fechaHecho.toLocaleDateString('es') : ''} </p>
  </div>
</div><br></div>
`
  ).join('-')
}
mostrarLista()

function toggleHecho(id) {
  let unElemento = ArrayToDos.find(unTodo => unTodo.id === id);
  unElemento.hecho ? unElemento.hecho = false : unElemento.hecho = true;
  unElemento.fechaHecho = new Date();
  unElemento.timestampHecho = parseInt((new Date()).getTime());
  mostrarLista();
}

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

botonMasRapido.onclick = () => {
  const tachados = ArrayToDos.filter(toDo => toDo.hecho);
  let elMasRapido = tachados[0];
  let elTiempoMasRapido = elMasRapido.fechaHecho - elMasRapido.fechaCreacion;

  tachados.forEach(toDo => {
    if ((toDo.fechaHecho - toDo.fechaCreacion) < elTiempoMasRapido) {
      elTiempoMasRapido = toDo.fechaHecho - toDo.fechaCreacion;
      elMasRapido = toDo;
    }
  });
  alert("El mas rapido fue: " + elMasRapido.titulo);
}
