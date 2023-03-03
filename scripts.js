// MENU RESPONSIVO

let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})

// ANIMAÇÃO 

const target = document.querySelectorAll('[data-anime]')
const animatioClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3);
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animatioClass);
        } else {
            element.classList.remove(animatioClass);
        }
    })
}

animeScroll();

if (target.length) {
    window.addEventListener('scroll', function () {
        animeScroll();
    });
}


