//Para que almacene lo que realice el usuario en un arreglo y guarde las funciones de los botones que utilice
//element = document.querySelector(selectores);

const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

//Para recorer un arreglo se hece con un forEach

botones.forEach(boton => {
    boton.addEventListener("click", () =>{
        const botonClick = boton.textContent;
        if (boton.id === "limpiar"){
            pantalla.textContent = "0";
            //Se pone le return para que finalice el if y no tome la funcion del siguiente if 
            return;
        }
        if (boton.id === "eliminar"){
            //En esta parte indica que cuando falte un solo numero para borrar se ponga el 0 
            if (pantalla.textContent.length === 1 || pantalla.textContent === "¡ERROR!" || pantalla.textContent === "/" || pantalla.textContent === "*" || pantalla.textContent === "+" || pantalla.textContent === "-" || pantalla.textContent === "."){
                pantalla.textContent = "0";
            } else {
                //Se utiliza el slice para que elimine de -1 en -1
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        if(boton.id === "igual") {
            try {
                const expresion = pantalla.textContent;
                if (expresion.includes("//")) {
                    pantalla.textContent = "¡ERROR!";
                } else {
                    //En este caso se valida el signo que se selecciona por el usuario para saber que operacion matematica se realizara eso se hace con el eval
                    const resultado = eval(expresion);
                    if (isNaN(resultado) || !isFinite(resultado)){
                        pantalla.textContent = "¡ERROR!";
                    } else {
                        pantalla.textContent = resultado;
                    }
                }
            } catch (error) {
                //Generar un error cuando no hay coherencias en las formulas 
                pantalla.textContent = "¡ERROR!";
            }
            return;
        }

        //En el inicio del ciclo se pone el === para que se inicie en 0
        if (pantalla.textContent === "0" || pantalla.textContent === "¡ERROR!"){
            //En esta parte se hace la validacion de poner en la pantalla lo que selecciono el usuario
            pantalla.textContent = botonClick;
        } else {
        pantalla.textContent += botonClick;
        }
        
        //console.log(boton.textContent);
    })    
});
