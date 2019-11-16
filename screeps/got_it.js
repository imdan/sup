let gotIt = document.getElementById('got_it');

setTimeout(function(){
    gotIt.style.opacity = '1';
}, 3000);

setTimeout(function() {
    gotIt.style.opacity = '0';
}, 6000);