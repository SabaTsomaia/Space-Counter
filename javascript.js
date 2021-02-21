const span = document.querySelector('span');
const button = document.querySelector('button');
let spaceCountl = 0;

document.body.addEventListener('keyup',function(e){
    e.preventDefault();

    if(e.code === 'Space'){
        spaceCountl++;
        span.textContent = spaceCountl;
    }
})
button.addEventListener('click',function(e){
    spaceCountl = 0;
    span.textContent = 0;
})