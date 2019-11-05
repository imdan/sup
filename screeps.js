let hello = document.querySelector('p'),
    home = document.getElementById('home'),
    i = 0;

setTimeout(function() {
    hello.style.opacity = '1';
}, 500);

// setTimeout(function() {
//     words.style.opacity = '0';
// }, 5250);

home.addEventListener('click', function(e) {
    e.preventDefault();
    location.reload();
});

window.addEventListener('DOMContentLoaded', getWords);

function getWords() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'words.json', true);

    xhr.onload = function() {
        if(this.status === 200){

            const list = JSON.parse(this.responseText);

            let output = `${list.words[i]}`;

            hello.innerHTML = output;

            setTimeout(function() {
                hello.style.opacity = '0';
            }, 3000);

            setTimeout(function() {
                if(i < list.words.length - 1) {
                    i += 1;
                } else {
                    i = 0;
                }
                hello.style.opacity = '1';
                getWords();
            }, 5500);
        }
    }

    xhr.send();
}
