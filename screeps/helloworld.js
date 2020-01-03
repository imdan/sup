// hello world

let hello = document.getElementById('hello'),
    i = 0;

// setTimeout(function () {
//     hello.style.opacity = '1';
// }, 500); 


const words = ["hello world", "hola mundo", "こんにちは世界", "bonjour le monde", "नमस्ते दुनिया", "hallo welt", "你好，世界", "pozdrav svijete", "dia duit ar domhan", "witaj świecie", "hej världen", "ciao mondo"];

function translate() {
    setTimeout(function () {
        hello.style.opacity = '0';
    }, 3000);
    
    setTimeout(function () {
        if (i < words.length - 1) {
            i += 1;
        } else {
            i = 0;
        }

        hello.innerHTML = words[i];
        hello.style.opacity = '1';

        translate();
    }, 5500);
    
}

hello.addEventListener('click', function() {
    translate();
});
