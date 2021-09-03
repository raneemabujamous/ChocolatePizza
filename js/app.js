let forms = document.getElementById('form')
forms.addEventListener('submit',allLetter);
function allLetter(event)
  {
      event.perventDefault ;
    let inputtxt = event.target.name
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("message");
     return false;
     }
  }
