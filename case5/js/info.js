function loginControl(){
    var x = document.getElementById("mail").value;
    var y= document.getElementById("sifre").value;

    if(x=="info@gmail.com" && y=="12345"){
        document.getElementById("h4").innerHTML="Giriş Başarılı";
    }else{
        alert("Bilgilerinizi Kontrol Ediniz");
    }
}