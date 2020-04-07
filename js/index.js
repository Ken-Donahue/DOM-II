let get = (selector)=>{
    return document.querySelector(selector);
}

let body = get('body');
let logo = get('.logo-heading');
let navLinks = document.querySelectorAll('a');

function mouseOver(){
    logo.style.color = 'orangered';
}

function mouseOut(){
    logo.style.color = '#212529';
}

logo.addEventListener('mouseover', mouseOver);
logo.addEventListener('mouseout', mouseOut);

function keyDown(){
    body.style.backgroundColor = 'skyblue';
}

function keyUp(){
    body.style.backgroundColor = 'white';
}

body.addEventListener('keydown', keyDown);
body.addEventListener('keyup', keyUp);

function scroll(){
    body.style.backgroundColor = 'skyblue';

    setTimeout(()=>{
        body.style.backgroundColor = 'white';
    }, 1000);
}

body.addEventListener('wheel', scroll);

navLinks.forEach(a=>{
    a.addEventListener('mousedown', (e)=>{
        e.target.style.backgroundColor = 'skyblue';
        e.target.style.color = 'white';
    });

    a.addEventListener('mouseup', (e)=>{
        e.target.style.backgroundColor = 'white';
        e.target.style.color = '#212529';
    });
})

// function mouseDown(){
//     navLinks.style.backgroundColor = 'skyblue';
//     navLinks.style.color = 'white';
// }

// function mouseUp(){
//     navLinks.style.backgroundColor = 'white';
//     navLinks.style.color = '#212529';
// }

// navLinks.addEventListener('mousedown', mouseDown);
// navLinks.addEventListener('mouseup', mouseUp);