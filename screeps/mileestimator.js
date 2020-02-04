let type_select = document.getElementById('select-1'),
    intensity = document.getElementById('select-2'),
    length = document.getElementById('length'),
    length_label = document.getElementById('length_label'),
    hours = document.getElementById('hours'),
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    buttons = document.getElementById('buttons'),
    footer = document.querySelector('footer'),
    numbers = document.getElementById('numbers'),
    miles = document.getElementById('miles'),
    vid = document.getElementById('vid'),
    dude = document.getElementById('dude_icon'),
    modal = document.getElementById('modal-container'),
    yes = document.getElementById('yes'),
    no = document.getElementById('no'),
    timerStart,
    counter,
    currentTime;

   

hours.addEventListener('keydown', addTime);

minutes.addEventListener('keydown', addTime);

hours.addEventListener('focus', hide);
minutes.addEventListener('focus', hide);

hours.addEventListener('blur', () => {
    setTime();
    show();   
});

minutes.addEventListener('blur', () => {
    setTime();
    show();
});

start.addEventListener('click', e => {
    e.preventDefault();
    
    let time = getTime(hours.value, minutes.value);
        
    // console.log(time);

    if ((time == 'NaN' || time == 0) && type_select.value === "timer") {
        flashAlert();
    } else {       
    
        if (start.innerHTML === 'start') {

            if (type_select.value === "timer") {
                startTimer(time, numbers);
                console.log(`Timer started for ${time} minutes at a ${intensity.value} intensity!`);
            } else {
                time = (time == 0) ? 600 : time;
                startStopwatch(0, time, numbers);
                console.log(`Stopwatch started for ${time} minutes at a ${intensity.value} intensity!`);
            }
            
            timerStart = time;
            disableForm();
            startVid();
            dude.setAttribute('src', '../assets/momentum.gif');
        } else if (start.innerHTML === 'resume' && current !== 0) {
            let current = getCurrent(currentTime);

            if (type_select.value === "timer") {
                startTimer(current, numbers);
                console.log(`Timer resumed at ${current.toFixed(2)} minutes!`);
            } else {
                time = (time == 0) ? 600 : time;
                startStopwatch(current, time, numbers);
                console.log(`Stopwatch resumed at ${(current).toFixed(2)} minutes!`);
            }

            startVid();
            stop.innerHTML = 'stop';
            dude.setAttribute('src', '../assets/momentum.gif');
        }
    

        start.setAttribute('disabled', 'true');
        stop.removeAttribute('disabled');
    }
    
});

stop.addEventListener('click', e => {
    e.preventDefault();

    if (stop.innerHTML === "reset") {
        modal.style.display = 'block';
    }

    stopVid();
    stopCounter();
    dude.setAttribute('src', '../assets/momentum.jpg');

    stop.innerHTML = 'reset';
    start.innerHTML = 'resume';

    start.removeAttribute('disabled');

    console.log(`The ${type_select.value} was stopped!`);
    // console.log(currentTime);
});

yes.addEventListener('click', () => location.reload());

no.addEventListener('click', () => modal.style.display = 'none');


// function for entering time into the hours and minute input elements

function addTime(e) {
    // console.log(e);

    if (e.which == 13 || e.keyCode == 13) {
        e.preventDefault();

        if(e.target.id.includes('hours')) {
            hours.blur();
            minutes.focus();
        } else {
            minutes.blur();
        }
    }
    
    if (e.target.value.length >= 2) {
        if (e.which != 8 || e.keyCode != 8) {
            e.preventDefault();
            return false;
        }
    }
}


// function for taking the input values and displaying them when focus is removed from inputs

function setTime() {
    let minutes_input = minutes.value,
        hours_input = hours.value;

        minutes_input = minutes_input < 10 ? "0" + minutes_input : minutes_input;
        minutes_input = minutes_input === "0" ? "00" : minutes_input;
        hours_input = hours_input < 10 ? "0" + hours_input : hours_input;
        hours_input = hours_input === "0" ? "00" : hours_input;

        // console.log(hours_input);
 
    if (type_select.value !== 'stopwatch') {
        numbers.innerHTML = `${hours_input}:${minutes_input}:00`;
    }
}


// function for getting input time values and converting them to minutes to be passed in to timer function

function getTime(hours, minutes) {

    (!hours) ? hours = 0 : hours = hours;
    (!minutes) ? minutes = 0 : minutes = minutes;

    let time = `${(parseInt(hours, 10) * 60) + parseInt(minutes, 10)}`;
    return time;
}


