"use strict";

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


// ANIMACION TIPEO AUTOMATICO


let phrasesArr = ["Nutrición personalizada", "De la granja a la mesa", "Creado por profesionales"]
let phrase = document.querySelector('.changing-text')

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
    threshold: 0
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

// CARTEL 'QUICK LOOK' DENTRO DE LAS IMAGENES DEL MENU

for(let cartelito of cartelitos) {
    cartelito.addEventListener("mouseenter", function() {
        cartelito.classList.add(activo)
    })
    cartelito.addEventListener("mouseleave", function() {
        cartelito.classList.remove(activo)
    })
}


// CARRUSEL PRINCIPAL

let carruselTracker = document.querySelector('.carrusel-tracker')
let carruselPrincipal = Array.from(carruselTracker.children)
let lastItem = carruselPrincipal[carruselPrincipal.length - 1]
let carruselItem = document.querySelectorAll('.carrusel-item')
let arrayDeItems = Array.from(carruselItem)
// console.log(arrayDeItems)



// function moverItem() {
//     let firstItem = carruselPrincipal.shift()
//     firstItem.style.opacity = "0"
//     carruselPrincipal.push(firstItem)
//     carruselTracker.appendChild(firstItem)
//     function agregarOpacity() {
//         firstItem.style.opacity = "1"
//         firstItem.style.transition = ".2s"
//     }
//     setTimeout(agregarOpacity, 200)
// }

// setInterval(moverItem, 4000)




// VENTANA MODAL (POPUP)

const closeButton = document.querySelector('.close')
const ventanaModal = document.querySelector('.ventanaModal')
const active = 'modal-activo'

const modalItems = document.querySelector('.modal-items')
let sliderSection = document.querySelectorAll('.modal-item')
let sliderSectionLast = sliderSection[sliderSection.length - 1]

let verMas = document.querySelectorAll('.verMas')

let itemsArray = Array.from(modalItems.children)

// let lamb = document.querySelector('.lamb')
// let vegetales = document.querySelector('.vegetales')
// let waffle = document.querySelector('.waffles')
// let yogurt = document.querySelector('.yogurt')
// let falafel = document.querySelector('.falafel')

let next = document.querySelector('.click1')
let prev = document.querySelector('.click2')

