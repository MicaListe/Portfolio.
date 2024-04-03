document.addEventListener("DOMContentLoaded", function() {
    let menuIcon= document.querySelector('#menu-icon')
    let navbar= document.querySelector('.navbar')
    let sections = document.querySelectorAll('section')
    let navLinks= document.querySelectorAll('header nav a')
    
    window.onscroll = () => { // Se ejecutará cada vez que se desplace la ventana
        sections.forEach(sec => { // Itera sobre cada elemento <section>
            let top = window.scrollY; // Obtiene la posición de desplazamiento vertical de la ventana.
            let offset = sec.offsetTop - 150; // Obtiene la posición vertical del borde superior del elemento <section> actual, ajustado por 150 píxeles.
            let height = sec.offsetHeight; // Obtiene la altura del elemento <section> actual.
            let id = sec.getAttribute('id'); // Obtiene el atributo id del elemento <section> actual.
    
            if (top >= offset && top < offset + height) { // Verifica si la posición de desplazamiento está dentro del rango de la posición superior y la posición superior más la altura del elemento <section> actual.
                navLinks.forEach(link => { // Itera sobre cada elemento <a> dentro de los enlaces de navegación.
                    link.classList.remove("active"); // Elimina la clase "active" de todos los enlaces de navegación.
                });
                document.querySelector("header nav a[href='#" + id + "']").classList.add("active"); // Selecciona el enlace de navegación que tiene un atributo href que contiene el id del elemento <section> actual y le añade la clase "active".
            }
        });
    };
    
    menuIcon.onclick = () => {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
})