/*

const btnA = document.getElementById('btnA');
btnA.addEventListener('click', () => {
    window.location.href = './about.html';
});*/

document.addEventListener('DOMContentLoaded', () => {
    const btnA = document.getElementById('btnA');
    btnA.addEventListener('click', () => {
        window.location.href = './about.html';
    });
});


/*const btnB = document.getElementById('btnB');
btnB.addEventListener('click', () => {
    window.location.href = './home.html';
});*/

document.addEventListener('DOMContentLoaded', () => {
    const btnB = document.getElementById('btnB');
    btnB.addEventListener('click', () => {
        window.location.href = './home.html';
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const btnC = document.getElementById('btnC');
    btnC.addEventListener('click', () => {
        window.location.href = './3thPage.html';
    });
});

function changeColor() {
    const paras = document.getElementsByClassName('para')
    for (const para of paras) {
        para.style.backgroundColor = 'lightblue'
    }
}

function resetColor() {
    const paras = document.getElementsByClassName('para')
    for (const para of paras) {
        para.style.backgroundColor = 'lightgray'
    }
}


function togg() {
    const tog = document.getElementById('tog')

    if (tog.style.display === 'none' || tog.style.display === '') {
        tog.style.display = 'block'
        tog.textContent = 'Turn it on!'

    } else {
        tog.style.display = 'none'
        tog.textContent = 'Turn it off!'

    }

}

const homeBtn = document.querySelector('.homeBtn')
const homeSp = document.querySelector('.homeSp')

function revealSp() {
    homeSp.classList.toggle('visible')
}

homeBtn.addEventListener('click', revealSp)
