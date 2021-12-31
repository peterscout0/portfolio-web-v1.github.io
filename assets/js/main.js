// --------------- Header scroll ----------------
let  lastScrollTop = 0;
headerMain = document.getElementById('headerMain');
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop) {
        headerMain.style.top = '-100px';
    } else {
        headerMain.style.top = '0';
    }
    lastScrollTop = scrollTop;
});


// --------------- Header sticky scroll ----------------

window.addEventListener('scroll', () => {
    let headerScroll = document.querySelector('.header-main');
    headerScroll.classList.toggle('header-sticky', window.scrollY > 0);
})

// --------------- NavBar responsive ----------------
const header = document.getElementById('headerMain');
const toggle = document.getElementById('toggle');
const menu = document.getElementById('styled-links-container-nav');

document.onclick = e => {
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'menu') {
        toggle.classList.remove('active'); 
        menu.classList.remove('active');    
    }
}

toggle.onclick = () => {
    toggle.classList.toggle('active'); 
    menu.classList.toggle('active');
}


// --------------- Header menu intersection observer section ----------------

const SECTIONS = document.querySelectorAll('section');
const NAV = document.querySelector('.header-main__nav');
const NAVLIST = document.querySelectorAll('.styled-li__a');

const OPTIONS = {
    threshold: '0.5', // 0.5 === 50% of the section should be visible. 
};

const OBSERVER = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            // Changing navBar style on scroll to next section
            if (e.target.id !== "hero-main") {
                NAV.classList.add('active');
            } else {
                NAV.classList.remove('active');
            }

            // Section indicator

            NAVLIST.forEach(link => {

                // To remove active class from other
                link.classList.remove('active');
                
                if (e.target.id === link.dataset.nav) {
                    
                    link.classList.add('active');
                }
            });
        } 
    });
}, OPTIONS);

SECTIONS.forEach(section => {
    OBSERVER.observe(section);
});


// --------------- animation scroll reveal ----------------

window.addEventListener('scroll', reveal);

function reveal() {
    let reveals = document.querySelectorAll('.reveal-animation');

    for(let i = 0; i < reveals.length; i++) {

        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 55;

        if (revealTop < windowHeight - revealPoint) {
            
            reveals[i].classList.add('active');
        }   
        else {
            reveals[i].classList.remove('active');
        }
    }
}

// --------------- Modal ----------------


const MODAL = document.querySelector('.modal-project');
const BUTTON1 = document.querySelector('#button1');
const CLOSE = document.querySelector('.modal-project__content--close');

BUTTON1.addEventListener('click', () => {
    MODAL.classList.remove('hidden');
    MODAL.classList.add('visible');
});

// BUTTON1.addEventListener('click', openModal);

// let openModal = () => {
//     modal.classList.remove('hidden');
//     modal.classList.add('visible');
// }


CLOSE.addEventListener('click', () => {
    MODAL.classList.add('hidden');
    MODAL.classList.remove('visible');
});


/*----------------------- Pre loader ---------------------------*/

let loader = document.getElementById('loader');

window.addEventListener('load', () => {
    loader.style.display = 'none';
});


