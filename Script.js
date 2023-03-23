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
        hecho: false,
    }
];
function mostrarLista(){
    let listaToDo = document.getElementById("listaToDo");
    listaToDo.innerHTML="";
  
    listaToDo.innerHTML = ArrayToDos.map(toDo => `<li>Titulo: ${toDo.titulo}</li> <li>Descripcion: ${toDo.descripcion}</li>`).join(" - ");
}
mostrarLista();