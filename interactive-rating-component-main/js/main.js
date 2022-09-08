const rankChoice = document.getElementById('rank')
const allRanks = document.querySelectorAll('li')
const rankSubmitted = document.querySelector('.rank-submission')
// User selected rank between 1-5
let stars
 
rankChoice.addEventListener('click', (e) => {
    // Removes all styles on rank selections to avoid multiple ranks being selected at once.
    removeAllSelections()
    // If current target is an LI add selection styles and place li text value into stars
    if(e.target.tagName == 'LI') {
        e.target.classList.add('setChoice')
        stars = e.target.innerText
        rankSubmitted.innerText = `You selected ${stars} out of 5`
    }
})

// Removes all rank selection styles
const removeAllSelections = () => {
    allRanks.forEach(el => {
        el.classList.remove('setChoice')
    })
}

// Hides rank card and displays thank you on click of Submit button.
const submitButton = document.querySelector('.submit')
const thankYouCard = document.querySelector('.thankyou-card')
const ratingCard = document.querySelector('.rating-card')
submitButton.addEventListener('click', () => {
    ratingCard.style.display = 'none'
    thankYouCard.style.display = 'flex'
})