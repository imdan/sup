class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    addScore(e, score, p) {

        if (e.target.classList.contains('circlex')) {
            
            let opp = getOpp(score, p), 
                num = getNum(score);

            if (p === "p1") {                

                if(opp.classList.contains('circlex')) {
                    num.style.textDecoration = 'line-through';
                    alert_count -= 1;
                } else {
                    p1_score += score;
                    p1_scoreboard.innerHTML = p1_score;
                    p1_previous.push(`${score}`);
                }
                
            } else {

                if(opp.classList.contains('circlex')) {
                    num.style.textDecoration = 'line-through';
                    alert_count -= 1;
                } else {
                    p2_score += score;
                    p2_scoreboard.innerHTML = p2_score;
                    p2_previous.push(`${score}`);
                }
                
            }
        } else if (e.target.classList.contains('x')) {
            e.target.classList.remove('x');
            e.target.classList.add('circlex');

            if (p === 'p1') {
                p1_previous.push(`${score}`); 
            } else {
                p2_previous.push(`${score}`);
            }

        } else if (e.target.classList.contains('slash')) {
            e.target.classList.remove('slash');
            e.target.classList.add('x');

            if (p === 'p1') {
                p1_previous.push(`${score}`); 
            } else {
                p2_previous.push(`${score}`);
            }
        } else if (e.target.classList.contains('chalk')) {
            e.target.classList.add('slash');

            if (p === 'p1') {
                p1_previous.push(`${score}`); 
            } else {
                p2_previous.push(`${score}`);
            }
        }
    }

    undoScore(e, score, p) {
        if (e.target.classList.contains('circlex')) {

            let num = getNum(score);

            if (p === "p1") {

                let count = getScores(p1_previous);

                if(count[score] > 3) {
                    p1_previous.reverse().splice(p1_previous.indexOf(`${score}`), 1);
                    p1_previous.reverse();
                    // console.log(p1_previous);
                    p1_score -= score;
                    p1_scoreboard.innerHTML = p1_score;
                } else {
                    p1_previous.reverse().splice(p1_previous.indexOf(`${score}`), 1);
                    p1_previous.reverse();
                    num.style.textDecoration = 'none';
                    e.target.classList.remove('circlex');
                    e.target.classList.add('x');
                }
            } else {

                let count = getScores(p2_previous);

                if (count[score] > 3) {
                    p2_previous.reverse().splice(p2_previous.indexOf(`${score}`), 1);
                    p2_previous.reverse();
                    p2_score -= score;
                    p2_scoreboard.innerHTML = p2_score;
                } else {
                    p2_previous.reverse().splice(p2_previous.indexOf(`${score}`), 1);
                    p2_previous.reverse();
                    num.style.textDecoration = 'none';
                    e.target.classList.remove('circlex');
                    e.target.classList.add('x');
                }
            }
        } else if (e.target.classList.contains('x')) {
            e.target.classList.remove('x');
            e.target.classList.add('slash');

            if (p === 'p1') {
                p1_previous.reverse().splice(p1_previous.indexOf(`${score}`), 1);
                p1_previous.reverse(); 
            } else {
                p2_previous.reverse().splice(p2_previous.indexOf(`${score}`), 1);
                p2_previous.reverse();
            }

        } else if (e.target.classList.contains('slash')) {
            e.target.classList.remove('slash');

            if (p === 'p1') {
                p1_previous.reverse().splice(p1_previous.indexOf(`${score}`), 1);
                p1_previous.reverse();
            } else {
                p2_previous.reverse().splice(p2_previous.indexOf(`${score}`), 1);
                p2_previous.reverse();
            }
        } else if (e.target.classList.contains('chalk')) {
            e.target.classList.remove('slash');
        }
    }

}

// instantiate players

let player1 = new Player("Player 1", 'one');
let player2 = new Player("Player 2", 'two');


// slider

let slider = document.getElementById('checkbox');


// rules and reset vars and click event

