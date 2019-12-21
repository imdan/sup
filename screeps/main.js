let back = document.getElementById('back_arrow'),
    forward = document.getElementById('forward_arrow'), 
    dude = document.querySelector('.dude'),
    here = 6,
    i = here;

const titles = ['nothing', 'no words', 'headwind', 'hindsight', 'head down', 'drift', 'spacing out'];


dude.setAttribute('src', `assets/dude_${here}.jpg`);
dude.setAttribute('title', `${titles[here]}`);

back.addEventListener('click', function() {
    
    if (i > 1 && i <= here) {
        i -= 1;
        dude.setAttribute('src', `assets/dude_${i}.jpg`);
        dude.setAttribute('title', `${titles[i]}`);
    } else {
        i = here;
        dude.setAttribute('src', `assets/dude_${i}.jpg`);
        dude.setAttribute('title', `${titles[i]}`);
    }

    if (i === 5) {
        dude.setAttribute('id', 'drift');
    } else if (i === 6) {
        dude.setAttribute('id', 'space');
    } else {
        dude.setAttribute('id', '');
    }

});

forward.addEventListener('click', function() {

    if (i >= 1 && i < here) {
        i += 1;
        dude.setAttribute('src', `assets/dude_${i}.jpg`);
        dude.setAttribute('title', `${titles[i]}`);
    } else {
        i = 1;
        dude.setAttribute('src', `assets/dude_${i}.jpg`);
        dude.setAttribute('title', `${titles[i]}`);
    }

    if (i === 5) {
        dude.setAttribute('id', 'drift');
    } else if (i === 6) {
        dude.setAttribute('id', 'space');
    } else {
        dude.setAttribute('id', '');
    }
    
});







