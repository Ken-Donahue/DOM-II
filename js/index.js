let get = (selector)=>{
    return document.querySelector(selector);
}


let body = get('.container.home');
let logo = get('.logo-heading');
let navLinks = document.querySelectorAll('a');
let image = document.querySelectorAll('img');


function getRandomColor(){
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}


function mouseOver(){
    logo.style.color = getRandomColor();
    logo.style.background = getRandomColor();
    logo.style.borderRadius = '5px';
}

function mouseOut(){
    logo.style.color = '#212529';
    logo.style.background = 'white';
}

logo.addEventListener('mouseover', mouseOver);
logo.addEventListener('mouseout', mouseOut);


function keyDown(){
    body.style.background = 'white';;
}

function keyUp(){
    body.style.color = '#212529';
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);


function scroll(){
    body.style.background = getRandomColor();
    body.style.color = getRandomColor();
}

body.addEventListener('wheel', scroll);


navLinks.forEach(a=>{
    a.addEventListener('mousedown', (e)=>{
        e.target.style.backgroundColor = getRandomColor();
        e.target.style.color = getRandomColor();
        
        setTimeout(()=>{
            e.target.style.backgroundColor = 'white';
            e.target.style.color = '#212529';
        }, 1500);
    });

    a.addEventListener('mouseup', (e)=>{
        e.target.style.backgroundColor = 'white';
        e.target.style.color = '#212529';
    });

    a.addEventListener('click', (e)=>{
        e.preventDefault();
    });
})


window.addEventListener('resize', ()=>{
    body.style.color = getRandomColor();
    body.style.background = getRandomColor();
});



image.forEach(img=>{
    img.addEventListener('dblclick', ()=>{
        if (img.style.transform === '') {
            img.style.transform = 'rotate(-180deg)';
        } 
        else {
            img.style.transform = '';
        }
    });
})
