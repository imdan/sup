let hello = document.querySelector('p'),
    home = document.getElementById('home'),
    i = 0;

const words = ["Hello world.", "Hola mundo.", "こんにちは世界。", "Bonjour le monde.", "नमस्ते दुनिया।", "Hallo welt.", "你好，世界。", "Pozdrav svijete.", "Dia duit ar domhan.", "Witaj świecie.", "Hej världen.", "Ciao mondo."];


setTimeout(function () {
    hello.style.opacity = '1';
}, 500);

home.addEventListener('click', function (e) {
    e.preventDefault();
    location.reload();
});

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

translate();