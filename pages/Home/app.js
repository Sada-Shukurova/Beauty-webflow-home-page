const menu = document.getElementById('menu')
const navigation = document.querySelector('.nav-container')
const menuClose = document.getElementById('menu-close')
const dropdown = document.querySelector('.dropdown')


menu.addEventListener("click", () => {
    navigation.classList.add("menu-active");
    menu.style.visibility = 'hidden';
    document.body.classList.add('body-scroll-hidden')
})

menuClose.addEventListener('click', () => {
    navigation.classList.remove('menu-active')
    document.body.classList.remove('body-scroll-hidden')
    menu.style.visibility = 'visible'
})

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle("dropdown-open")
})

// let header = document.querySelector("header")
// window.addEventListener('scroll',
//     function handleScroll() {
//         if (window.scrollY < 40) {
//             navigation.style.top = '8%'
//             header.classList.remove("fixed")
//         } else if (window.scrollY > 40) {
//             navigation.style.top = '10%'
//             header.classList.add("fixed")
//         } if (window.scrollY > 70) {
//             navigation.style.top = '15%'
//         }

//     })
