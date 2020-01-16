let search = document.getElementById('search'),
    form = document.getElementById('form'),
    section = document.querySelector('section'),
    button = document.getElementById('button'),
    rectangle = document.getElementById('rectangle'),
    re= /^[a-zA-Z]{2,}$/i, 
    alert1 = document.getElementById('alert');


search.addEventListener('focus', function () {
    rectangle.style.opacity = '1';
});

search.addEventListener('blur', function () {
    rectangle.style.opacity = '.5';

});

form.addEventListener('submit', getWords);


// button.addEventListener('click', function() {
//     form.submit();
// });



function getWords(e) {

    e.preventDefault();

    if (!re.test(search.value)) {
        document.getElementById('words').innerHTML = '';
        alert1.style.display = 'block';
        alert1.innerHTML = 'That\'s not a word!';
        console.log('no search');
    } else {
        alert1.style.display = 'none';
        fetch(`https://wordsapiv1.p.rapidapi.com/words/${search.value}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                "x-rapidapi-key": "c4e6693333mshbc109e4b7717712p120ec7jsnc907731254ec"
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
            return response.json();
            
            // console.log(response.json());
        })
        .then(data => {
            console.log(data.results);
            let output = '', 
                i = 1;

            data.results.forEach(word => {
                let syns = word.synonyms, 
                    example = word.examples;
                output += `
                <div class="word">

                <h3>${search.value}<sup>${i}</sup></h3>
                <p class="partofspeech">${word.partOfSpeech}</p>
                <p class="def">${word.definition}</p>
                <p class="syn">synonyms: ${(syns) ?  syns.join(', ') : 'n/a'}</p>
                <p class="syn">examples: ${(example) ?  example.join(', ') : 'n/a'}</p>
    
                </div>`
                ;

                i++;
            });
            document.getElementById('words').innerHTML = output;
        })
        .catch(err => {
            console.error(err);
            document.getElementById('words').innerHTML = '';
            alert1.style.display = 'block';
            alert1.innerHTML = 'Couldn\'t find that word!';
        });
    }

}