crearFiltrosPartidos();//desde aquí tendré que llamar a verPartidos
verPartidos(data.matches);


// si el primero es undefined, coge el segundo
// && no consigo hacerlo funcionar para la llamada desde el filtro
function verPartidos (array){
  console.log("data.matches"+JSON.stringify(data.matches))
  let partido , local, resultado, visitante, jornada , equipoLocal , idEquipoLocal , equipoVisitante , idEquipoVisitante;
  let partidos = document.querySelector("tbody");
  partidos.innerText = "";
  for (i=0 ; i<array.length ; i++ ){
    //console.log(array[i].awayTeam.name)
    jornada = typeof array[i].matchday === undefined ? array[i].jornada : array[i].matchday;
    equipoLocal = typeof array[i].homeTeam === undefined ? array[i].equipoLocal : array[i].homeTeam.name;
    idEquipoLocal = typeof array[i].homeTeam === undefined ? array[i].idEquipoLocal : array[i].homeTeam.id;
    equipoVisitante = typeof array[i].awayTeam === undefined ? array[i].equipoVisitante : array[i].awayTeam.name;
    idEquipoVisitante = typeof array[i].awayTeam === undefined ? array[i].idEquipoVisitante : array[i].awayTeam.id;
    golesLocal = typeof array[i].score === undefined ? array[i].golesLocal : array[i].score.fullTime.homeTeam;
    golesVisitante = typeof array[i].score === undefined ? array[i].golesVisitante : array[i].score.fullTime.awayTeam;
    
    partido = document.createElement("tr");
    local = document.createElement("td");
    imgLocal = document.createElement("td");
    resultado = document.createElement("td");
    visitante = document.createElement("td");
    imgVisitante = document.createElement("td");

    local.innerText = equipoLocal;
    local.setAttribute("class","text-end");
    /* resultado.innerText = `${golesLocal} - ${golesVisitante}`;  */
    resultado.innerText = ((golesLocal||golesVisitante) == null)? "pendiente":`${golesLocal} - ${golesVisitante}`;
    resultado.setAttribute("class","text-center");
    visitante.innerText = equipoVisitante ;
    visitante.setAttribute("class","text-start");

    imgEquipo(imgLocal, idEquipoLocal);
    imgEquipo(imgVisitante, idEquipoVisitante);
  
    partido.append(local , imgLocal, resultado, imgVisitante, visitante);
    partidos.append(partido);
  }
}

function imgEquipo (imgTd , id) {
  let imgLogo = document.createElement("img");
  imgLogo.setAttribute("src",`https://crests.football-data.org/${id}.svg`);
  imgLogo.setAttribute("width","50px");
  imgTd.append(imgLogo);
  imgTd.setAttribute("width","50px")
}
 
// start cabecera-sticky
// me hace fondo transparente y lo soluciono con una imágen de fondo
//no consigo hacer el código mio, no me funciona eliminar la clase cuando lo tuneo
function fijarCabezera ()  {
  let cabezeras = document.querySelectorAll('.cabezera')
  cabezeras.forEach(cab => { cab.classList.add('cabezera-fixed') }) //modificación a mi estilo ¿perfect?
  //cabezeras.forEach( function (cab) { cab.setAttribute('class','cabezera-fixed') })
}
 
function desfijarCabezera () {
  let cabezeras = document.querySelectorAll('.cabezera')
  cabezeras.forEach(cab => { cab.classList.remove('cabezera-fixed') })
  //cabezeras.forEach(function (cab) { cab.removeAttribute("class") })
}
 
window.addEventListener('scroll', function(e) {
  //veo el movimiento del scroll
  //console.log(window.scrollY)
  if(window.scrollY >= 40) {
    fijarCabezera()
  } else {
    desfijarCabezera()
  }
});
// end cabecera