let feedback = document.getElementById('paperplane_link'), 
    more = document.getElementById('more'),
    circle = document.getElementById('circle'),
    square = document.getElementById('square'),
    about = document.getElementById('about'),
    listen = document.getElementById('listen'),
    open = false;


more.addEventListener('click', function() {
    if(open === true) {
        feedback.style.opacity = '0';
        circle.style.opacity = '0';

        setTimeout(function() {
            square.style.opacity = '0';
            about.style.opacity = '0';
        }, 500);


        // more.style.opacity = '.1';
        // more.style.transform = 'translateX(0px)';

        open = false;
    } else {
        open = true;

        square.style.opacity = '.5';
        about.style.opacity = '.5';
        
        setTimeout(function() {
            feedback.style.opacity = '.6';
            circle.style.opacity = '.5';
        }, 150);

        // more.style.opacity = '.4';
        // more.style.transform = 'translateX(2px)';
    }
});


circle.addEventListener('click', function() {
    if (open === true) {
        location.href = '/';
    }
});

square.addEventListener('click', function() {
    if (open === true) {
        location.href = '/projects.html';
    }
});

about.addEventListener('click', function() {
    if (open === true) {
        location.href = '/about.html';
    }
});

feedback.addEventListener('click', function() {
    if (open === true) {
        location.href = '/contact.html';
    }
});



if (location.href.includes('projects')) {
    setTimeout(function() {
        listen.style.opacity = '0';
    }, 2500);
}
