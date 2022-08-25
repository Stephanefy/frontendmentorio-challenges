//
//  dom element variables
//

const hamburgerBtn = document.querySelector('.hamburger--icon')
const menu = document.querySelector('.menu')
const backdrop = document.querySelector('.backdrop')
const menuInnerListFeatures = document.querySelector('.menu--inner-list-features')
const menuInnerListCompany = document.querySelector('.menu--inner-list-company')

const navInnerListFeatures = document.querySelector('.nav--inner-list__features')
const navInnerListCompany = document.querySelector('.nav--inner-list__company')


const dropDownArrowUp = document.querySelector('.arrow--up')
const dropDownArrowDown = document.querySelector('.arrow--down')
// Open menu arrows mobile screen 
const featuresMenu = document.querySelector('.menu--features')
const CompanyMenu = document.querySelector('.menu--company')

// Open menu arrow navbar on desktop screen

const featuresNav = document.querySelector('.nav--features')
const companyNav = document.querySelector('.nav--company')

const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')


//
// event-listeners
//

    // display slide menu
hamburgerBtn.addEventListener('click', (e) => {


    if (menu.classList.contains('active')) {

        line1.classList.remove('active')
        line2.classList.remove('active')
        line3.classList.remove('active')

        menu.classList.remove('active')
        backdrop.classList.remove('show')
    } else {
        menu.classList.add('active')
        backdrop.classList.add('show')
        line1.classList.add('active')
        line2.classList.add('active')
        line3.classList.add('active')
    }
})

    // display dropdown menus on mobile

featuresMenu.addEventListener('click', function(e) {
    toggleMenu(menuInnerListFeatures)
})
CompanyMenu.addEventListener('click', function(e) {
    toggleMenu(menuInnerListCompany)
})


    // display dropdown menus on desktop

featuresNav.addEventListener('click', function(e) {
    toggleMenu(navInnerListFeatures)
})
companyNav.addEventListener('click', function(e) {
    toggleMenu(navInnerListCompany)
})









//
// utility functions
//

function toggleMenu(element) {



    element.parentNode.children[0].style.color = "#000"

    if (!element.classList.contains('expanded')) {
        element.classList.remove('collapsed')
        element.classList.add('expanded')
        element.parentNode.children[2].classList.add('active')
        element.parentNode.children[1].style.display = 'none'
    } else {
        element.classList.add('collapsed')
        element.classList.remove('expanded')
        element.parentNode.children[0].style.color = ""
        element.parentNode.children[2].classList.remove('active')
        element.parentNode.children[1].style.display = 'inline-block'

    }
}