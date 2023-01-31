const bouton = document.querySelector('.bouton');
const menuBtn = document.querySelector('.menu-btn');
const menuOnglet = document.querySelector('.menu-onglet');
const ongletPremier = document.querySelector('.onglet1');
const menuVision = document.querySelector('.menu-vision');
const ongletDeuxieme = document.querySelector('.onglet2');
const menuPresta = document.querySelector('.presta');
const ongletTroisieme = document.querySelector('.onglet3');
const intro = document.querySelector('.intro');
const para = document.querySelector('.fondbox1');
const span = document.querySelector('.span1');
const mana = document.querySelector('.mana');
const spann = document.querySelector('.span3');
const manager = document.querySelector('.fondbox3');
const diri = document.querySelector('.diri');
const spannn = document.querySelector('.span2');
const dirigeant = document.querySelector('.fondbox2');
const poste = document.querySelector('.nvposte');
const spannnn = document.querySelector('.span4');
const nouveau = document.querySelector('.fondbox4');
const visioner = document.querySelector('.vision');
const spannnnn = document.querySelector('.span5');
const mavision = document.querySelector('.fondbox5');
const meme = document.querySelector('.methodo');
const spannnnnn = document.querySelector('.span6');
const boxSix = document.querySelector('.fondbox6');



let menuOpen = false; 
menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        bouton.classList.add('ouvert');
        menuOpen= true;
    } else{
        menuBtn.classList.remove('open');
        bouton.classList.remove('ouvert');
        menuOnglet.classList.remove('open');
        ongletPremier.classList.remove('open');
        menuVision.classList.remove('open');
        ongletDeuxieme.classList.remove('open');
        menuPresta.classList.remove('open');
        ongletTroisieme.classList.remove('open');
        menuOpen = false;
    }
})


let onglet = false;
menuOnglet.addEventListener('click',()=>{
    if(!onglet){
        menuOnglet.classList.add('open');
        ongletPremier.classList.add('open');
        onglet = true;
    }   else{
        menuOnglet.classList.remove('open');
        ongletPremier.classList.remove('open');
        onglet=false
    }
})


let vision =false;
menuVision.addEventListener('click',()=>{
    if(!vision){
        menuVision.classList.add('open');
        ongletDeuxieme.classList.add('open');
        vision = true;
    }   else{
        menuVision.classList.remove('open');
        ongletDeuxieme.classList.remove('open');
        vision = false;
    }
})


let prest =false;
menuPresta.addEventListener('click',()=>{
    if(!prest){
        menuPresta.classList.add('open');
        ongletTroisieme.classList.add('open');
        prest = true;
    }   else{
        menuPresta.classList.remove('open');
        ongletTroisieme.classList.remove('open');
        prest = false;
    }
})

let text = false;
intro.style.display='none';
para.addEventListener('click', () =>{
    if(!text){
        text=true;
        intro.style.display='block';
        span.style.display='none'
    }
    else{
        text=false;
        intro.style.display='none';
        span.style.display='block';
    }
})

let text1 = false;
mana.style.display='none';
manager.addEventListener('click', () =>{
    if(!text1){
        text1=true;
        mana.style.display='block';
        spann.style.display='none'
    }
    else{
        text1=false;
        mana.style.display='none';
        spann.style.display='block';
    }
})

let text2 = false;
diri.style.display='none';
dirigeant.addEventListener('click', () =>{
    if(!text2){
        text2=true;
        diri.style.display='block';
        spannn.style.display='none'
    }
    else{
        text2=false;
        diri.style.display='none';
        spannn.style.display='block';
    }
})

let text3 = false;
poste.style.display='none';
nouveau.addEventListener('click', () =>{
    if(!text3){
        text3=true;
        poste.style.display='block';
        spannnn.style.display='none'
    }
    else{
        text3=false;
        poste.style.display='none';
        spannnn.style.display='block';
    }
})

let text4 = false;
visioner.style.display='none';
mavision.addEventListener('click', () =>{
    if(!text4){
        text4=true;
        visioner.style.display='block';
        spannnnn.style.display='none'
    }
    else{
        text4=false;
        visioner.style.display='none';
        spannnnn.style.display='block';
    }
})



let text5 = false;
meme.style.display='none';
boxSix.addEventListener('click', () =>{
    if(!text5){
        text5=true;
      meme.style.display='block';  
        spannnnnn.style.display='none'
    }
    else{
        text5=false;
        meme.style.display='none';
        spannnnnn.style.display='block';
    }
})







