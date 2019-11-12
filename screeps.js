let hello = document.querySelector('p'),
    home = document.getElementById('home'),
    loading = document.getElementById('loading');

setTimeout(function () {
    hello.style.opacity = '1';
    loading.style.opacity = '1';
}, 500);    
 
function getRandomNum(min, max){
    return Math.floor((Math.random()*(max-min+1)+min)*10000);
}

setTimeout(function () {
    hello.style.opacity = '0';
    loading.style.opacity = '0';
}, getRandomNum(1,5));

home.addEventListener('click', function(e) {
    e.preventDefault();
    location.reload();
});
