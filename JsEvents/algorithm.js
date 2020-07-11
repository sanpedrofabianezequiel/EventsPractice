/*   Eventos
 *   document.onblur
 *   change
 *   tag[atributo=nombre]     //  input[name="atributoName"]
 *   Class.remove
*/


//Index 1
var email= document.querySelector('input[name=email]');             //Capturas
var emailVerificacion= document.querySelector('input[name=email2]');   //


 emailVerificacion.addEventListener('blur',()=>{  //Evento sobre el Label
    
     verificacion=false   //Variable de entorno

     comparacion(); //idem
     comparacionEasy();  //idem
     execute(verificacion); //ejecucion

 })


function comparacion(){                       //Comparacion simple
    if(email.value ==emailVerificacion.value){
      verificacion=true;
    }
}             
function comparacionEasy() {                    //Comparacion Caracter a caracter
      for(i =0;i< email.value.length  ;i++){
        if (email.value.charAt(i) == emailVerificacion.value.charAt(i) ) {
            verificacion= true
        }else{ verifcacion= false }      
      } 
}
function execute(verifcacion){                    //ejecuta las clases
    if(verificacion){
      document.querySelector('input[name=email2]').classList.add('ok')
  }else{
      emailVerificacion.classList.remove('ok')
      emailVerificacion.classList.add('error')
  }
}