// adds alert class to numbers so they flash red when an attempt to start the timer without values is made

function flashAlert() {
    length_label.classList.add('flash-red');
    length.classList.add('flash-red');
    hours.focus();

    setTimeout(function() {
        length_label.classList.remove('flash-red');
        length.classList.remove('flash-red');
    }, 700);
}


// gets passed the array of currently displayed number values and returns a single value in minutes to pass into timer function when the timer is resumed

function getCurrent(currentArr) {
    let current = (parseInt(currentArr[0],10) * 60) + (parseInt(currentArr[1],10)) + (parseInt(currentArr[2], 10) / 60);

    return current;
}


// core timer function

function startTimer(duration, display) {
    let timer = duration * 60;

    timer -= 1;

    counter = setInterval(function () {
        let hours = parseInt(timer / 3600, 10),
            minutes = parseInt((timer / 60) - (hours * 60), 10),
            seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        hours = hours < 10 ? "0" + hours : hours;

        let time = `${hours}:${minutes}:${seconds}`;

        display.innerHTML = time;

        currentTime = display.innerHTML.split(':');

        current = getCurrent(currentTime);

        let elapsed = Math.round((timerStart - current) * 60);

        let currentMiles = getMiles(elapsed);

        currentMiles = currentMiles < 10 ? "0" + currentMiles : currentMiles;

        miles.innerHTML = `${currentMiles} miles*`;

        // console.log(currentMiles);
        // console.log(current);

        if (--timer < 0) {
            stopCounter();

            window.navigator.vibrate([700,200,700,200,700,200,700,200,700]);

            dude.setAttribute('src', '../assets/momentum.jpg');
            numbers.classList.add('flash');
            stop.innerHTML = 'reset';
            start.setAttribute('disabled', 'true');
           
        }

        // console.log(minutes);

    }, 1000);
}

function startStopwatch(startTime, duration, display) {
    let timer = startTime * 60;

    timer += 1;

    counter = setInterval(function () {
        let hours = parseInt(timer / 3600, 10),
            minutes = parseInt((timer / 60) - (hours * 60), 10),
            seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        hours = hours < 10 ? "0" + hours : hours;

        let time = `${hours}:${minutes}:${seconds}`;

        display.innerHTML = time;

        currentTime = display.innerHTML.split(':');

        current = getCurrent(currentTime);

        let elapsed = Math.round((startTime + current) * 60);

        let currentMiles = getMiles(elapsed);

        currentMiles = currentMiles < 10 ? "0" + currentMiles : currentMiles;

        miles.innerHTML = `${currentMiles} miles*`;

        // console.log(currentMiles);
        // console.log(current);

        if (++timer > duration*60) {
            stopCounter();

            window.navigator.vibrate([700,200,700,200,700,200,700,200,700]);

            dude.setAttribute('src', '../assets/momentum.jpg');
            numbers.classList.add('flash');
            stop.innerHTML = 'reset';
            start.setAttribute('disabled', 'true');
            current = 0;
           
        }

        // console.log(minutes);

    }, 1000);
}

// calculates the estimated miles passed using the amount of time elapsed and selected intensity

function getMiles(elapsedTime) {
    if (intensity.value === 'low') {
        // console.log('low');
        return ((elapsedTime / 3600) * 11).toFixed(2);
    } else if (intensity.value === 'medium') {
        // console.log('med');
        return ((elapsedTime / 3600) * 13).toFixed(2);
    } else {
        // console.log('high');
        return ((elapsedTime / 3600) * 15).toFixed(2);
    }
}

// disables the form elements 

function disableForm() {
    intensity.setAttribute('disabled', 'true');
    type_select.setAttribute('disabled', 'true');
    minutes.setAttribute('disabled', 'true');
    hours.setAttribute('disabled', 'true');
}

// hide and show footer and buttons on mobile input

function hide() {
    if (screen.width < 500) {
        footer.style.display = 'none';
        buttons.style.display = 'none';
        footer.style.opacity = '0';
        buttons.style.opacity = '0';
    }
}

function show() {
    if (screen.width < 500) {
        footer.style.display = 'block';
        buttons.style.display = 'block';

        setTimeout(function(){
            footer.style.opacity = '1';
            buttons.style.opacity = '1';
        },150);
    }
}

// stop timer function

function stopCounter() {
    clearInterval(counter);
}



// kinda janky way to keep the screen on ha

function startVid() {
    vid.play();
}

function stopVid() {
    vid.pause();
}





