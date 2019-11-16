let feedbackWords = document.getElementById('feedback_words'),
    input = document.getElementById('input'),
    rectangle = document.getElementById('rectangle'),
    paperplane = document.getElementById('paperplane'), 
    form = document.querySelector('form'),
    status = '';

setTimeout(function() {
    feedbackWords.style.opacity = '1';
}, 500);

input.addEventListener('focus', function() {
    rectangle.style.opacity = '1';
});

input.addEventListener('blur', function() {

    if (status === 'submitted') {
        rectangle.style.opacity = '0';
    } else {
        rectangle.style.opacity = '.65';
    }
});

form.addEventListener('submit', function() {
    input.setAttribute('placeholder', '');
});

paperplane.addEventListener('click', function(e) {
    e.preventDefault();
    paperplane.style.outline = 'none';

    if (input.value != '') {
        status = 'submitted';
        feedbackWords.style.opacity = '0';
        paperplane.style.transform = 'translateX(50px)';
        paperplane.style.opacity = '0';
        rectangle.style.opacity = '0';
        paperplane.setAttribute('disabled', 'disabled');
        input.setAttribute('placeholder', '');
        input.value = '';
        input.setAttribute('disabled', 'disabled');
    }
});

