const proceedPay = document.querySelectorAll('.card-btn');
const orderCard = document.querySelector('.order-card');
const cancelPay = document.querySelectorAll('.cancel-btn');

for(let i = 0; i < cancelPay.length; i++) {
    const cancel = cancelPay[i];
    cancel.onclick = function() {
        orderCard.classList.toggle('cancel');
    }
}
for(let i = 0; i < proceedPay.length; i++) {
    const next = proceedPay[i];
    next.onclick = function() {
        orderCard.classList.toggle('proceed');
    }
}