//Github: https://github.com/ManZaWeb/DIW_DWEC_TAREA_MARIO_ALFONSO.git

window.onload = function () {
    // Variables
    const imgs = [
        '../assets/imgs/1.jpg',
        '../assets/imgs/2.jpg',
        '../assets/imgs/3.jpg',
        '../assets/imgs/4.jpg',
        '../assets/imgs/5.jpg',
        '../assets/imgs/6.jpg'
        
    ];
    const time = 1000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    // Funciones

   
    //Funcion que cambia la foto en la siguiente posicion
    
    function pasarFoto() {
        if(posicionActual >= imgs.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    
    //Funcion que cambia la foto en la anterior posicion
     
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = imgs.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    
    //Funcion que actualiza la imagen de imagen dependiendo de posicionActual
    
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${imgs[posicionActual]})`;
    }

    
    //Activa el autoplay de la imagen
    
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, time);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }

    
     //Parar el autoplay de la imagen
     
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

// Funcion para abrir la ventana modal con la imagen
function abrirModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.innerHTML = `
        <div class="modal-content">
            <img src="${imgs[posicionActual]}" alt="Imagen">
            
        </div>
    `;
    document.body.appendChild(modal);    

    //Evento para cerrar el modal al hacer click fuera de la imagen o en la imagen
    
    modal.addEventListener('click', function(event) {
        if (event.target === modal || event.target !== modal) {
            cerrarModal();
        }
    });
}

function cerrarModal() {
    const $modal = document.querySelector('.modal');
    document.body.removeChild($modal);
}

    // Eventos
    $imagen.addEventListener('click', abrirModal);
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen();
}


// Función para el desplazamiento de la barra de navegación

window.addEventListener('scroll', function() {
    var barraNavegacion = document.querySelector('.nav-container');

    // Verifica si el usuario ha desplazado la página más allá de cierto punto
    if (window.scrollY > 100 ) {
        barraNavegacion.classList.add('mostrar');
        barraNavegacion.style.position = 'fixed';
        barraNavegacion.style.width = '100%';
        barraNavegacion.style.top = '0';

    } 
    if (window.scrollY < 29) {
        barraNavegacion.style.position = 'relative';
        barraNavegacion.style.top = '0';

    }

    else {
        barraNavegacion.classList.remove('mostrar');
    }
});

// Función para el desplazamiento a traves de los enlaces del nav

function scrollNav() {
    const enlaces = document.querySelectorAll('.menu a');
 
    // Un evento click para cada enlace
 
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e) {
            
            e.preventDefault(); 
            
            const seccionScroll = e.target.attributes.href.value;
            
            const seccion = document.querySelector(seccionScroll);

            // Comportamiento del desplazamiento suave
            seccion.scrollIntoView({ behavior: "smooth"});
        });
    });
}