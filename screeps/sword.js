let heavyWords = document.getElementById('heavy_words'),
    issa = document.getElementById('issa');

setTimeout(function () {
    heavyWords.style.opacity = '1';
}, 500);    

setTimeout(function() {
    issa.style.opacity = '1';
}, 4000);

setTimeout(function() {
    issa.style.opacity = '0';
}, 5000);
