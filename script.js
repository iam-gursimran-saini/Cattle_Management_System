
function handleRegistrationButtonClick() {
    alert('Thank you for registering your cattle!');
}


function handleRegistrationFormSubmit(event) {
    event.preventDefault();

    const cattleId = document.getElementById('cattle-id').value;
    const calvingDate = document.getElementById('calving-date').value;
    const calfCount = document.getElementById('calf-count').value;

    
    if (cattleId.trim() === '' || calvingDate.trim() === '' || calfCount.trim() === '') {
        alert('Please fill in all the fields.');
    } else {
        alert(`Cattle ID: ${cattleId}\nCalving Date: ${calvingDate}\nCalf Count: ${calfCount}`);
    }
}


document.addEventListener('DOMContentLoaded', function () {

    const registerButton = document.querySelector('.cta-button');
    registerButton.addEventListener('click', handleRegistrationButtonClick);


    const registrationForm = document.getElementById('registration-form');
    registrationForm.addEventListener('submit', handleRegistrationFormSubmit);
});
