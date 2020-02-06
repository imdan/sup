let feedback = document.getElementById('paperplane_link'), 
    more = document.getElementById('more'),
    circle = document.getElementById('circle'),
    square = document.getElementById('square'),
    about = document.getElementById('about'),
    homeLink = document.getElementById('home_link'), 
    projectsLink = document.getElementById('projects_link'), 
    aboutLink = document.getElementById('about_link'), 
    contactLink = document.getElementById('contact_link'),
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

        circle.style.transitionDuration = '1s';
        square.style.transitionDuration = '1s';
        about.style.transitionDuration = '1s';
        feedback.style.transitionDuration = '1s';

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


homeLink.addEventListener('click', function(e) {
    if (open === false) {
        e.preventDefault();
    }
});

projectsLink.addEventListener('click', function(e) {
    if (open === false) {
        e.preventDefault();
    }
});

aboutLink.addEventListener('click', function(e) {
    if (open === false) {
        e.preventDefault();
    }
});

contactLink.addEventListener('click', function(e) {
    if (open === false) {
        e.preventDefault();
    }
});

