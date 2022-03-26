let a = document.getElementById("email");
var b = document.getElementById("password");
var c = document.getElementById("phonenumber");



function validate()
{



  let regexp3 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regexp3.test(a.value))
  {
    if(b.value.length==0){
      alert("password cannot b empty")
  }

  else if(b.value.length<=3){
    alert("strength is weak")
    b.style.border="4px solid red";
    return false;
  }
  else if(b.value.length<=8){
    alert("strength is average")
    b.style.border="4px solid orange";
    return false;
  }
  else{
    alert("strength is strong")
    b.style.border="4px solid green";
    let regexp2 = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  if (regexp2.test(b.value))
  {
    return true;
  }
  else{
   alert("password not in format");
  }
  
  }
  

   return true;
  }
  else{
    alert("email is not in format");
  }
  
  let regexp4 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(regexp4.test(c.value))
  {
    return true;
  }
  else
  {
   alert("Phone number not in format");
   return false;
  }


}



