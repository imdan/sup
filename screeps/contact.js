let name = document.getElementById('name'),
  nameLabel = document.getElementById('name-label'),
  email = document.getElementById('email'),
  emailLabel = document.getElementById('email-label'),
  msg = document.getElementById('msg'),
  form = document.getElementById('form');

let placeholders = [
  'seriously, whatever you want...',
  'really though, just say hey, give some feedback, anything...',
  'seriously? still nothing coming to mind? just smash your keyboard and hit send...',
  'dude...just put some words in the box and push the button...',
  'anything I could help with maybe? some kind of service I could possibly provide...',
  "I'd love to help...",
  '...gonna have to start this loop over soon...',
  '......anything......'
];

let alert = document.getElementById('alert'),
  icon = document.getElementById('icon'),
  alertMsg = document.getElementById('alert-msg');

let i = 0;

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    alertSuccess();
    localStorage.setItem('submitted', false);
  }, 1500);
});

name.addEventListener('focus', () => addFocus('name'));
name.addEventListener('blur', () => removeFocus('name'));

email.addEventListener('focus', () => addFocus('email'));
email.addEventListener('blur', () => removeFocus('email'));

msg.addEventListener('focus', () => addFocus('msg'));
msg.addEventListener('blur', () => removeFocus('msg'));

form.addEventListener('submit', e => validateForm(e));

function addFocus(which) {
  if (which === 'name') {
    nameLabel.style.opacity = '.75';
    name.setAttribute('placeholder', '');
  } else if (which === 'email') {
    emailLabel.style.opacity = '.75';
    email.setAttribute('placeholder', '');
  } else if (which === 'msg') {
    msg.setAttribute('placeholder', '');
  }
}

function removeFocus(which) {
  if (which === 'name') {
    nameLabel.style.opacity = '.5';
    name.setAttribute('placeholder', 'Johnny Doe');
  } else if (which === 'email') {
    emailLabel.style.opacity = '.5';
    email.setAttribute('placeholder', 'johnnyd123@gmail.com');
  } else if (which === 'msg') {
    msg.setAttribute('placeholder', `${placeholders[i]}`);
    i < placeholders.length - 1 ? i++ : (i = 0);
  }
}

function validateName() {
  const re = /^[a-zA-Z ]{2,20}$/;

  if (!re.test(name.value)) {
    name.style.boxShadow = '0px 0px 4px rgba(255, 0, 0, 0.25)';

    setTimeout(() => {
      name.style.boxShadow = '0px 0px 4px rgba(0, 0, 0, 0.25)';
    }, 3000);
    return false;
  } else {
    return true;
  }
}

function validateEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.style.boxShadow = '0px 0px 4px rgba(255, 0, 0, 0.25)';

    setTimeout(() => {
      email.style.boxShadow = '0px 0px 4px rgba(0, 0, 0, 0.25)';
    }, 3000);
    return false;
  } else {
    return true;
  }
}

function validateMsg() {
  if (msg.value.length < 2) {
    msg.style.boxShadow = '0px 0px 4px rgba(255, 0, 0, 0.25)';

    setTimeout(() => {
      msg.style.boxShadow = '0px 0px 4px rgba(0, 0, 0, 0.25)';
    }, 3000);
    return false;
  } else {
    return true;
  }
}

function validateForm(e) {
  let validName = validateName(),
    validEmail = validateEmail(),
    validMsg = validateMsg();

  if (!validName || !validEmail || !validMsg) {
    e.preventDefault();
    alert.style.display = 'unset';
    alert.classList.add('alert-err');
    icon.classList.add('fa-exclamation-circle');

    let output = [];

    if (!validName) output.push('name');
    if (!validEmail) output.push('email');
    if (!validMsg) output.push('message');

    // console.log(output);

    // idk about messaging, kinda want to change it       !!!!!!!!!!!!!!!!!

    if (output.length === 1) {
      alertMsg.innerHTML = `that ${output[0]} won\'t work...`;
    } else if (output.length > 1 && output.length < 3) {
      let newOutput = output.join(' and ');
      alertMsg.innerHTML = `that ${newOutput} won\'t work...`;
    } else {
      alertMsg.innerHTML = `you missed all three somehow...`;
    }

    setTimeout(() => {
      alert.style.display = 'none';
      alert.classList.remove('alert-err');
      icon.classList.remove('fa-exclamation-circle');
      output = [];
      // console.log(output);
    }, 3000);
  } else {
    // this preventDefault is preventing form submit         !!!!!!!!!!!!!!!
    e.preventDefault();
    localStorage.setItem('submitted', true);
    let fullName = name.value.split(' ');
    let firstName = fullName[0];
    localStorage.setItem('localName', `${firstName}`);
    return;
  }
}

function alertSuccess() {
  let submitted = localStorage.getItem('submitted'),
    localName = localStorage.getItem('localName');

  if (submitted !== 'false') {
    alert.style.display = 'unset';
    alert.classList.add('alert-success');
    icon.classList.add('fa-check-circle');
    alertMsg.innerHTML = `got it, thanks ${localName}`;

    setTimeout(() => {
      alert.style.display = 'none';
      alert.classList.remove('alert-err');
      icon.classList.remove('fa-exclamation-circle');
      // console.log(output);
    }, 3000);
  } else {
    return;
  }
}