let chalkboard = document.querySelector('.chalkboard'),
    ruleboard = document.querySelector('.ruleboard'),
    rules_link = document.getElementById('rules'),
    reset_link = document.getElementById('reset');

rules_link.addEventListener('click', function(e) {
    e.preventDefault();

    if (rules_link.innerHTML === 'rules') {
        chalkboard.style.display = 'none';
        ruleboard.style.display = 'block';
        rules_link.innerHTML = "scoreboard";
    } else {
        chalkboard.style.display = 'flex';
        ruleboard.style.display = 'none';
        rules_link.innerHTML = "rules";
    }
});

reset_link.addEventListener('click', function() {
    location.reload();
});

// previous scores

let p1_previous = [], 
    p2_previous = [];


// Numbers

let twenty = document.getElementById('twenty'),
    nineteen = document.getElementById('nineteen'),
    eighteen = document.getElementById('eighteen'),
    seventeen = document.getElementById('seventeen'),
    sixteen = document.getElementById('sixteen'),
    fifteen = document.getElementById('fifteen'),
    bully = document.getElementById('bully');


// Player one variables

let p1_twenty = document.getElementById('p1_twenty'),
    p1_nineteen = document.getElementById('p1_nineteen'),
    p1_eighteen = document.getElementById('p1_eighteen'),
    p1_seventeen = document.getElementById('p1_seventeen'),
    p1_sixteen = document.getElementById('p1_sixteen'),
    p1_fifteen = document.getElementById('p1_fifteen'),
    p1_bully = document.getElementById('p1_bully'),
    p1_scoreboard = document.getElementById('player1-score'),
    p1_score = 0,
    p1_chalk = [p1_twenty, p1_nineteen, p1_eighteen, p1_seventeen, p1_sixteen, p1_fifteen, p1_bully];

let p1_name = document.getElementById('player1'),
    p1_column = document.querySelector('.p1_chalk');


// player two variables

let p2_twenty = document.getElementById('p2_twenty'),
    p2_nineteen = document.getElementById('p2_nineteen'),
    p2_eighteen = document.getElementById('p2_eighteen'),
    p2_seventeen = document.getElementById('p2_seventeen'),
    p2_sixteen = document.getElementById('p2_sixteen'),
    p2_fifteen = document.getElementById('p2_fifteen'),
    p2_bully = document.getElementById('p2_bully'),   
    p2_scoreboard = document.getElementById('player2-score'),  
    p2_score = 0, 
    p2_chalk = [p2_twenty, p2_nineteen, p2_eighteen, p2_seventeen, p2_sixteen, p2_fifteen, p2_bully];

let p2_name = document.getElementById('player2'),
    p2_column = document.querySelector('.p2_chalk');


let score_alert = document.getElementById('alert'),
    previous_score,
    alert_count = 0;



// winner alert modal stuff

let win_alert = document.getElementById('win-alert'),
    winner = document.getElementById('winner'),
    view = document.getElementById('view'),
    restart = document.getElementById('restart');

view.addEventListener('click', function(e) {
    e.preventDefault();

    win_alert.style.display = 'none';
});

restart.addEventListener('click', function() {
    location.reload(); 
});


// name input events

p1_name.addEventListener('keyup', function(e) {
    let code = (e.keyCode ? e.keyCode : e.which);

    if((code == 13) || (code == 10)) {
        p1_name.blur();
    }
});

p2_name.addEventListener('keyup', function(e) {
    let code = (e.keyCode ? e.keyCode : e.which);

    if((code == 13) || (code == 10)) {
        p2_name.blur();
    }
});

p1_name.addEventListener('blur', function() {
    if (p1_name.value === "") {
        player1.name = "Player 1";
        console.log(player1);
    } else {
        player1.name = p1_name.value;
        console.log(player1);
    }
});

p2_name.addEventListener('blur', function() {
    if (p2_name.value === "") {
        player2.name = "Player 2";
        console.log(player2);
    } else {
        player2.name = p2_name.value;
        console.log(player2);
    }
});


// player one events
//  theres probably a way to have only one click event and identify the e.target, but ill have to think about it more and kinda just want to get this working for now


