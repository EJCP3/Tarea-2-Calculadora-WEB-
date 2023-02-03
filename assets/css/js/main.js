let displays = document.getElementById('resultado');
const mostrarH = document.getElementById('mostrarH');
const p = document.querySelector('p');
let divResultado = document.getElementById('panel');

let On = false;

const wipe = () => {
    displays.value = '';
}

const show = (n) => {
    displays.value += n;
}



const calc = () => {
    displays.value = eval(displays.value);

    let historia = localStorage.getItem("historia");
    if (historia === null) {
        historia = displays.value + "</br>";
    } else {
        historia = historia + displays.value + "</br>";
    }
  
    localStorage.setItem("historia", historia);
  
    p.innerHTML = historia;
  
   
}

mostrarH.addEventListener("click", function()
{
    if( On){
        divResultado.style.display="block";
        On = false;
       
    }
    else{
        divResultado.style.display="none";
        On = true;

        
    }
    

});





  
