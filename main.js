const lamp = document.querySelector('.lamp');
const button = document.querySelector('.btn');

// event listener on btn
button.addEventListener('click', function() {

    // img and btn change on click
    if(button.innerText == 'Accendi'){
        lamp.src = "./img/yellow_lamp.png"; 
        button.innerText = 'Spegni';
    } else {
        button.innerText = 'Accendi';
        lamp.src = "./img/white_lamp.png";
    }
})



