// Your code goes here
//Mouseover
const nav = document.querySelector('nav')
nav.addEventListener('mouseover', function(event) {
    event.target.style.color = 'dodgerblue';

    setTimeout(function() {
        event.target.style.color = '';  
    }, 500);
}, false);