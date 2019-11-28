let feedbackWords = document.getElementById('feedback_words'),
    input = document.getElementById('input'),
    rectangle = document.getElementById('rectangle'),
    paperplane = document.getElementById('paperplane'), 
    form = document.querySelector('form'),
    button = document.querySelector('button'),
    footer = document.querySelector('footer'),
    status = '';

// setTimeout(function() {
//     feedbackWords.style.opacity = '1';
// }, 500);

input.addEventListener('focus', function() {
    rectangle.style.opacity = '1';
    
    if (screen.width < 500) {
        footer.style.display = 'none';
        footer.style.opacity = '0';
    }
});

input.addEventListener('blur', function() {

    if (screen.width < 500) {
        footer.style.display = 'block';

        setTimeout(function(){
            footer.style.opacity = '1';
        },150);
    }

    if (status === 'submitted') {
        rectangle.style.opacity = '0';
    } else {
        rectangle.style.opacity = '.65';
    }
});

input.addEventListener('keydown', function(e) {
    // disable go key on mobile

    let code = (e.keyCode ? e.keyCode : e.which);

    if((screen.width < 500) && (code == 13) || (code == 10)) {
        input.blur();
        return false;
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (input.value != '') {
        status = 'submitted';
        feedbackWords.style.opacity = '0';
        paperplane.style.transform = 'translateX(50px)';
        paperplane.style.opacity = '0';
        rectangle.style.opacity = '0';
        input.style.opacity = '0';
        // paperplane.setAttribute('disabled', 'disabled');
        input.setAttribute('placeholder', '');
        // input.setAttribute('disabled', 'disabled');

        setTimeout(function(){
            form.submit();
        },2500);

        }
});

paperplane.addEventListener('click', function(e) {
    e.preventDefault();

    if (input.value != '') {
        status = 'submitted';
        feedbackWords.style.opacity = '0';
        paperplane.style.transform = 'translateX(50px)';
        paperplane.style.opacity = '0';
        rectangle.style.opacity = '0';
        input.style.opacity = '0';
        // paperplane.setAttribute('disabled', 'disabled');
        input.setAttribute('placeholder', '');
        // input.setAttribute('disabled', 'disabled');

        setTimeout(function(){
            form.submit();
        },2500);
    }
});

