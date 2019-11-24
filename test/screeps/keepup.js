let words = document.getElementById('keepup_words'), 
    counter = document.getElementById('keepup_count'),
    balloon = document.getElementById('balloon'),
    floor = document.querySelector('hr'),
    score = document.getElementById('keepup_score'),
    screenSize = window.innerWidth,
    sorry = document.getElementById('small_screen'),
    hint,
    count = 0;

counter.innerHTML = count;  

console.log(floor.offsetTop);
console.log(`on load: ${balloon.offsetTop - balloon.offsetHeight}`);

// window.addEventListener('load', function() {
//     balloon.style.left = `${50 + (balloon.clientWidth/2)}%`;
//     console.log(`balloon spot: ${50 + (balloon.clientWidth/2)}%`);
// });


function num(min, max) {
    return Math.floor((Math.random()*(max-min+1)+min));
}

//  show words

setTimeout(function() {
    words.style.opacity = '1';
    sorry.style.opacity = '1';
}, 500);

// drop balloon

setTimeout(function() {
    balloon.style.top = '518px';
}, 2500);

// add bounce on land, no tap

setTimeout(function() {
    
    if ((balloon.offsetTop + balloon.offsetHeight) >= (572)) {
        balloon.style.animationName = 'wobble, bounce';
        balloon.style.animationDuration = '1.5s, .5s';
        balloon.style.animationIterationCount = 'infinite, 1';
        balloon.style.animationTimingFunction = 'ease, ease-out';
    }

}, 4500);

function giveHint() {
    giveHint = setTimeout(function() {counter.innerHTML = '(tap the balloon)'; counter.style.opacity = '1'; counter.style.fontSize = '14px';}, 10000);
}

giveHint();

// setTimeout(function() {
//     words.style.opacity = '0';
// }, 3000);

// click event on the balloon, probably way too much code here but it works for now

