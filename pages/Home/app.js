let menu = document.getElementById('menu')
let navigation = document.querySelector('.navSocial-container')
let menuClose = document.getElementById('menu-close')
let headerContainer = document.querySelector(".header-container")

menu.addEventListener("click", () => {
    navigation.classList.add("menu-active")
    headerContainer.classList.add("menu-active")
})

menuClose.addEventListener('click', () => {
    navigation.classList.remove('menu-active')
    headerContainer.classList.remove("menu-active")
})
