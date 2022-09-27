// let titulo = document.getElementById("titulo");
// titulo.innerHTML = "Universidad Del Magdalena";
// parametros para la funcion de mostrar mas con un boton 
let boton = document.getElementById('mostrar_m_btn');
let texto= document.getElementById('mostrar_m');

boton.addEventListener('click',toggleText);

function toggleText()
{
    texto.classList.toggle('show');
    if(texto.classList.contains('show')){
        boton.innerHTML='Mostrar menos';

    }else{
        boton.innerHTML='Mostrar más';
    }
}
// ***********************************************************

const asunto=document.querySelector('#Asunto');
const nombre=document.getElementById('Asunto');
const correo=document.getElementById("Correo");
const mensaje=document.getElementById("Mensaje");
const botonf=document.getElementById("botonformulario");

botonf.addEventListener('click',(a)=>{
    a.preventDefault();
    if(nombre.value.length==0 || correo.value.length==0 || mensaje.value.length==0)
    {
        // alert('Un campo se encuentra vacio por favor llenelo correctamente');
        Swal.fire('Existen campos vacios por favor completelos correctamente');
    }else{
       
        var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
       
        if( validEmail.test(correo.value) ){
            Swal.fire('Asunto: '+asunto.value+"\n"+
            'Correo: '+correo.value+"\n"+
            'mensaje: '+mensaje.value);
            asunto.value="";
            correo.value="";
            mensaje.value="";
            
        }else{
            Swal.fire('El correo ingresado no es valido, por favor intente nuevamente');
        }
           
        
        
        
        // alert();
    }
  
});
// botonf.addEventListener("submit",e =>{})
// {

// }
const html=document.getElementById('html5');

window.onload = function() { 
		
    animateprogress(html,91);
    animateprogress("#php",72);
    animateprogress("#css",86);
    animateprogress("#python",52);
    animateprogress("#javascript",79);
    animateprogress("#nodejs",36);
    
} 	
function animateprogress (id, val){    
 
 
    var getRequestAnimationFrame = function () {  /* <------- Declaro getRequestAnimationFrame intentando obtener la máxima compatibilidad con todos los navegadores */
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||  
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function ( callback ){
            window.setTimeout(enroute, 1 / 60 * 1000);
        };
         
    };
     
    var fpAnimationFrame = getRequestAnimationFrame();   /* <--- Declaro una instancia de getRequestAnimationFrame para llamar a la función animación */
    var i = 0;
    var animacion = function () {
             
    if (i<=val)
        {
            document.querySelector(id).setAttribute("value",i);      /* <----  Incremento el valor de la barra de progreso */
            document.querySelector(id+"+ span").innerHTML = i+"%";     /* <---- Incremento el porcentaje y lo muestro en la etiqueta span */
            i++;
            fpAnimationFrame(animacion);          /* <------------------ Mientras que el contador no llega al porcentaje fijado la función vuelve a llamarse con fpAnimationFrame     */
        }
                                         
    }
 
        fpAnimationFrame(animacion);   /*  <---- Llamo la función animación por primera vez usando fpAnimationFrame para que se ejecute a 60fps  */
                 
}