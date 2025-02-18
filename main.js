const lamp = document.querySelector('.lamp');
const button = document.querySelector('.btn');
const background = document.querySelector('.main-bg');

// event listener on btn
button.addEventListener('click', function() {

    // img and btn change on click
    if(button.innerText.toLowerCase() == 'accendi'){
        lamp.src = "./img/yellow_lamp.png"; 
        button.innerText = 'Spegni';
        background.classList.remove('bg-dark');
        background.classList += " bg-light";
    } else {
        button.innerText = 'Accendi';
        lamp.src = "./img/white_lamp.png";
        background.classList.remove('bg-light');
        background.classList += " bg-dark";
    }
})



