const bpackage = document.querySelector('#basic-package')
const spackage = document.querySelector('#standard-package')
const ppackage = document.querySelector('#premium-package')
const basic = document.querySelector('#basic')
const standard = document.querySelector('#standard')
const premium = document.querySelector('#premium')

bpackage.addEventListener('click', () => {
    basic.style.display = 'block';
    standard.style.display = 'none';
    premium.style.display = 'none';

    bpackage.classList.add('active-package');
    spackage.classList.remove('active-package');
    ppackage.classList.remove('active-package');
});

spackage.addEventListener('click', () => {
    basic.style.display = 'none';
    standard.style.display = 'block';
    premium.style.display = 'none';

    spackage.classList.add('active-package');
    bpackage.classList.remove('active-package');
    ppackage.classList.remove('active-package');
});

ppackage.addEventListener('click', () => {
    basic.style.display = 'none';
    standard.style.display = 'none';
    premium.style.display = 'block';

    ppackage.classList.add('active-package');
    bpackage.classList.remove('active-package');
    spackage.classList.remove('active-package');
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

