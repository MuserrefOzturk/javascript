function topla(){
    let x= parseInt(document.getElementById("in1").Value);
    let y= parseInt(document.getElementById("in2").Value);
    document.getElementById("dv").innerHTML=x+y ;
}
function cıkar(){
    var x= parseInt(document.getElementById("in1").Value);
    var y= parseInt(document.getElementById("in2").Value);
    document.getElementById("dv").innerHTML= x-y;
}
function carp(){
    var x= parseInt(document.getElementById("in1").Value);
    var y= parseInt(document.getElementById("in2").Value);
    document.getElementById("dv").innerHTML= x*y;
}
function bol(){
    var x= parseInt(document.getElementById("in1").Value);
    var y= parseInt(document.getElementById("in2").Value);
    document.getElementById("dv").innerHTML= x/y;
}