balloon.addEventListener('click', function(e) {

    // cancel hint

    clearTimeout(giveHint);

    // hides initial words, shows counter

    words.style.opacity = '0';
    sorry.style.opacity = '0';
    counter.style.fontSize = '18px';
    counter.style.opacity = '1';

    // reset score p

   if (count > 0) {
        score.style.animationName = 'none';
        score.style.transitionDuration = '0s';
        score.style.transform = 'translateY(0px)';
    }

    balloon.style.animationName = 'none';

    // add/show to counter, keep score

    count += 1;
    
    if (count > 1) {
        score.innerHTML = count;
    }
    
    counter.innerHTML = count; 

    // up

    balloon.style.transitionDuration = '.25s';
    balloon.style.transitionTimingFunction = 'ease-out';
    balloon.style.top = `${e.clientY - 175}px`;

    // random number for horizontal move

    let toggle;

    toggle = num(0,4);
    console.log(toggle);


    if (screenSize >= 800) {
        if (toggle === 0) {
            balloon.style.left = '35vw';
            balloon.style.transform = 'rotate(-60deg)';
        } else if (toggle === 1) {
            balloon.style.left = '40vw';
            balloon.style.transform = 'rotate(-20deg)';
        } else if (toggle === 2) {
            balloon.style.left = '48.5vw';
            balloon.style.transform = 'rotate(0deg)';
        } else if (toggle === 3) {
            balloon.style.left = '58vw';
            balloon.style.transform = 'rotate(20deg)';
        } else {
            balloon.style.left = '63vw';
            balloon.style.transform = 'rotate(60deg)';
        }
    } else if (screenSize < 800) {
        if (toggle === 0) {
            balloon.style.left = '30vw';
            balloon.style.transform = 'rotate(-60deg)';
        } else if (toggle === 1) {
            balloon.style.left = '35vw';
            balloon.style.transform = 'rotate(-20deg)';
        } else if (toggle === 2) {
            balloon.style.left = '45vw';
            balloon.style.transform = 'rotate(0deg)';
        } else if (toggle === 3) {
            balloon.style.left = '55vw';
            balloon.style.transform = 'rotate(20deg)';
        } else {
            balloon.style.left = '60vw';
            balloon.style.transform = 'rotate(60deg)';
        }
    }

    // if (toggle === 0) {
    //     balloon.style.left = '30vw';
    //     balloon.style.transform = 'rotate(-60deg)';
    // } else if (toggle === 1) {
    //     balloon.style.left = '35vw';
    //     balloon.style.transform = 'rotate(-20deg)';
    // } else if (toggle === 2) {
    //     balloon.style.left = '45vw';
    //     balloon.style.transform = 'rotate(0deg)';
    // } else if (toggle === 3) {
    //     balloon.style.left = '55vw';
    //     balloon.style.transform = 'rotate(20deg)';
    // } else {
    //     balloon.style.left = '60vw';
    //     balloon.style.transform = 'rotate(60deg)';
    // }


    // drop

    setTimeout(function() {

        if (count >= 75) {
            balloon.style.transitionDuration = '.5s';
        } else if (count >= 35 && count < 75) {
            balloon.style.transitionDuration = '.75s';
        } else if (count >= 10 && count < 35) {
            balloon.style.transitionDuration = '1s';
        } else {
            balloon.style.transitionDuration = '1.25s';
        }
        
        balloon.style.top = '518px';
        balloon.style.transitionTimingFunction = 'linear';
        balloon.style.transform = 'rotate(0deg)';
        console.log(`on drop: ${balloon.offsetTop - balloon.offsetHeight}`);
    }, 250);


    // land
    

    if (count >= 75) {
        setTimeout(function() {
            console.log(`on land: ${balloon.offsetTop + balloon.offsetHeight}`);
    
            if ((balloon.offsetTop + balloon.offsetHeight) >= (560)) {
                count = 0;
                score.style.transitionDuration = '2.5s';
                counter.innerHTML = count;  
                score.style.animationName = 'score';
                score.style.transform = 'translateY(-65px)';
                balloon.style.animationName = 'wobble, bounce';
                balloon.style.animationDuration = '1.5s, .5s';
                balloon.style.animationIterationCount = 'infinite, 1';
                balloon.style.animationTimingFunction = 'ease, ease-out';
            }
        }, 750);
    } else if (count >= 35 && count < 75) {
        setTimeout(function() {
            console.log(`on land: ${balloon.offsetTop + balloon.offsetHeight}`);
    
            if ((balloon.offsetTop + balloon.offsetHeight) >= (560)) {
                count = 0;
                score.style.transitionDuration = '2.5s';
                counter.innerHTML = count;  
                score.style.animationName = 'score';
                score.style.transform = 'translateY(-65px)';
                balloon.style.animationName = 'wobble, bounce';
                balloon.style.animationDuration = '1.5s, .5s';
                balloon.style.animationIterationCount = 'infinite, 1';
                balloon.style.animationTimingFunction = 'ease, ease-out';
            }
        }, 1000);
    } else if (count >= 10 && count < 35) {
        setTimeout(function() {
            console.log(`on land: ${balloon.offsetTop + balloon.offsetHeight}`);
    
            if ((balloon.offsetTop + balloon.offsetHeight) >= (560)) {
                count = 0;
                score.style.transitionDuration = '2.5s';
                counter.innerHTML = count; 
                score.style.animationName = 'score';
                score.style.transform = 'translateY(-65px)';
                balloon.style.animationName = 'wobble, bounce';
                balloon.style.animationDuration = '1.5s, .5s';
                balloon.style.animationIterationCount = 'infinite, 1';
                balloon.style.animationTimingFunction = 'ease, ease-out';
            }
        }, 1250);
    } else {
        setTimeout(function() {
            console.log(`on land: ${balloon.offsetTop + balloon.offsetHeight}`);
    
            if ((balloon.offsetTop + balloon.offsetHeight) >= (560)) {
                count = 0;
                score.style.transitionDuration = '2.5s';
                counter.innerHTML = count;
                score.style.animationName = 'score';
                score.style.transform = 'translateY(-65px)';
                balloon.style.animationName = 'wobble, bounce';
                balloon.style.animationDuration = '1.5s, .5s';
                balloon.style.animationIterationCount = 'infinite, 1';
                balloon.style.animationTimingFunction = 'ease, ease-out';
            }
        }, 1500);
    }

});
















