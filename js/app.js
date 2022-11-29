const rateBtn = document.querySelectorAll('.btn-rating')

const rateBtns = Array.from(rateBtn);

const submitButton = document.querySelector('.submit')

const returnButton = document.querySelector('.go-back')

const thankYou = document.querySelectorAll('section')

const rating = document.querySelector('.selected-rating')

// Click event to select rating

rateBtns.forEach((rate) => {
    rate.addEventListener('click', (e) => {
        for(let i = 0; i < rateBtns.length; i++){
                rateBtns[i].classList.remove("rate-selected")
            }
            

        rate.classList.add("rate-selected")

        rating.innerText = rate.innerHTML;


    });
});



// Submit event

submitButton.addEventListener('click', (e) => {

    if (rating.innerText === ''){
        clearAlert()
        showError('Please select a rating')
        e.preventDefault();
    }

    else{
    // Hide rating state
    document.getElementById('rating-state').style.display = 'none';

    // Show thank you message
    document.getElementById('thank-you').style.display = 'block'
    e.preventDefault();
    }


})

returnButton.addEventListener('click', (e) => {


    // show rating state
    document.getElementById('rating-state').style.display = 'block';

    // hide thank you message
    document.getElementById('thank-you').style.display = 'none'
    e.preventDefault();



})

// show error
function showError(error){
    // Create a div
    const errorDiv = document.createElement('div')

    // get elements
    const container = document.querySelector('.container')
    const iconStar = document.querySelector('.icon-star')

    // add styles
    errorDiv.className = 'error text-center';
    errorDiv.style.color = '#fff';
    errorDiv.style.background = '#EF5350';
    errorDiv.style.borderRadius = '1em';
    errorDiv.style.padding = '1em';

    // create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // insert error above heading
    container.insertBefore(errorDiv, iconStar)

    // clear error after 3 seconds
    setTimeout(() => errorDiv.remove(), 3000)
}

// Clear alert message to prevent it from appearing twice

function clearAlert() {
    const currentAlert = document.querySelector('.error');

    if(currentAlert) {
        currentAlert.remove();
    }
}