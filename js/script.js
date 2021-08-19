const proceedPay = document.querySelector('.card-btn');
const orderCard = document.querySelector('.order-card');
const cancelPay = document.querySelectorAll('.cancel-btn');
const cardProceed = document.querySelector('.card-proceed');

proceedPay.addEventListener('click', ()=> {
    orderCard.classList.toggle('proceed')
});
cancelPay.addEventListener('click', ()=> {
    orderCard.classList.toggle('cancel')
});


// function cancelButton () {
//     cancelPay.forEach(btn => btn.classList.toggle("cancel"))
// }