p1_twenty.addEventListener('click', function(e) {
    e.preventDefault();

    if (slider.checked) {
        player1.addScore(e, 20, 'p1');
    } else {
        player1.undoScore(e, 20, 'p1');
    }

    let p1_score_count = getScores(p1_previous);
    console.log(`P1: 20 (${p1_score_count[20]})`);
});

p1_nineteen.addEventListener('click', function(e) {
    e.preventDefault();

    if (slider.checked) {
        player1.addScore(e, 19, 'p1');
    } else {
        player1.undoScore(e, 19, 'p1');
    }

    console.log(`P1: ${p1_previous}`);
});

p1_eighteen.addEventListener('click', function(e) {
    e.preventDefault();

    if (slider.checked) {
        player1.addScore(e, 18, 'p1');
    } else {
        player1.undoScore(e, 18, 'p1');
    }

    console.log(`P1: ${p1_previous}`);
});

p1_seventeen.addEventListener('click', function(e) {
    e.preventDefault();

    if (slider.checked) {
        player1.addScore(e, 17, 'p1');
    } else {
        player1.undoScore(e, 17, 'p1');
    }

    console.log(`P1: ${p1_previous}`);
});

p1_sixteen.addEventListener('click', function(e) {
    e.preventDefault();

    if (slider.checked) {
        player1.addScore(e, 16, 'p1');
    } else {
        player1.undoScore(e, 16, 'p1');
    }

    console.log(`P1: ${p1_previous}`);
});

p1_fifteen.addEventListener('click', function(e) {
    e.preventDefault();

    if (slider.checked) {
        player1.addScore(e, 15, 'p1');
    } else {
        player1.undoScore(e, 15, 'p1');
    }

    console.log(`P1: ${p1_previous}`);
});

p1_bully.addEventListener('click', function(e) {
    e.preventDefault();

    if (slider.checked) {
        player1.addScore(e, 25, 'p1');
    } else {
        player1.undoScore(e, 25, 'p1');
    }

    console.log(`P1: ${p1_previous}`);
});

// player one event to add score to alert  ---- might be able to use this event to get rid of all the individual click events

p1_column.addEventListener('click', function(e) {
    // console.log(e.target);

    if(e.target.classList.contains('chalk')) {

        if(previous_score === 'p1') {

            (slider.checked) ? alert_count += 1 : alert_count -= 1;
            score_alert.innerHTML = `${player1.name}:  ${(p1_previous.length == 1) ? (p1_previous.toString()) : (p1_previous.slice(p1_previous.length - alert_count).join(', '))}`;
            
            previous_score = 'p1';
        } else {
            alert_count = 0;
            (slider.checked) ? alert_count += 1 : alert_count -= 1;

            score_alert.innerHTML = `${player1.name}:  ${(p1_previous.length == 1) ? (p1_previous.toString()) : (p1_previous.slice(p1_previous.length - alert_count).join(', '))}`;

            
            previous_score = 'p1';
    
        }

        let win_check = checkChalk(p1_chalk);

        if (win_check === 'win' && p1_score > p2_score) {
            // console.log(`${player1.name} wins!`);
            win_alert.style.display = 'block';
            winner.innerHTML = `${player1.name} wins!`
        }

    }
        
});



// Player two events


p2_twenty.addEventListener('click', function(e) {
    e.preventDefault();

    if (slider.checked) {
        player2.addScore(e, 20, 'p2');
    } else {
        player2.undoScore(e, 20, 'p2');
    }

    console.log(`P2: ${p2_previous}`);
});

p2_nineteen.addEventListener('click', function(e) {
    e.preventDefault();

    if (slider.checked) {
        player2.addScore(e, 19, 'p2');
    } else {
        player2.undoScore(e, 19, 'p2');
    }

    console.log(`P2: ${p2_previous}`);
});

p2_eighteen.addEventListener('click', function(e) {
    e.preventDefault();

    if (slider.checked) {
        player2.addScore(e, 18, 'p2');
    } else {
        player2.undoScore(e, 18, 'p2');
    }

    console.log(`P2: ${p2_previous}`);
});

