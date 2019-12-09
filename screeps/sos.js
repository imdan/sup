let bottle = document.getElementById('bottle'), 
    seen = localStorage.getItem("seen");


if (seen === "true") {
    bottle.style.display = 'none';
} else {
    bottle.style.display = 'block';
} 


setTimeout(function() {
    localStorage.setItem("seen", "true");
}, 60000);