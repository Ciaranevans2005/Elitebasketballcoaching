// JavaScript for Elite Basketball Coaching Website

// Smooth Scroll to Sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Image Slider Logic
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Form Validation Example
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset();
    });
}

// Camp Registration Form Example
const campForm = document.getElementById('campRegistrationForm');
if (campForm) {
    campForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const campName = document.getElementById('camp').value;
        alert(`Thank you for registering for the ${campName} camp! We look forward to seeing you.`);
        campForm.reset();
    });
}

// Cost Calculator for Coaching Sessions
function calculateCost() {
    const hours = document.getElementById('hours').value;
    const totalCost = hours * 50; // Assuming $50 per hour
    document.getElementById('totalCost').textContent = `Total Cost: $${totalCost}`;
}
