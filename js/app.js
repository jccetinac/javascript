var calculadora = (function() {

var operandoa;
var operandob;
var operacion;	


  //variables
  var display = document.getElementById('display');
  var reset = document.getElementById('reset');
  var mas = document.getElementById('mas');
  var resta = document.getElementById('resta');
  var multiplicacion = document.getElementById('multiplicacion');
  var division = document.getElementById('division');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var cero = document.getElementById('cero');
  var punto = document.getElementById('punto');
  var signo = document.getElementById('signo');




  signo.onclick = function(e){
      negativo(); 
  }

  punto.onclick = function(e){
      coma();  
  }

  uno.onclick = function(e){
      borrarcero();
      limite();
      display.textContent = display.textContent  + "1";
  
  }
  dos.onclick = function(e){
      borrarcero();
       limite();
      display.textContent = display.textContent  + "2";
  }
  tres.onclick = function(e){
      borrarcero();
       limite();
      display.textContent = display.textContent  + "3";
  }
  cuatro.onclick = function(e){
      borrarcero();
      limite();
      display.textContent = display.textContent  + "4";
  }
  cinco.onclick = function(e){
      borrarcero();
      limite();
      display.textContent = display.textContent  + "5";
  }
  seis.onclick = function(e){
      borrarcero();
      limite();
      display.textContent = display.textContent  + "6";
  }
  siete.onclick = function(e){
      borrarcero();
      limite();
      display.textContent = display.textContent  + "7";
  }
  ocho.onclick = function(e){
      borrarcero();
      limite();
      display.textContent = display.textContent  + "8";
  }
  nueve.onclick = function(e){
      borrarcero();
      limite();
      display.textContent = display.textContent  + "9";
  }
  cero.onclick = function(e){
     sinceroinicial();
     limite();
  }
  reset.onclick = function(e){
      resetear();
  }
  mas.onclick = function(e){
      operandoa = display.textContent;
      operacion = "+";
      limpiar();
  }
  resta.onclick = function(e){
      operandoa = display.textContent;
      operacion = "-";
      limpiar();
  }
  multiplicacion.onclick = function(e){
      operandoa = display.textContent;
      operacion = "*";
      limpiar();
  }
  division.onclick = function(e){
      operandoa = display.textContent;
      operacion = "/";
      limpiar();
  }
  igual.onclick = function(e){
      operandob = display.textContent;
      resolver();
  }

function limpiar(){
  display.textContent = "";
}
function resetear(){
  display.textContent = "0";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  display.textContent = res;
}



function coma() {
    var resultat = display.textContent ;
    if(resultat.indexOf(".")!=-1){
        return false;
    } else {
    display.textContent = display.textContent  +  '.' ;
    }
}



function negativo() {
var elsigno = parseFloat (display.textContent) ;
if (elsigno == 0) { return false;}
else { 
  display.textContent = elsigno * -1;

 }

 }


function sinceroinicial() {
var inicial = parseFloat (display.textContent);
if (inicial == 0 ){
return false;
}
else { display.textContent = display.textContent  +  '0' ;  }

}



function borrarcero() {
var inicial = parseFloat (display.textContent);
if (inicial == 0 ){  limpiar();  }
}




function limite() {
var input = display.textContent;
if (input.length > 8) { display.textContent = display.textContent.slice(0,8); }
}




})();


