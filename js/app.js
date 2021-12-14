

/* Navegador */
const burguer = document.querySelector(".burguer");
const nav = document.querySelector(".links");
const links = document.querySelectorAll(".links li");

//abrir navegador
function navSlide ()  {
    //btn-menu
    burguer.addEventListener("click", () => {
        nav.classList.toggle("links-active");

    //animaciones al los links
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `linksfade 0.5s ease backwards ${index / 5 + 0.5}s`;
            }
        });
    //animacion btn-menu
    burguer.classList.toggle('toggle');
});
};
    //cerrar nav
    function cerrarNav (){
        nav.classList.toggle('links-active');
        burguer.classList.toggle('toggle');
        console.log(numero);
    }


navSlide();


/* Eventos scrooling */

    AOS.init();


/* Swiper */
const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // Si necesitas paginacion
        pagination: {
        el: '.swiper-pagination',
        },
    
        //  Flechas
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },


        autoplay: {
            delay: 5000,
        },
});



/* ejercicios */

