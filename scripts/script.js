//
//  dom element variables
//

const hamburgerBtn = document.querySelector('.hamburger--icon')
const menu = document.querySelector('.menu')
const backdrop = document.querySelector('.backdrop')
const innerList = document.querySelector('.inner-list')
const navInnerListFeatures = document.querySelector('.nav--inner-list__features')
const navInnerListCompany = document.querySelector('.nav--inner-list__company')

// Open menu arrows mobile screen 
const featureArrow = document.querySelector('#feature-arrow')
const companyArrow = document.querySelector('.company-arrow')

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

featureArrow.addEventListener('click', function(e) {
    toggleMenu(innerList)
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

    console.log(element)

    if (!element.classList.contains('expanded')) {
        element.classList.remove('collapsed')
        element.classList.add('expanded')
    } else {
        element.classList.add('collapsed')
        element.classList.remove('expanded')
    }
}