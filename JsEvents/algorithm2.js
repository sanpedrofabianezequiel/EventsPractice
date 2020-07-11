//Index 2
var descripcion= document.querySelectorAll('.habitacion')   //Catch
var seleccion= document.querySelectorAll('select[name=habitacion]')//Catch
esconderDescripcion()         //estado inicial

seleccion[0].addEventListener('change',(event)=>{       //Evento Change

    var seleccionado= document.querySelector('.habitacion--'+event.target.value)
    esconderDescripcion()
    seleccionado.classList.remove('esconder')       //Quitamos la class correcta

    if(event.target.value == "0"){                  //Si no elige una opcion
        for(i=0;i<descripcion.length;i++){
            descripcion[i]= esconderDescripcion()
        }
    }   
})
    
function esconderDescripcion(){                 //Metodo esconder
    for(i=0 ;i<descripcion.length;i++){
        descripcion[i].classList.add('esconder')
    }   
}



