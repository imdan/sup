let feedback = document.getElementById('paperplane_link'), 
    more = document.getElementById('more'),
    circle = document.getElementById('circle'),
    square = document.getElementById('square'),
    note = document.getElementById('note'),
    open = false;


feedback.addEventListener('click', function() {
    location.assign('feedback.html');
})


more.addEventListener('click', function() {
    if(open === true) {
        circle.style.opacity = '0';
        circle.style.transform = 'translateX(-28px)';
        square.style.opacity = '0';
        square.style.transform = 'translateX(-56px)';
        note.style.opacity = '0';
        note.style.transform = 'translateX(-84px)';

        // more.style.opacity = '.1';
        // more.style.transform = 'translateX(0px)';

        open = false;
    } else {
        open = true;

        circle.style.opacity = '.4';
        circle.style.transform = 'translateX(0px)';
        square.style.opacity = '.4';
        square.style.transform = 'translateX(0px)';
        note.style.opacity = '.4';
        note.style.transform = 'translateX(0px)';

        // more.style.opacity = '.4';
        // more.style.transform = 'translateX(2px)';
    }
});


circle.addEventListener('click', function() {
    if (open === true) {
        location.assign('/');
    }
});