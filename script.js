const scrollHeader = () => {
    const header = document.getElementById('header');
    if(this.scrollY >= 50) {
        header.classList.add('scroll-header');
    }
    else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

var swiperProducts = new Swiper(".products__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        1024: {
            spaceBetween: 72,
        }
    }
});

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        }
        else {
            sectionsClass.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    }
    else {
        scrollUp.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollUp)