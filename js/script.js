
// document.getElementById("button").onclick=function akanName(){
//     var male= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
//     var female= ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

//     var date=document.getElementById("date").value;
//     var month=document.getElementById("month").value;
//     var year=document.getElementById("year").value;
//     var century=document.getElementById("century").value;
//     var form=document.getElementById("form").value;

//var weekDay= Math.round(( ( (century/4)-2*century-1)+((5*year/4) )+((26*(month+1)/10)) + date ) %7);

//     if (weekDay==0 && male==[0]){
//         alert("Your Akan name is Kwasi")
//     }
//     else if (weekDay==1 && male==[1]){
//         alert("Your Akan name is Kwadwo")
//     }
//     else if (weekDay==2 && male==[2]){
//         alert("Your Akan name is Kwabena")
//     }
//     else if (weekDay==3 && male==[3]){
//         alert("Your Akan name is Kwaku")
//     }
//     else if (weekDay==4 && male==[4]){
//         alert("Your Akan name is Yaw")
//     }
//     else if (weekDay==5 && male==[5]){
//         alert("Your Akan name is Kofi")
//     }
//     else if (weekDay==6 && male==[6]){
//        alert("Your Akan name is Kwame")
//     }
//     else if (weekDay==0 && female==[0]){
//        alert("Your Akan name is AKosua")
//     }
//     else if (weekDay==1 && female==[1]){
//         alert("Your Akan name is Adwoa")
//     }
//     else if (weekDay==2 && female==[2]){
//         alert("Your Akan name is Abenaa")
//      }
//      else if (weekDay==3 && female==[3]){
//         alert("Your Akan name is Akua")
//      }
//      else if (weekDay==4 && female==[4]){
//         alert("Your Akan name is Yaw")
//      }
//      else if (weekDay==5 && female==[5]){
//         alert("Your Akan name is Afua")
//      }
//      else if (weekDay==6 && female==[6]){
//         alert("Your Akan name is Ama")
//      }
//      else
//      alert("akan name not found")
//     }

// const ${gender}AkanName = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]
const maleAkanName = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleAkanName = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];
  // const weekDays = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];
  
  // Get user input frrom the from
 const form = document.getElementById("form");

  // Listen for a submit event on the form
  form.addEventListener("submit", (e) => {
    // prevent browser refresh
    e.preventDefault();
  
    // Get input values from the input fields
    const date = document.getElementById("date").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const genderMale = document.getElementById("male");
    const genderFemale = document.getElementById("female");
    const century = document.getElementById("century").value;
 

    
   
  
    /*
      Formula To Calculate Day of The Week
      Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
      where;
      CC - is the century digits. For example 1989 has CC = 19
      YY - is the Year digits (1989 has YY = 89)
      MM -  is the Month
      DD - is the Day of the month
      mod - is the modulus function ( % )
      */
  
    // Process name by gender
    if (genderMale.checked) {
      getMaleAkanName();
    } else if (genderFemale.checked) {
      getFemaleAkanName();
    }
  
    // If user is male this function will be exectuted
    function getMaleAkanName() {
   
  
      // Now apply the formula
      //  Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
      const male_day_of_week =
      (Number(century) / 4 - 2 * Number(century)- 1 + (5 * Number(year)) / 4 + (26 * (Number(month) + 1)) / 10 + Number(date)) % 7;
  
      // Convert negative numbers to positive
      const malePositive = Math.abs(Math.round(male_day_of_week));
  
      alert("Your Akan name is " + maleAkanName[malePositive]);
     
  
      // clear form
      form.reset()
    }
  
    // If user is male this function will be exectute
    function getFemaleAkanName() {
     
      // Now apply the formula
      //  Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
      const female_day_of_week =
        (Number(century)/ 4 - 2 * Number(century) - 1 + (5 * Number(year)) / 4 + (26 * (Number(month) + 1)) / 10 + Number(date)) % 7;
  
      // Convert negative numbers to positive
      const femalePositive = Math.abs(Math.round(female_day_of_week));
  
      alert("Your AKan name is " + femaleAkanName[femalePositive]);
      
  
      // clear form
      form.reset();
    }
  
    
  });
