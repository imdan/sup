// hello world

let hello = document.getElementById('hello'),
    i = 0;

setTimeout(function () {
    hello.style.opacity = '1';
}, 500); 

const words = ["Hello world.", "Hola mundo.", "こんにちは世界。", "Bonjour le monde.", "Hallo welt.", "你好，世界。", "Dia duit ar domhan.", "Pozdrav svijete.", "سلام دنیا.", "Aloha kākou honua.", "Witaj świecie.",  "नमस्ते दुनिया।", "Hej världen.", "Ciao mondo."];

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
 
    if (i != 8) {
        hello.setAttribute('dir', 'ltr');
        hello.style.fontSize = '16px';
    } else {
        hello.setAttribute('dir', 'rtl');
        hello.style.fontSize = '18px';
    }
}

translate();
