let burger = document.querySelector('.top-header-container-outer .top-header .burger');
let headerNav = document.querySelector('.top-header-container-outer .top-header .header-nav');
let schedule = document.querySelector('.top-header-container-outer .top-header .schedule');
let logo = document.querySelector('.top-header-container-outer .top-header .logo');
let backgroundTop = document.querySelector('.top-header-container-outer');
let containerTopHeader = document.querySelector('.top-header-container-outer .container')
let getConsultText = document.querySelector('.top-header-container-outer .top-header .schedule span')

let aboutUs = document.querySelector('.top-header-container-outer .top-header .header-nav ul li:nth-child(4)');
let contacts = document.querySelector('.top-header-container-outer .top-header .header-nav ul li:nth-child(5)');

let allHfirst = document.querySelectorAll('h1');

allHfirst.forEach(element => {
    element.style.setProperty("--width", `${(window.innerWidth - containerTopHeader.offsetWidth)/2 + element.offsetWidth/2}px`); 
});



aboutUs.addEventListener('click', function() {
    
    if (window.innerWidth < 1230) {
        topHeaderBurger();
    }

});

contacts.addEventListener('click', function() {
    if (window.innerWidth < 1230) {
        topHeaderBurger();
    }
});

//Burger
window.addEventListener('resize', function() {

    allHfirst.forEach(element => {
        element.style.setProperty("--width", `${(window.innerWidth - containerTopHeader.offsetWidth)/2 + element.offsetWidth}px`); 
    });

    if (window.innerWidth > 1230 && burger.getAttribute('style')) {

        if (burger.getAttribute('src') == 'images/close.svg') {
            topHeaderBurger();
        }
        burger.removeAttribute("style");
        headerNav.removeAttribute("style");
        schedule.removeAttribute("style");
        schedule.classList.remove('dn');
        logo.removeAttribute("style");
        getConsultText.removeAttribute("style");
    }

}, true);

function topHeaderBurger() {

    if (burger.getAttribute('src') == 'images/burger.svg') {
        
        containerTopHeader.style.height = "auto";
        burger.setAttribute('src','images/close.svg');
        burger.style.gridColumn = "4 / 5";
        burger.style.gridRow = "1 / 2";
        headerNav.style.display = "block";
        headerNav.style.gridColumn = "1 / -1";
        schedule.style.gridColumn = "1 / 5";
        schedule.style.gridRow = "2 / 2";
        schedule.style.margin = "30px 0 13px 0";
        schedule.style.justifyContent = "start";
        schedule.style.justifySelf = "start";
        schedule.style.maxWidth = "none";
        schedule.classList.add('no-before-after');
        schedule.classList.add('db');
        schedule.classList.remove('dn');
        logo.style.marginRight = "0";
        backgroundTop.style.height = "100vh";
        getConsultText.style.display = "inline";
    } else {
        setTimeout(() => {
            containerTopHeader.style.height = "100%";
        }, 200);
  
        burger.setAttribute('src','images/burger.svg');
        burger.style.gridColumn = "auto";
        burger.style.gridRow = "auto";
        headerNav.style.display = "none";
        headerNav.style.gridColumn = "auto";
        schedule.style.gridColumn = "auto";
        schedule.style.gridRow = "auto";
        schedule.style.justifyContent = "end";
        schedule.style.justifySelf = "end";
        schedule.style.margin = "0";
        schedule.classList.remove('db');
        getConsultText.style.display = "none";

        if (window.innerWidth < 550) {
            schedule.style.display = "none"
            schedule.classList.add('dn');
        }
        
        logo.style.marginRight = "20px";
        backgroundTop.style.height = "73px";
    }

}

const swiper2 = new Swiper('.swiper-partners', {
    autoplay: {
        delay: 1000,
    },
    direction: 'horizontal',
    spaceBetween: 100,
    slidesPerView: 6,
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        1100: {
            slidesPerView: 5,
            spaceBetween: 50
        },
        1480: {
            slidesPerView: 6,
            spaceBetween: 100
        }
    }
});



