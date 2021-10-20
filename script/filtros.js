// aquí está la vista
let verFiltros = document.querySelector("#filtros");
let test = document.createElement("p")
test.innerText = "test desde filtros";
let botonEquipo = document.createElement("button");
botonEquipo.innerText = "Boton Barsa";
//quiero hacerlo con una arrow function
//botonEquipo.setAttribute("onclick","function ()=>console.log('Barsa')")
botonEquipo.setAttribute("onclick","verEquipo()")

//verFiltros.innerHTML = "<p>hola colega desde filtros</p>";
verFiltros.append(test, botonEquipo);
// fin de la vista

//###########################################

//inicio del ¿Modelo? (la parte funcional,modelo no lo termino de entender)


let arrayPartidos = [];
crearFiltrosPartidos();
//console.log(arrayPartidos);
let arrayFiltro = [];
filtrarEquipos("FC Barcelona")
console.log(arrayFiltro);
filtrarResultado({equipo:"FC Barcelona",id:81 ,estado:"ganado"})
console.log(arrayFiltro);
filtrarEstado()

//estado:
//pendiente==SCHEDULED
//terminado==FINISHED
//jugando==????

// ojo: crearFiltrosEstadisticas() arranca desde estadísticas => no intentes arrancar desde aquí
function crearFiltrosEstadisticas(array){
  console.log(array);
  console.log("test desde crearFiltrosEstadísticas");
}
function verEquipo(){
  console.log("FC Barcelona");
}

function crearFiltrosPartidos(){
  //console.log(data.matches);
  //console.log("test desde crearFiltrosPartidos");
  for (i=0 ; i<data.matches.length ; i++ ){
    jornada = data.matches[i].matchday;
    equipoLocal = data.matches[i].homeTeam.name;
    idEquipoLocal = data.matches[i].homeTeam.id;
    equipoVisitante = data.matches[i].awayTeam.name;
    idEquipoVisitante = data.matches[i].awayTeam.id;
    golesLocal = data.matches[i].score.fullTime.homeTeam;
    golesVisitante = data.matches[i].score.fullTime.awayTeam;
    estado = data.matches[i].status;
    if(golesLocal>golesVisitante){
      resultado = idEquipoLocal 
    }
    if(golesLocal<golesVisitante){  //ésta condición sale de la API
      resultado = idEquipoVisitante 
    }
    if(golesLocal===golesVisitante){
      resultado = "empate" 
    }
    arrayPartidos.push({jornada,equipoLocal,idEquipoLocal,equipoVisitante,idEquipoVisitante,golesLocal,golesVisitante,estado,resultado})
  }
  //console.log(arrayPartidos);
}

function filtrarEquipos(busqueda){
  //console.log(arrayPartidos);
 arrayFiltro = arrayPartidos.filter(function(partido){
   //¿que ocurre si en el return le pongo una función que tenga return?
   return busqueda === partido.equipoLocal || busqueda === partido.equipoVisitante
 })
}

function filtrarResultado({equipo,id,estado}){
  arrayFiltro = arrayFiltro.filter(function(partido){
    if (estado == "ganado"){
      console.log(`resultado:${partido.resultado} equipo:${equipo} id:${id} estado:${estado}`);
      return id == partido.resultado
    }
    if (estado == "perdido"){
      console.log("partido perdido");
      return id == partido.resultado
    }
    if (estado == "empate"){
      console.log("partido empatado");
      return "empate" == partido.resultado
    }
  })
}