const display = document.getElementById("display");

function appendToDisplay(input){
display.value +=input;
console.log(input)
}

function clearDisply(){
display.value =" ";
}

function calculate(){
    try{
       display.value=eval(display.value);
        }

    catch(error){
    display.value="error"
    }
}
function deletebutton() {
    let currentDisplayValue = display.value;
  
    if (currentDisplayValue.length > 0) {
      display.value = currentDisplayValue.slice(0, -1);
    }
  }