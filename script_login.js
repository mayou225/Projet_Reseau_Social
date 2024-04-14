document.addEventListener('DOMContentLoaded', () => {

    loginForm = document.getElementById('loginForm')

    frlng = document.getElementById('fr');
    englng = document.getElementById('eng');

    ll = document.getElementById('ll');
    log_button = document.getElementById('log-button');
    forg_pass = document.getElementById('forg_pass');
    inscrivez_vous = document.getElementById('inscrivez-vous');
    welcome_txt = document.getElementById('welcome_txt');

    frlng.addEventListener('click', () => {
        welcome_txt.innerText = "Bienvenu a ASY1009";
        ll.innerText = "Bienvenue dans le cours Web où nous apprenons des technologies vraiment cool!";
        log_button.innerText = "connectez-vous";
        forg_pass.innerText = "Mot de passe oublié";
        inscrivez_vous.innerText = "inscrivez-vous";
    })


    englng.addEventListener('click', () => {
        welcome_txt.innerText = "Welcome to ASY1009";
        ll.innerText = "Welcome to the web course where we learn some really cool technologies!";
        log_button.innerText = "log in";
        forg_pass.innerText = "Forgot your password";
        inscrivez_vous.innerText = "register";
    })

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === 'admin@gmail.com' && password === 'admin') {
            window.location.href = './index.html';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });

});