const dateDisplay = document.querySelector('.dateDisplay');
const dateSubmitBtn = document.querySeldctor('.dateSubmitBtn');
const dateValue = document.querySelector('.dateValue').value;

dateSubmitBtn.addEventListener('click', () => {
    dateDisplay.innerHTML = dateValue;
})