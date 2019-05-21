// Your code goes here
//Mouseover
const nav = document.querySelector('nav')
nav.addEventListener('mouseover', function(event) {
    event.target.style.color = 'dodgerblue';

    setTimeout(function() {
        event.target.style.color = '';  
    }, 500);
}, false);


//Mouseup
img2.addEventListener('mouseup', function(event) {
    event.target.style.opacity = '0'; 
});

//Keydown
const name = document.querySelector('.first-name')
name.addEventListener('keydown',function(event) {
    console.log(`Key pushed:`, event.code)
});

//Focus
const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'yellow';    
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';    
});

//Click
const button1 = document.querySelector('#btn1');
button1.addEventListener('click', function(event) {
    event.target.style.color = 'orange';
});

//Dblclick
const button2 = document.querySelector('#btn2');
button2.addEventListener('dblclick', function(event) {
    event.target.style.background = 'orange';
});

//MouseEnter
const img1 = document.querySelector('#img1');
img1.addEventListener('mouseenter', function(event) {
    event.target.style.border = '5px dashed orange';
});

//Resize
window.addEventListener('resize', (event) => {
    console.log(event);
    alert('I got my eye on you!');
});

//Mouseleave
img3.addEventListener('mouseleave', function(event) {
    event.target.style.border = '8px solid teal';
});

//Scroll
window.addEventListener('scroll', function(event) {
    console.log('Keep scrolling!');
    img2.style.transform = 'rotate(180deg)';
});

//Preventdefault
const navLinks = document.querySelectorAll('nav-link');
navLinks.forEach((link) => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
    })
})