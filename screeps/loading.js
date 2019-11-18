let loadingWords = document.getElementById('loading_words'), 
    loading = document.getElementById('loading');

setTimeout(function () {
    loadingWords.style.opacity = '1';
    loading.style.opacity = '1';
}, 500); 

function getRandomNum(min, max){
    return Math.floor((Math.random()*(max-min+1)+min)*10000);
}

// console.log(getRandomNum(0,2));

setTimeout(function() {
    loadingWords.style.opacity = '0';
    loading.style.opacity = '0';
}, getRandomNum(1,2));