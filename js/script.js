// form-container and form completion 
const formContainer = document.querySelector('.form--container')
const formCompletion = document.querySelector('.form--completion__success')
const formCardNumberInputsContainer = document.getElementById('card--number__inputs')



// inputs
const form = document.getElementById('card-details__signup')
const cardHolderName = document.getElementById('cardholdername');
const firstDigitInput = document.getElementById('first-digit-input')
const secondDigitInput = document.getElementById('second-digit-input')
const thirdDigitInput = document.getElementById('third-digit-input')
const fourthDigitInput = document.getElementById('fourth-digit-input')
const monthInput = document.getElementById('month--input')
const yearInput = document.getElementById('year--input')
const cvcInput = document.getElementById('cvc__input')

// card display
const cardCardholderName = document.getElementById('card--cardholdername');
const firstDigits = document.getElementById('first-digits')
const secondDigits = document.getElementById('second-digits');
const thirdDigits = document.getElementById('third-digits');
const fourthDigits = document.getElementById('fourth-digits')
const monthDisplay = document.querySelector('.card--month__display');
const yearDisplay = document.querySelector('.card--year__display');
const cvcDisplay = document.querySelector('.card--back__cvc--display');


// errors
const expiryError = document.querySelector('.expiry__error');
const cvcError = document.querySelector('.cvc__error');


// event listeners


cardholdername.addEventListener('keyup', (e) => {
    cardCardholderName.innerText = e.target.value
})

firstDigitInput.addEventListener('keyup', (e) => {
    firstDigits.textContent = e.target.value
    
})

secondDigitInput.addEventListener('keyup', (e) => {
    secondDigits.textContent = e.target.value
    
})

thirdDigitInput.addEventListener('keyup', (e) => {
    thirdDigits.textContent = e.target.value
    
})

fourthDigitInput.addEventListener('keyup', (e) => {
    fourthDigits.textContent = e.target.value
})

monthInput.addEventListener('keyup', (e) => {

    console.log(e.target)

    if (isNumber(e.target.value)) {
        monthDisplay.textContent = e.target.value 
    }  else {
        displayError(e.target, 'Enter a valid month')
    }
        
    if (e.target.value > 12) {
        displayError(e.target, 'Enter a valid month')
    } 

    reset()

})

yearInput.addEventListener('keyup', (e) => {
    
    if (isNumber(e.target.value)) {
        yearDisplay.textContent = e.target.value
    }  else {
        displayError(e.target, 'Enter a valid year')
    }
        
    if (e.target.value > 12) {
        displayError(e.target, 'Enter a valid year')
    } 

    reset()
})

cvcInput.addEventListener('keyup', (e) => {

    if (isNumber(e.target.value)) {
        cvcDisplay.textContent = e.target.value
    }  else {
        displayError(e.target, 'Enter a valid cvc')
    }
    reset()

})

form.addEventListener('submit', submit)



function submit(e) {
    e.preventDefault();

    let isHolderNameValid = checkCardHolderName()
    let isCardNumberValid = checkCardNumberFields()
    let isExpiryDateValid = checkExpiryDate()
    let isCVCValid = checkCvc()

    let isFormValid = isHolderNameValid && isCardNumberValid && isExpiryDateValid && isCVCValid

    if (isFormValid) {
        formContainer.classList.remove('active')
        formCompletion.classList.add('active')
    }

    reset()

}



// Utility functions

function isNumber(value) {
    const re = /^\d*$/

    return re.test(value)
}



function isCorrectCardHolderName(value) {
    const re = /^\w*\s\w*$/

    return re.test(value)
}

function isRequired(value) {
    if (value === "") {
        return false;
    }
    return true;
}

function reset() {
    setTimeout(() => {
        const errors = document.querySelectorAll('small')
        const labels = document.querySelectorAll('label')
        const inputs = document.querySelectorAll('input')
        
        errors.forEach(e => e.innerText = "")
        labels.forEach(e => e.parentElement.classList.remove('error'))
        inputs.forEach(e => e.style.border = "")
        formCardNumberInputsContainer.style.border = ""

    }, 2000)
}

// errors checking

function displayError(formInput, message) {


    let error;

    const field = formInput.parentElement;

    field.classList.remove('success')
    field.classList.add('error')

    if (formInput.id === "first-digit-input") {
        formInput.parentElement.parentElement.style.border = "1px solid var(--error-color)"
    }

    if (formInput.id !== "first-digit-input") {
        formInput.style.border = "1px solid var(--error-color)"
    }

    if (formInput.id === "month--input" || formInput.id === "year--input") {
        error = expiryError
    } else if (formInput.id === "cvc__input") {
        error = cvcError
    } else {
        error = field.querySelector('small');
    }


    error.textContent = message
}

function displayErrorCardNumberFields(container, message) {
    container.style.border = "1px solid var(--error-color)"
    const error = container.nextElementSibling;
    error.textContent = message
}


// success display
function displaySuccess(formInput) {

    const field = formInput.parentElement;

    field.classList.remove('error')
    field.classList.add('success')


    const error = field.querySelector('small');
    if (error) error.textContent = ''
}

    // function for validating fields

function checkCardHolderName() {
    let isValid = false;

    const holdername = cardHolderName.value.trim()

    if(!isCorrectCardHolderName(holdername)) {
        displayError(cardHolderName, 'Enter your first name and last name');
    } else if (!isRequired(holdername)) {
        displayError(cardHolderName, 'cannot be blank')
    } else {
        displaySuccess(cardHolderName)
        isValid = true
    }

    return isValid
}

function checkCardNumberFields() {
    let isValid = false;


    const field1 = firstDigitInput.value
    const field2 = secondDigitInput.value
    const field3 = thirdDigitInput.value
    const field4 = fourthDigitInput.value

    const fieldValues = [field1, field2, field3, field4]


    for (let v of fieldValues) {

        if(!isNumber(v)) {
            displayErrorCardNumberFields(formCardNumberInputsContainer, 'Each field must be a number');
        } else if (!isRequired(v)) {
            displayErrorCardNumberFields(formCardNumberInputsContainer, 'cannot be blank')
        } else {
            displaySuccess(firstDigitInput)
            isValid = true
        }
    }


    return isValid
}

function checkExpiryDate() {
    let isValid = false;


    const monthValue = monthInput.value
    const yearValue = yearInput.value


    const fieldValues = [monthValue, yearValue]


    for (let v of fieldValues) {
        
        if (!isNumber(v)) {
            displayError(monthInput, 'Enter a valid month and year')
        }

        if (!isRequired(v)) {
            displayError(monthInput, 'cannot be blank')
        } else {
            displaySuccess(cvcInput)
            isValid = true
        }
    }


    return isValid
}

function checkCvc() {
    let isValid = false;


    const cvcValue = cvcInput.value


        if(!isNumber(cvcValue)) {
            displayError(cvcInput, 'Must be a number');
        } else if (!isRequired(cvcValue)) {
            displayError(cvcInput, 'cannot be blank')
        } else {
            displaySuccess(cvcInput)
            isValid = true
        
    }


    return isValid
}