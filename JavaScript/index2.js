let discountButton = document.getElementById('discount-button');
let message = document.getElementById('message');

function showMessage(){
    message.innerHTML = 'หมดเวลาสนุกแล้วซิ';
}

discountButton.addEventListener('click', showMessage);