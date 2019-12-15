let back = document.getElementById('back_arrow'),
    forward = document.getElementById('forward_arrow'), 
    dude = document.getElementById('dude'),
    here = 4,
    i = here;

const titles = ['nothing', 'no words', 'headwind', 'hindsight', 'head down'];


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
});







