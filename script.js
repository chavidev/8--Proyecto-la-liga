//let ensayo = document.

// https://codepen.io/susanwinters/pen/YpRMdg
//let partidos = document.createElement("tbody");
//let partidos = document.createElement("tr"); 
let partidos = document.querySelector("tbody");
//let partidos = document.getElementById("tabla");

let partido  
let local
let resultado
let visitante

let jornada = "";
let equipoLocal = "";
let equipoVisitante = "";

for (i=0 ; i<data.matches.length ; i++ ){
  jornada = data.matches[i].matchday;
  equipoLocal = data.matches[i].homeTeam.name;
  equipoVisitante = data.matches[i].awayTeam.name;
  puntosLocal = data.matches[i].score.fullTime.homeTeam;
  puntosVisitante = data.matches[i].score.fullTime.awayTeam
  
  partido = document.createElement("tr"); 
  local = document.createElement("td");
  resultado = document.createElement("td");
  visitante = document.createElement("td");
  local.innerText = equipoLocal;
  resultado.innerText = `${puntosLocal} - ${puntosVisitante}`; //pendiente de colocar correctamente
  visitante.innerText = equipoVisitante ;

  partido.append(local , resultado, visitante);//colocar el resto con comas resul y visitante
  partidos.append(partido);
}



//partidos.innerHTML = "hola colega"

console.log(partido)