"use strict";

// BURGER MENU

let menu = document.querySelector(".menu")
let menuItems = document.querySelectorAll(".menuItem")
let hamburger = document.querySelector(".hamburger")
let closeIcon = document.querySelector(".closeIcon")
let menuIcon = document.querySelector(".menuIcon")

function toggleMenu() {
    if(menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu")
        closeIcon.style.display = "none"
        menuIcon.style.display = "block"
        console.log("menu cerrado")
    } else {
        menu.classList.add("showMenu")
        closeIcon.style.display = "block"
        menuIcon.style.display = "none"
        console.log("menu abierto")
    }
}

hamburger.addEventListener("click", toggleMenu)


// ANIMACION TIPEO AUTOMATICO


let phrasesArr = ["Nutrición personalizada", "De la granja a la mesa", "Creado por profesionales"]
let phrase = document.querySelector('.changing-text')

let charIndex = 0
let phrasesIndex = 0


function delWriter(text, i, cb) {
    if (i >= 0) {
        phrase.innerHTML = text.substring(0, i--)
        setTimeout(function() {
            delWriter(text, i, cb)
        }, 40)
    } else if (typeof cb == 'function') {
        setTimeout(cb, 40)
    }
}


function typeWriter(text, i, cb) {
    if (i < text.length + 1) {
        phrase.innerHTML = text.substring(0, i++)
        setTimeout(function() {
            typeWriter(text, i++, cb)
        }, 100)
    } else if (i === text.length + 1) {
        setTimeout(function() {
            delWriter(text, i, cb)
        }, 1000)
    }
}


function startWriter(i) {
    if (typeof phrasesArr[i] == "undefined") {
        setTimeout(function () {
            startWriter(0)
        }, 1000)
    } else if (i < phrasesArr[i].length +1) {
        typeWriter(phrasesArr[i], 0, function() {
            startWriter(i + 1)
        })
    }
}


setTimeout(function() {
    startWriter(0)
}, 1000)



// ANIMACION DE LA BARRA DE NAVEGACION

let navegation = document.querySelector('.navegation')
let scrollUp = "scroll-up"
let scrollDown = "scroll-down"
let lastScroll = 0

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY
    if (currentScroll <= 0) {
        navegation.classList.remove(scrollUp)
        return
    }

    if (currentScroll > lastScroll && !navegation.classList.contains(scrollDown)) {
        navegation.classList.remove(scrollUp)
        navegation.classList.add(scrollDown)

    } else if (currentScroll < lastScroll && navegation.classList.contains(scrollDown)){
        navegation.classList.remove(scrollDown)
        navegation.classList.add(scrollUp)

    }

    lastScroll = currentScroll
})

// ARTICLE 1 GIF
let imgContainer = document.querySelector('.art1carrusel')
let img1 = document.querySelector('.article1img1')
let img2 = document.querySelector('.article1img2')
let img3 = document.querySelector('.article1img3')

// RESUELTO EN CSS


// EFECTO APARICION DE ELEMENTOS ART 2


let greenBg = document.querySelector('.green-background')
let arco1 = document.querySelector('.arco')
let arco2 = document.querySelector('.medio-circulo')
let arco2inside = document.querySelector('.medio-circulo-item')
let arco2efecto = document.querySelector('.medio-circulo-efecto')
let art2title = document.querySelector('.article2title')
let appear = "appear-effect"


let options = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.3
}


const loadItems = (entries, observer) => {
    
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add(appear)
        } else {
            entry.target.classList.remove(appear)
        }
    });
}

const goUp = (entries, observador) => {
    
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('goUp')
        } else {
            entry.target.classList.remove('goUp')
        }
    });
}

const moveRight = (entries, observar) => {
    
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('translateRight')
        } else {
            entry.target.classList.remove('translateRight')
        }
    });
}

const observer = new IntersectionObserver(loadItems, options)
const observador = new IntersectionObserver(goUp, options)
const observar = new IntersectionObserver(moveRight, options)

observer.observe(arco1)
observer.observe(arco2)
observer.observe(art2title)

observador.observe(arco1)

observar.observe(arco2efecto)

// EFECTO APARICION DE ELEMENTOS ART 3

let boxImages = document.querySelector('.box-images')
let art3text = document.querySelector('.trust-your-gut-text-container')

observer.observe(boxImages)
observer.observe(art3text)

// EFECTO APARICION DE ELEMENTOS ART 4

let text1 = document.querySelector('.toc-toc')
let text2 = document.querySelector('.quien')
let text3 = document.querySelector('.answer')

observer.observe(text1)
observer.observe(text2)
observer.observe(text3)


// EFECTO APARICION DE ELEMENTOS ART 5

let inviteOnoText = document.querySelector('.invite-ono-items')

const moverArriba = (entries, moverArribaObservar) => {
    
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('moverHaciaArriba')
        } else {
            entry.target.classList.remove('moverHaciaArriba')
        }
    });
}

const moverArribaObservar = new IntersectionObserver(moverArriba, options)

observer.observe(inviteOnoText)
moverArribaObservar.observe(inviteOnoText)


// EFECTO APARICION DE ELEMENTOS ART 6

let zeroWasteText = document.querySelector('.zero-waste-items')
moverArribaObservar.observe(zeroWasteText)




// CARRUSEL DE IMAGENES MENU DE HOY
// resuelto con css

let sliderContainer = document.querySelector('.art8carrusel')
let slider = document.querySelector('.carrusel-tracker')
let sliderItems = document.querySelectorAll('.carrusel-item')
let cartelitos = document.querySelectorAll('.cartelito')
let activo = "activo"


// CARTEL DE 'QUICK LOOK DENTRO DE LAS IMAGENES DEL MENU'



for(let cartelito of cartelitos) {
    cartelito.addEventListener("mouseenter", function() {
        cartelito.classList.add(activo)
    })
    cartelito.addEventListener("mouseleave", function() {
        cartelito.classList.remove(activo)
    })
}


