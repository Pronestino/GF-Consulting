
const menuButton = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");



menuButton.addEventListener("click", () => {

    menu.classList.toggle("active");

});



const menuLinks = document.querySelectorAll(".menu a");


menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});





window.addEventListener("scroll", () => {


    const header = document.querySelector(".header");


    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 8px 25px rgba(0,0,0,.12)";

    } else {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.05)";

    }


});






const observer = new IntersectionObserver((entries) => {


    entries.forEach(entry => {


        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }


    });


}, {

    threshold: .15

});

const backToTop = document.querySelector(".back-to-top");


window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.classList.add("active");

    } else {

        backToTop.classList.remove("active");

    }

});



backToTop.addEventListener("click", (e)=>{

    e.preventDefault();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


const elements = document.querySelectorAll(
    ".hero-text, .hero-image, .section-title, .service-card, .number-card, .process-card, .segment-item, .about-content, .contact-form"
);



elements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});