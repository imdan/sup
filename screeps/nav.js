let feedback = document.getElementById('paperplane_link'), 
    more = document.getElementById('more'),
    nav_circle = document.getElementById('circle'),
    nav_square = document.getElementById('square'),
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
        nav_circle.style.opacity = '0';

        setTimeout(function() {
            nav_square.style.opacity = '0';
            about.style.opacity = '0';
        }, 500);


        // more.style.opacity = '.1';
        // more.style.transform = 'translateX(0px)';

        open = false;
    } else {
        open = true;

        nav_circle.style.transitionDuration = '1s';
        nav_square.style.transitionDuration = '1s';
        about.style.transitionDuration = '1s';
        feedback.style.transitionDuration = '1s';

        nav_square.style.opacity = '.5';
        about.style.opacity = '.5';
        
        setTimeout(function() {
            feedback.style.opacity = '.6';
            nav_circle.style.opacity = '.5';
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