p2_seventeen.addEventListener('click', function(e) {
    e.preventDefault();

    if (slider.checked) {
        player2.addScore(e, 17, 'p2');
    } else {
        player2.undoScore(e, 17, 'p2');
    }

    console.log(`P2: ${p2_previous}`);
});
      
p2_sixteen.addEventListener('click', function(e) {
    e.preventDefault();

    if (slider.checked) {
        player2.addScore(e, 16, 'p2');
    } else {
        player2.undoScore(e, 16, 'p2');
    }

    console.log(`P2: ${p2_previous}`);
});

p2_fifteen.addEventListener('click', function(e) {
    e.preventDefault();

    if (slider.checked) {
        player2.addScore(e, 15, 'p2');
    } else {
        player2.undoScore(e, 15, 'p2');
    }

    console.log(`P2: ${p2_previous}`);
});

p2_bully.addEventListener('click', function(e) {
    e.preventDefault();

    if (slider.checked) {
        player2.addScore(e, 25, 'p2');
    } else {
        player2.undoScore(e, 25, 'p2');
    }

    console.log(`P2: ${p2_previous}`);
});


p2_column.addEventListener('click', function(e) {
    // console.log(e.target);

    if(e.target.classList.contains('chalk')) {

        if(previous_score === 'p2') {
            (slider.checked) ? alert_count += 1 : alert_count -= 1;
            score_alert.innerHTML = `${player2.name}:  ${(p2_previous.length == 1) ? (p2_previous.toString()) : (p2_previous.slice(p2_previous.length - alert_count).join(', '))}`;
            
            previous_score = 'p2';
        } else {
            alert_count = 0;
            (slider.checked) ? alert_count += 1 : alert_count -= 1;
            score_alert.innerHTML = `${player2.name}:  ${(p2_previous.length == 1) ? (p2_previous.toString()) : (p2_previous.slice(p2_previous.length - alert_count).join(', '))}`;
            
            previous_score = 'p2';
    
        }

        let win_check = checkChalk(p2_chalk);

        if (win_check === 'win' && p2_score > p1_score) {
            // console.log(`${player2.name} wins!`);

            win_alert.style.display = 'block';
            winner.innerHTML = `${player2.name} wins!`;
        }

    }
        
});
      
function getScores(arr) {

    let count = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        count[num] = count[num] ? count[num] + 1 : 1;
    }

    return count;
}

function getOpp(score, p) {
    if (p === 'p1') {
        switch (score) {
            case 20: 
                return p2_twenty;
                break;
            case 19:
                return p2_nineteen;
                break;
            case 18:
                return p2_eighteen;
                break;
            case 17:
                return p2_seventeen;
                break;
            case 16:
                return p2_sixteen;
                break;
            case 15: 
                return p2_fifteen;
                break;
            case 25:
                return p2_bully;
                break;
        }
    } else {
        switch (score) {
            case 20: 
                return p1_twenty;
                break;
            case 19:
                return p1_nineteen;
                break;
            case 18:
                return p1_eighteen;
                break;
            case 17:
                return p1_seventeen;
                break;
            case 16:
                return p1_sixteen;
                break;
            case 15: 
                return p1_fifteen;
                break;
            case 25:
                return p1_bully;
                break;
        }
    }
}

function getNum(score) {
    switch (score) {
        case 20: 
            return twenty;
            break;
        case 19:
            return nineteen;
            break;
        case 18:
            return eighteen;
            break;
        case 17:
            return seventeen;
            break;
        case 16:
            return sixteen;
            break;
        case 15: 
            return fifteen;
            break;
        case 25:
            return bully;
            break;
    }
}

function checkChalk(arr) {

    let win = 0;

    for (let i = 0; i < arr.length; i++) {
        if(!arr[i].classList.contains('circlex')) {
            break;
        } else {
            win += 1;
        }
    }

    if (win === 7) {
        return 'win';
    } else {
        return "no win";
    }
}

