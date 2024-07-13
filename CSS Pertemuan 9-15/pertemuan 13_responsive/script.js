// togle class active
const navbar1 = document.querySelector('.navbar-1');

document.querySelector('#menu').onclick = () => {
    navbar1.classList.toggle('active');
};