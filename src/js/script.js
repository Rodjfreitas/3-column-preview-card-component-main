const sedanBtn = document.querySelector('.sedans-btn');
const suvsBtn = document.querySelector('.suvs-btn');
const luxuryBtn = document.querySelector('.luxury-btn');
const backBtn = document.querySelector('.back-btn');
const screenPage = document.querySelector('#Screen');
const textOrange = document.querySelector('.one');
const textGreen = document.querySelector('.two');
const textGreenIntense = document.querySelector('.three');
const infoSedan = document.querySelector('.infoSedan');
const infoSuvs = document.querySelector('.infoSuvs');
const textAlternative = document.querySelector('.Alternative');
const textAlternative2 = document.querySelector('.Alternative2');




function clickButton(){
  sedanBtn.style.display = 'none' 
  textGreen.style.display = 'none';
  textGreenIntense.style.display = 'none';
  textAlternative.style.display = 'block';
  infoSedan.style.display = 'block';
  infoSedan.style.grid-area == B;
}

function clickButton2(){
  suvsBtn.style.display = 'none'
  textOrange.style.display = 'none'
  textGreenIntense.style.display = 'none'; 
   
  textAlternative2.style.display = 'block';
  infoSuvs.style.display = 'block';
  infoSuvs.style.grid-area == B;
}

function clickBackButton(){
  /*location.reload();*/
  sedanBtn.style.display = 'block'
  suvsBtn.style.display = 'block'
  luxuryBtn.style.display = 'block'
  textGreen.style.display = 'block';
  textGreenIntense.style.display = 'block';
  infoSedan.style.display = 'none';
  textAlternative.style.display = 'none';
  textAlternative2.style.display = 'none';
}


sedanBtn.addEventListener('click',clickButton);
suvsBtn.addEventListener('click',clickButton2);
luxuryBtn.addEventListener('click',clickButton);
backBtn.addEventListener('click',clickBackButton);

