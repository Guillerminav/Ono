"use strict"

// BURGER MENU

let menu = document.querySelector(".menu")
let menuItems = document.querySelectorAll(".menuItem")
let hamburger = document.querySelector(".hamburger")
let closeIcon = document.querySelector(".closeIcon")
let menuIcon = document.querySelector(".menuIcon")

closeIcon.style.display = "none"

function toggleMenu() {
    if(menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu")
        closeIcon.style.display = "none"
        menuIcon.style.display = "block"
    } else {
        menu.classList.add("showMenu")
        closeIcon.style.display = "block"
        menuIcon.style.display = "none"
    }
}

hamburger.addEventListener("click", toggleMenu)


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

