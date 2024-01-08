var t=math.floor((math.random()*100)+1);
var sayac=0;
function control(){
    var i=document.getElementById("in1").value;
    if(i<t){
sayac++;
document.getElementById("s").innerHTML=sayac;
document.getElementById("p").innerHTML="daha büyük bir sayı giriniz";
    }
else if(i>t){
sayac++;
document.getElementById("s").innerHTML=sayac;
document.getElementById("p").innerHTML="daha küçük bir sayı giriniz";
}else if(i==t){
    document.getElementById("p").innerHTML="Tebrikler sayıyı bildiniz...";
}
}