let productos = [
    {
        id: 1,
        src: "modal1.jpg",
        title: "Cordero de laboratorio y wraps de rabano y sandía con crema de ajo y finas hierbas. Servido con farro de almendras tostado.",
        description: "Lamb and radishes come together with Mediterranean flavors and bright lemon and garlic yogurt sauce, while parsley and mint complement the hint of bitterness from the radicchio and bring fresh flavors to the chewy and crunchy almond farro.",
        benefits: {
            "Probióticos": "Yogurt",
            "Antioxidantes":  ["Parsley", "Almendras"],
            "Proteína basada en plantas": "Farro"
        }
    },
    {
        id: 2,
        src: "modal2.jpg",
        title: "Vegetales asados con quinoa y cilantro.",
        description: "Roasted kabocha squash, golden and red beets, and broccolini make this sprouted quinoa mix bright and beautiful, and fragrant with warm spices. Sprouted chickpeas add bite and protein and a cilantro finishes the dish with a hit of fresh, green flavor.",
        benefits: {
            "Anti-inflamatorio": "Beets",
            "Antioxidantes":  "Coriander",
            "Immuomodulation": "Cumin",
            "Proteína basada en plantas": "Quinoa"
        }
    },
    {
        id: 3,
        src: "modal3.jpg",
        title: "Waffle de harina de grillo con frutilla y kombucha.",
        description: "This granola is savory and spicy, chewy with jackfruit and crunchy with pumpkin seeds and walnuts. Put over Icelandic skyr, it’s full of healthy protein, and when topped with turmeric and arugula, takes on clean, refreshing flavors.",
        benefits: {
            "Anti-inflamatorio": "Turmeric",
            "Antioxidantes":  "Coriander",
            "Polyphenols": "Millet",
            "Probiotics": "Yogurt"
        }
    },
    {
        id: 4,
        src: "modal4.jpg",
        title: "Yogurt islándico con granola y semillas de girasol y nueces.",
        description: "This granola is savory and spicy, chewy with jackfruit and crunchy with pumpkin seeds and walnuts. Put over Icelandic skyr, it’s full of healthy protein, and when topped with turmeric and arugula, takes on clean, refreshing flavors.",
        benefits: {
            "Anti-inflamatorio": "Turmeric",
            "Antioxidantes":  "Coriander",
            "Polyphenols": "Millet",
            "Probiotics": "Yogurt"
        }
    },
    {
        id: 5,
        src: "modal5.jpg",
        title: "Falafel verde con brócoli y tabbouleh.",
        description: "You’ve never seen falafel as green as this – it’s the spirulina, which is not just beautiful, but also delicious. It’s served in a pita that’s made of high-protein cricket flour, with a side of tabbouleh made with broccoli, parsley, grated parsley root, and pomegranate seeds.",
        benefits: {
            "Anti-inflamatorio": "Spirulina",
            "Antioxidantes":  ["Parsley", "Pomegranate", "Brocoli"],
            "Proteina": "Harina de grillo",
            "Plant waste": "Parsley Root"
        }
    },
    {
        id: 1,
        src: "modal1.jpg",
        title: "Cordero de laboratorio y wraps de rabano y sandía con crema de ajo y finas hierbas. Servido con farro de almendras tostado.",
        description: "Lamb and radishes come together with Mediterranean flavors and bright lemon and garlic yogurt sauce, while parsley and mint complement the hint of bitterness from the radicchio and bring fresh flavors to the chewy and crunchy almond farro.",
        benefits: {
            "Probióticos": "Yogurt",
            "Antioxidantes":  ["Parsley", "Almendras"],
            "Proteína basada en plantas": "Farro"
        }
    },
    {
        id: 2,
        src: "modal2.jpg",
        title: "Vegetales asados con quinoa y cilantro.",
        description: "Roasted kabocha squash, golden and red beets, and broccolini make this sprouted quinoa mix bright and beautiful, and fragrant with warm spices. Sprouted chickpeas add bite and protein and a cilantro finishes the dish with a hit of fresh, green flavor.",
        benefits: {
            "Anti-inflamatorio": "Beets",
            "Antioxidantes":  "Coriander",
            "Immuomodulation": "Cumin",
            "Proteína basada en plantas": "Quinoa"
        }
    },
    {
        id: 3,
        src: "modal3.jpg",
        title: "Waffle de harina de grillo con frutilla y kombucha.",
        description: "This granola is savory and spicy, chewy with jackfruit and crunchy with pumpkin seeds and walnuts. Put over Icelandic skyr, it’s full of healthy protein, and when topped with turmeric and arugula, takes on clean, refreshing flavors.",
        benefits: {
            "Anti-inflamatorio": "Turmeric",
            "Antioxidantes":  "Coriander",
            "Polyphenols": "Millet",
            "Probiotics": "Yogurt"
        }
    },
    {
        id: 4,
        src: "modal4.jpg",
        title: "Yogurt islándico con granola y semillas de girasol y nueces.",
        description: "This granola is savory and spicy, chewy with jackfruit and crunchy with pumpkin seeds and walnuts. Put over Icelandic skyr, it’s full of healthy protein, and when topped with turmeric and arugula, takes on clean, refreshing flavors.",
        benefits: {
            "Anti-inflamatorio": "Turmeric",
            "Antioxidantes":  "Coriander",
            "Polyphenols": "Millet",
            "Probiotics": "Yogurt"
        }
    },
    {
        id: 5,
        src: "modal5.jpg",
        title: "Falafel verde con brócoli y tabbouleh.",
        description: "You’ve never seen falafel as green as this – it’s the spirulina, which is not just beautiful, but also delicious. It’s served in a pita that’s made of high-protein cricket flour, with a side of tabbouleh made with broccoli, parsley, grated parsley root, and pomegranate seeds.",
        benefits: {
            "Anti-inflamatorio": "Spirulina",
            "Antioxidantes":  ["Parsley", "Pomegranate", "Brocoli"],
            "Proteina": "Harina de grillo",
            "Plant waste": "Parsley Root"
        }
    },

]

// for(let i = 0; i < productos.length; i++) {
//     console.log(productos[i].id)
//     console.log(productos[i].src)
//     console.log(productos[i].benefits["Antioxidantes"])



// }

let itemIndex = 0

