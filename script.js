let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        
        // Animar las habilidades técnicas
        habilidades[0].style.width = "60%";
        habilidades[1].style.width = "20%";
        habilidades[2].style.width = "60%";
        habilidades[3].style.width = "50%";
        habilidades[4].style.width = "30%";
        
        // Animar las habilidades profesionales
        habilidades[5].style.width = "100%";
        habilidades[6].style.width = "95%";
        habilidades[7].style.width = "95%";
        habilidades[8].style.width = "75%";
        habilidades[9].style.width = "100%";
    }
}

// Detectar cuando los proyectos entran en la vista
function efectoProyectos() {
    var proyectos = document.getElementsByClassName("proyecto");
    var distancia_proyectos = window.innerHeight - proyectos[0].getBoundingClientRect().top;

    if (distancia_proyectos >= 200) {
        for (let i = 0; i < proyectos.length; i++) {
            proyectos[i].classList.add("aparecer");
        }
    }
}

// Detectar el scroll para aplicar ambas animaciones
window.addEventListener('scroll', function() {
    efectoHabilidades();
    efectoProyectos();
});
