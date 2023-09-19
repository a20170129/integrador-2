var nom=prompt("ingrese su nombre");

var preg1=prompt("Cómo se llama el primer día de primavera?\nA:Primer día de primavera\nB:Equinoccio de primavera\nC:Eqiuinoccio de invierno");
if(preg1=="B"){
   preg1=25
}
else{
preg1=0
}


var preg2=prompt("Qué sucede en el polo Norte cuando llega la primavera?\nA:6 meses de luz diurna ininterrumpida\nB:6 meses de oscuridad ininterrumpida\nC:6 meses de alternancia de luz y oscuridad");
if(preg2=="A"){
   preg2=25
}
else{
preg2=0
}
var total=preg1+preg2
if (total>25){
    document.write(nom," sabes de la primavera")
}
else{
    document.write(nom," te falta")
}