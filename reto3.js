let nc=+prompt("Ingresar el Número de cita");

let cc;
if(nc<=3){
  cc=200;
  total=nc*cc;
}else if(nc<=5){
cc=150;
total=(nc-3)*150+600;
}else if(nc<=8){
cc=100;
total=(nc-5)*100+900;
}else{
 cc=50;
 total=(nc-8)*50+1200;
}
console.log(`El costo de la cita es-->S/${cc}
El costo del el tratamiento es-->S/${total}`);
