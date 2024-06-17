/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};






/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top< offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
                console.log(id);
                // document.querySelector('.header nav a[href=' + id + ']').classList.add('active')
            });
        }
    });


    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

const contactForm = document.querySelector('#contact-form'),
contactMessage =document.querySelector('#contact__message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_aw3ptfx', 'template_f49wota', '#contact-form', 'q7tuq-ep_lZSHYzA_')
    .then(() => {
        contactMessage.textContent = 'Message sent successfully ✅'
        setTimeout(()=>{
            contactMessage.textContent=''        }, 5000)

        contactForm.reset()
    }),()=>{
        contactMessage.textContent = 'Message not sent (service error) ❌'
    }
}
contactForm.addEventListener('submit', sendEmail)

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

