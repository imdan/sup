let gotIt = document.getElementById('got_it');

setTimeout(function(){
    gotIt.style.opacity = '1';
}, 2000);

setTimeout(function() {
    gotIt.style.opacity = '0';
}, 5000);

setTimeout(function() {
    location.assign('../index.html');
},6650);