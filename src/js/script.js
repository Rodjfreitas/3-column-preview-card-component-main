const suvButton = document.querySelector('.suvs-btn');
const luxButton = document.querySelector('.luxury-btn');
const sedButton = document.querySelector('.sedans-btn');
const backButton = document.querySelector('.back-btn');
const cardSedan = document.querySelector('.one');
const cardSuv = document.querySelector('.two');
const cardLux = document.querySelector('.three');

const Orange = document.querySelector('.infoA');
const Green = document.querySelector('.infoB');
const GreenIntense = document.querySelector('.infoC');


console.log(sedButton);

function sedanTransition (){  
    Orange.style.display = 'block';
    cardSuv.style.display = 'none';
    cardLux.style.display = 'none';
    sedButton.style.visibility = 'hidden';

} 

function suvTransition (){
    Green.style.display = 'block';
    cardSedan.style.display = 'none';
    cardLux.style.display = 'none';
    suvButton.style.visibility = 'hidden';
}

function luxTransition (){
    GreenIntense.style.display = 'block';
    cardSedan.style.display = 'none';
    cardSuv.style.display = 'none';
    luxButton.style.visibility = 'hidden';
}

function backTransition (){
  location.reload();
}



sedButton.addEventListener('click',sedanTransition);
suvButton.addEventListener('click',suvTransition);
luxButton.addEventListener('click',luxTransition);
backButton.addEventListener('click',backTransition);