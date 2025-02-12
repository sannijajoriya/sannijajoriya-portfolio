let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick =() => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header nav a'); 

window.onscroll =() => {
    sections.forEach(sec => {
        let top = window.scrollY; 
        let offset = sec.offsetTop -150; 
        let height = sec.offsetHeight; 
        let id = sec.getAttribute('id'); 

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
            links.classList.remove('active'); 
            document.querySelector('header nav a[href*=' + id + ']').classList.add("active"); 
            }); 
        };
    });  


    /*--------------------------------------------sticky navbar --------------------------------------------*/
    let header = document.querySelector('header'); 
    header.classList.toggle('sticky', window.scrollY > 100); 

    /*-------------------------------------Remove toggle incon and navbar --------------------------------*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


/*-------------------------------------------------scroll reveal  --------------------------------------------*/

ScrollReveal({ 
    distance: '80px',
    duration: 2000, 
    delay: 200, 
}); 

ScrollReveal().reveal('.home-content, heading', { origin: 'top' }); 
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form', { origin: 'buttom'}); 
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left' }); 
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right' });

/*-------------------------------------------------typed is   --------------------------------------------*/

const typed =new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Frontend Engineer'], 
    typeSpeed: 70, 
    backSpeed: 70, 
    backDelay: 1000, 
    loop: true,
});

/*-------------------------------------------------Download  --------------------------------------------*/
document.getElementById("cv-btn").addEventListener("click", function() {
    const link = document.createElement("a");  // Create an anchor tag dynamically
    link.href = "assets/SanniJajoriya.pdf";   // The path to the PDF file
    link.download = "SanniJajoriya.pdf";       // Name of the file when downloaded
    document.body.appendChild(link);           // Append the link to the DOM
    link.click();                              // Simulate the click to start the download
    document.body.removeChild(link);           // Remove the link element after the click
});
