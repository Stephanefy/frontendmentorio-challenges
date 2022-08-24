const hamburgerBtn = document.querySelector('.hamburger--icon');
const menu = document.querySelector('.menu')
const backdrop = document.querySelector('.backdrop')
const innerList = document.querySelector('.inner-list')

const featureArrow = document.querySelector('#feature-arrow')
const companyArrow = document.querySelector('.company-arrow')

const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')



// event-listeners
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

    // display dropdown menus

featureArrow.addEventListener('click', () => {

    if (!innerList.classList.contains('expanded')) {
        innerList.classList.remove('collapsed')
        innerList.classList.add('expanded')
    } else {
        innerList.classList.add('collapsed')
        innerList.classList.remove('expanded')
    }
})

