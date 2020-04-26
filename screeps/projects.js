let back = document.getElementById('back'),
    forward = document.getElementById('forward'),
    gif = document.getElementById('gif'),
    title = document.getElementById('title'),
    gifs,
    i = 1;


let projectCards = document.querySelectorAll('.project-card'),
    animationCard = document.querySelector('.animation-card'),
    appsLink = document.getElementById('apps-link'),
    animaLink = document.getElementById('anima-link'),
    projectsContainer = document.getElementById('projects-container'),
    bottomGradient = document.getElementById('bottom-gradient'),
    apps;
    
let currentView = 'apps';

window.addEventListener('DOMContentLoaded', () => {
    getApps(); 
    getGifs();
});

// console.log(projectCards);


back.addEventListener('click', previousGif);

forward.addEventListener('click', nextGif);

appsLink.addEventListener('click', (e) => {
    e.preventDefault();
    appsLink.classList.add('current-page');
    currentView = 'apps';
    projectsContainer.style.display = 'flex';
    animationCard.style.display = 'none';
    // setCurrent(apps);
    
    if(animaLink.classList.contains('current-page')) {
        animaLink.classList.remove('current-page');
    }
});

animaLink.addEventListener('click', (e) => {
    e.preventDefault();
    animaLink.classList.add('current-page');
    currentView = 'animation';
    projectsContainer.style.display = 'none';
    animationCard.style.display = 'unset';
    setCurrent(gifs);

    if(appsLink.classList.contains('current-page')) {
        appsLink.classList.remove('current-page');
    }
});

function getGifs() {

    fetch('./data/animations.json')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            gifs = data;
            // setCurrent(gifs);
        })
        .catch((err) => {
            console.error(`oh fuck, ${err}`);
        });
}

function getApps() {
    
    fetch('./data/apps.json')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            apps = data;
            setCurrent(apps);
        })
            .catch((err) => {
            console.error(`oh fuck, a ${err}`);
        });
}

function previousGif() {
    if(i === 0) {
        i = gifs.length - 1;
        setCurrent(gifs);
    } else {
        i--;
        setCurrent(gifs);
    }
}

function nextGif() {
    if(i === gifs.length - 1) {
        i = 0;
        setCurrent(gifs);
    } else {
        i++;
        setCurrent(gifs);
    }
}

function setCurrent(datas) {

    if (currentView === 'apps') {
        datas.forEach((app) => {
            let techUsed = app.used.join('/');
            let appCard = document.createElement('div');

            appCard.className = 'project-card';
            
            appCard.innerHTML = `

                    <div class="project-overlay">

                        <a href="${app.url}" class="ext-link" target="_blank"><i class="fas fa-external-link-alt icon"></i></a>
                         <a href="${app.github}" target="_blank" class="github-link"><i class="fab fa-github icon"></i></a>

                     </div>

                    <img src="${app.image}" class="project-img">
                    <h2 class="project-title">${app.name}</h2>
                    <p class="tech-used">${techUsed}</p>
                    <p class="description">${app.desc}</p>
            `;

            // need to figure out how to prevent links from working before overlay is shown

            appCard.addEventListener('mouseover', (e) => {
                
                let targetClass = e.target.classList;
                
                console.log(targetClass.value);

                if(targetClass.contains('project-img') || targetClass.contains('project-title') || targetClass.contains('tech-used') || targetClass.contains('description') || targetClass.contains('project-card')) {
                    let overlay = appCard.childNodes[1];
                    overlay.style.display = 'unset';
                }
                
            });
            
            
            appCard.addEventListener('mouseleave', (e) => {
                // console.log(e.target.classList);
                let targetClass = e.target.classList;
                if(targetClass.contains('project-card')) {
                    let overlay = appCard.childNodes[1];
                    overlay.style.display = 'none';
                }    
            });
            
            projectsContainer.insertBefore(appCard, bottomGradient);
                
        });

    } else {
        gif.setAttribute('src', `${datas[i].url}`);
        gif.setAttribute('alt', `${datas[i].title}`);
        // gif.setAttribute('title', `${gifs[i].title}`);
        title.innerHTML = datas[i].title;
    }
    
}

