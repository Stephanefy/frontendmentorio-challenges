// element selection
const tabsList = document.querySelector('.tabs--selector__list');
const faqQuestionsList = document.querySelectorAll('.faq--section__arrow');

const header = document.getElementsByTagName('header');
const bookmarkTab = document.querySelector('.bookmark--tab');
const intelligentSearchTab = document.querySelector('.intelligent--search__tab');
const shareBookmarsTab = document.querySelector('.share--bookmarks__tab');
const emailForm = document.querySelector('.footer--email__input--container');
const emailInput = document.querySelector('.footer--email__input');
const emailErrorSmall = document.querySelector('.email--error');
const hamburgerIcon = document.querySelector('.hamburger--icon');
const backdrop = document.querySelector('.backdrop');
const mobileMenu = document.querySelector('.mobile--menu');
const headerLogo = document.querySelector('.header--logo');

// transform selected HTMLCollection to array
const tabsSelectorsArray = Array.from(tabsList.children);
const faqQuestionsArray = Array.from(faqQuestionsList);


const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

//errors

const emailError = "Whoops make sure it's an email";
const emptyStringError = "Whoops it looks like you forgot to add your email";


// global state
let activeTab = 0;


console.log(faqQuestionsArray);

// tab selection listener
tabsSelectorsArray.forEach((element, index, arr) => {
    element.addEventListener('click', () => {

        let activeTab = index
        

        if (activeTab === 0) {
            bookmarkTab.classList.add('active');
            intelligentSearchTab.classList.remove('active');
            shareBookmarsTab.classList.remove('active');
            index === activeTab && element.classList.add('active');

            arr[1].classList.remove('active');
            arr[2].classList.remove('active');


        } else if(activeTab === 1) {
            intelligentSearchTab.classList.add('active');
            shareBookmarsTab.classList.remove('active');
            bookmarkTab.classList.remove('active');
            index === activeTab && element.classList.add('active');

            arr[0].classList.remove('active');
            arr[2].classList.remove('active');



        } else if(activeTab === 2) {
            shareBookmarsTab.classList.add('active');
            intelligentSearchTab.classList.remove('active');
            bookmarkTab.classList.remove('active');
            index === activeTab && element.classList.add('active');

            arr[0].classList.remove('active');
            arr[1].classList.remove('active');

        }



    })


    bookmarkTab.classList.add('active');
})


//faq questions listeners

faqQuestionsArray.forEach((btn, index, arr) => {
    btn.addEventListener("click", () => {


        console.log(btn)

        if (index === 0 ) {
            openFaqAnswer(arr[0])

            closeFaqAnswer(arr[1]);
            closeFaqAnswer(arr[2]);
            closeFaqAnswer(arr[3]);
        }
        if (index === 1 ) {
            openFaqAnswer(arr[1])

            closeFaqAnswer(arr[0]);
            closeFaqAnswer(arr[2]);
            closeFaqAnswer(arr[3]);
        }
        if (index === 2 ) {
            openFaqAnswer(arr[2])

            closeFaqAnswer(arr[0]);
            closeFaqAnswer(arr[1]);
            closeFaqAnswer(arr[3]);
        }
        if (index === 3 ) {
            openFaqAnswer(arr[3])

            closeFaqAnswer(arr[0]);
            closeFaqAnswer(arr[1]);
            closeFaqAnswer(arr[2]);
        }
       
    })
})


// hamburger button listener
hamburgerIcon.addEventListener('click', (e) => {


    e.target.children[0].classList.toggle('active');
    e.target.children[1].classList.toggle('active');
    e.target.children[2].classList.toggle('active');
    
    backdrop.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    headerLogo.classList.toggle('active');
    
    header[0].classList.toggle('mobile--menu__open')
})


// email validation 
emailInput.addEventListener('keyup', (e) => {

    console.log(emailRegex.test(e.target.value))
    console.log(e.target.value)
    
        if(!emailRegex.test(e.target.value)) {
            e.target.value !== "" && showError('email');
        } else {
            resetError()
        }
})

emailForm.addEventListener('submit', (e) => {
    e.preventDefault();


    if(e.target.value === undefined) {
        showError('empty')

        setTimeout(() => {
            resetError()
        }, 1500)
    }
})





// utils functions

function openFaqAnswer(element) {
    
    if(element.parentNode.parentNode.classList.contains('active')) { 
        closeFaqAnswer(element)
    } else {
        
        element.parentNode.parentNode.classList.add('active');
        
        element.firstElementChild.setAttribute('transform', 'rotate(180, -5, -5)');
        element.firstElementChild.firstChild.attributes.getNamedItem('stroke').value = 'hsl(0, 94%, 66%)';

    }


}

function closeFaqAnswer(element) {

    element.firstElementChild.setAttribute('transform', '');
    element.firstElementChild.firstChild.attributes.getNamedItem('stroke').value = '#5267DF';
    element.parentNode.parentNode.classList.remove('active');

}

function showError(errorType) {
    emailInput.classList.add('error');
    emailErrorSmall.style.display = 'block';

    errorType === "email" && (emailErrorSmall.textContent = emailError);
    errorType === "empty" && (emailErrorSmall.textContent = emptyStringError);
}


function resetError() {
    emailInput.classList.remove('error');
    emailInput.blur();
    emailErrorSmall.style.display = 'none';

}