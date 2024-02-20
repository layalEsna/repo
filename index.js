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
    const btnC = document.getElementById('btnB');
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

function changeColor(){
    const paras = document.getElementsByClassName('para')
    for(const para of paras){
        para.style.backgroundColor = 'lightblue'
    }
}

function resetColor(){
    const paras = document.getElementsByClassName('para')
    for(const para of paras){
        para.style.backgroundColor = 'darkslateblue'
    }
}