// menu
const navbar1 = document.querySelector('.navbar-1');
const menuButton = document.querySelector('#menu');

menuButton.onclick = (e) => {
    e.preventDefault();
    navbar1.classList.toggle('active');
};

// menutup menu dimana saja
document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !navbar1.contains(event.target)) {
        navbar1.classList.remove('active');
    }
});

// search
const filter = document.getElementById('search');
const items = document.querySelectorAll('.resep-card p');

filter.addEventListener("input", (e) => fillterData(e.target.value.toLowerCase()));

function fillterData(search) {
    items.forEach((item) => {
        const card = item.closest('.resep-card');
        if (item.innerText.toLowerCase().includes(search)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
};
