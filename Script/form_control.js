// Déclaration des variables
var btnform = document.getElementById("btnform");
var btnjoinus = document.getElementById("btnjoinus");
var btnlogin = document.getElementById("btnlogin");

var forms = document.getElementById("forms");
var joinus = document.getElementById("joinus");
var login = document.getElementById("login");

var closejoinus = document.getElementById("closejoinus");
var closelogin = document.getElementById("closelogin");

// Affichage des formulaires
btnform.addEventListener('click', function() {
    if(forms.style.display === "none" || forms.style.display === "") {
        forms.style.display = "flex";
        joinus.style.display = "flex";
        login.style.display = "none";
    }else {
        forms.style.display = "none";
        joinus.style.display = "none";
        login.style.display = "none";
    }
}, false);

btnjoinus.addEventListener('click', function() {
    if(joinus.style.display === "none" || joinus.style.display === "") {
        joinus.style.display = "flex";
        login.style.display = "none";
    }else {
        joinus.style.display = "none";
        login.style.display = "flex";
    }
}, false);

btnlogin.addEventListener('click', function() {
    if(login.style.display === "none" || login.style.display === "") {
        login.style.display = "flex";
        joinus.style.display = "none";
    }else {
        login.style.display = "none";
        joinus.style.display = "flex";
    }
}, false);

//Fermerture des formulaires
closejoinus.addEventListener('click', function() {
    if(forms.style.display === "flex" || forms.style.display === "") {
        forms.style.display = "none";
    }else {
        forms.style.display = "flex";
    }
}, false);
closelogin.addEventListener('click', function() {
    if(forms.style.display === "flex" || forms.style.display === "") {
        forms.style.display = "none";
    }else {
        forms.style.display = "flex";
    }
}, false);