arrayDeItems.forEach(boton => {
    boton.addEventListener('click', (event) => {
        navegation.style.display = "none"
        
        ventanaModal.classList.add(active)
        document.body.style.overflow = "hidden"

        itemIndex = carruselPrincipal.indexOf(event.currentTarget)
        console.log(itemIndex)
        

        modalItems.innerHTML = `<div class="modal-item" id="modal-item">
                            <div class="modal-imagen">
                                <img id="modal-lamb" src="${productos.at(itemIndex).src}" alt="">
                            </div>
                            <div class="modal-espacio"></div>
                            <div class="modal-texto">
                                <p class="modal-title">${productos.at(itemIndex).title}</p>
                                <p class="modal-description">${productos.at(itemIndex).description}</p>
                                <div class="modal-texto_beneficios">
                                    <h4>BENEFICIOS</h4>
                                    <div class="modal-texto_beneficios-container">
                                        <div class="beneficios-item">
                                            <p>Probióticos</p>
                                            <div class="beneficios-items">
                                                <div class="beneficios-item-img">
                                                    <img id="cuchara" src="benefits-yogurt.png" alt="">
                                                    <p>Yogurt</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="beneficios-item">
                                            <p>Antioxidantes</p>
                                            <div class="beneficios-items">
                                                <div class="beneficios-item-img">
                                                    <img src="benefits-parsley.png" alt="">
                                                    <p>Parsley</p>
                                                </div>
                                                <div class="beneficios-item-img">
                                                    <img src="benefits-almonds.png" alt="">
                                                    <p>Almendras</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="beneficios-item">
                                            <p>Proteína basada en plantas</p>
                                            <div class="beneficios-items">
                                                <div class="beneficios-item-img">
                                                    <img src="benefits-lamb-farro.png" alt="">
                                                    <p>Farro</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
    })
})

// verMas.forEach(button => {
//     button.addEventListener('click', (evt) => {
//         ventanaModal.classList.add(active)
//         document.body.style.overflow = "hidden"

//         itemIndex = carruselPrincipal.indexOf(evt.target)
//         console.log(itemIndex)


//         let selected = evt.target.id
//         console.log(selected)

        
//     })

// })

//modalItems.insertAdjacentElement('afterbegin', sliderSectionLast)

closeButton.addEventListener('click', () => {
    navegation.style.display = "flex"
    ventanaModal.classList.remove(active)
    document.body.style.overflow = "visible"
})

function siguiente() {
    itemIndex--
    modalItems.innerHTML = `<div class="modal-item" id="modal-item">
                            <div class="modal-imagen">
                                <img id="modal-lamb" src="${productos.at(itemIndex).src}" alt="">
                            </div>
                            <div class="modal-espacio"></div>
                            <div class="modal-texto">
                                <p class="modal-title">${productos.at(itemIndex).title}</p>
                                <p class="modal-description">${productos.at(itemIndex).description}</p>
                                <div class="modal-texto_beneficios">
                                    <h4>BENEFICIOS</h4>
                                    <div class="modal-texto_beneficios-container">
                                        <div class="beneficios-item">
                                            <p>Probióticos</p>
                                            <div class="beneficios-items">
                                                <div class="beneficios-item-img">
                                                    <img id="cuchara" src="benefits-yogurt.png" alt="">
                                                    <p>Yogurt</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="beneficios-item">
                                            <p>Antioxidantes</p>
                                            <div class="beneficios-items">
                                                <div class="beneficios-item-img">
                                                    <img src="benefits-parsley.png" alt="">
                                                    <p>Parsley</p>
                                                </div>
                                                <div class="beneficios-item-img">
                                                    <img src="benefits-almonds.png" alt="">
                                                    <p>Almendras</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="beneficios-item">
                                            <p>Proteína basada en plantas</p>
                                            <div class="beneficios-items">
                                                <div class="beneficios-item-img">
                                                    <img src="benefits-lamb-farro.png" alt="">
                                                    <p>Farro</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
}

function anterior() {
    itemIndex++
    modalItems.innerHTML = `<div class="modal-item" id="modal-item">
                            <div class="modal-imagen">
                                <img id="modal-lamb" src="${productos.at(itemIndex).src}" alt="">
                            </div>
                            <div class="modal-espacio"></div>
                            <div class="modal-texto">
                                <p class="modal-title">${productos.at(itemIndex).title}</p>
                                <p class="modal-description">${productos.at(itemIndex).description}</p>
                                <div class="modal-texto_beneficios">
                                    <h4>BENEFICIOS</h4>
                                    <div class="modal-texto_beneficios-container">
                                        <div class="beneficios-item">
                                            <p>Probióticos</p>
                                            <div class="beneficios-items">
                                                <div class="beneficios-item-img">
                                                    <img id="cuchara" src="benefits-yogurt.png" alt="">
                                                    <p>Yogurt</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="beneficios-item">
                                            <p>Antioxidantes</p>
                                            <div class="beneficios-items">
                                                <div class="beneficios-item-img">
                                                    <img src="benefits-parsley.png" alt="">
                                                    <p>Parsley</p>
                                                </div>
                                                <div class="beneficios-item-img">
                                                    <img src="benefits-almonds.png" alt="">
                                                    <p>Almendras</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="beneficios-item">
                                            <p>Proteína basada en plantas</p>
                                            <div class="beneficios-items">
                                                <div class="beneficios-item-img">
                                                    <img src="benefits-lamb-farro.png" alt="">
                                                    <p>Farro</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
    
}

next.addEventListener('click', siguiente)
prev.addEventListener('click', anterior)

closeButton.addEventListener('mouseenter', function() {
    closeButton.classList.add("rotateenter")
    closeButton.classList.remove("rotateleave")
})

closeButton.addEventListener('mouseleave', function() {
    closeButton.classList.add("rotateleave")
    closeButton.classList.remove("rotateenter")
})

next.addEventListener('mouseenter', function() {
    next.style.transform = "translateX(10px) 1s"
})