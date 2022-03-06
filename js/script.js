// function Validate() {
//     var date=document.getElementById("date").value;
//     var month=document.getElementById("month").value;
//     var year=document.getElementById("year").value;
//     var century=document.getElementById("century").value;

//     if (date=="" || month=="" || year==""|| century==""){
//         alert("required");
//         return false;
//     }
//     else{
//         return true;
//     }
// }
document.getElementById("button").onclick=function akanName(){
    var male= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var female= ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

    var date=document.getElementById("date").value;
    var month=document.getElementById("month").value;
    var year=document.getElementById("year").value;
    var century=document.getElementById("century").value;

    var weekDay= ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) %7;

    if (weekDay==0 && male==[0]){
        alert("Your Akan name is Kwasi")
    }
    else if (weekDay==1 && male==[1]){
        alert("Your Akan name is Kwadwo")
    }
    else if (weekDay==2 && male==[2]){
        alert("Your Akan name is Kwabena")
    }
    else if (weekDay==3 && male==[3]){
        alert("Your Akan name is Kwaku")
    }
    else if (weekDay==4 && male==[4]){
        alert("Your Akan name is Yaw")
    }
    else if (weekDay==5 && male==[5]){
        alert("Your Akan name is Kofi")
    }
    else if (weekDay==6 && male==[6]){
       alert("Your Akan name is Kwame")
    }
    else if (weekDay==0 && female==[0]){
       alert("Your Akan name is AKosua")
    }
    else if (weekDay==1 && female==[1]){
        alert("Your Akan name is Adwoa")
    }
    else if (weekDay==2 && female==[2]){
        alert("Your Akan name is Abenaa")
     }
     else if (weekDay==3 && female==[3]){
        alert("Your Akan name is Akua")
     }
     else if (weekDay==4 && female==[4]){
        alert("Your Akan name is Yaw")
     }
     else if (weekDay==5 && female==[5]){
        alert("Your Akan name is Afua")
     }
     else if (weekDay==6 && female==[6]){
        alert("Your Akan name is Ama")
     }
     else
     alert("akan name not found")
    }
