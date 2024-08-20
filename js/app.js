// Função para verificar se o usuário já está logado
function checkIfLoggedIn() {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
        showScreen('home-screen');
    } else {
        showScreen('login-screen');
    }
}

// Função para mostrar a tela específica
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        if (screen.id === screenId) {
            screen.style.display = 'flex';
            screen.classList.add('active');
            setTimeout(() => {
                screen.style.opacity = '1';
            }, 50);
        } else {
            screen.style.opacity = '0';
            setTimeout(() => {
                screen.style.display = 'none';
                screen.classList.remove('active');
            }, 300);
        }
    });
}

// Login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Fazer requisição para a API Rest da Plano
    login(email, password);
});

// Esqueci minha senha
document.getElementById('forgot-password-btn').addEventListener('click', function() {
    showScreen('forgot-password-screen');
});

// Cancelar recuperação
document.getElementById('cancel-recovery-btn').addEventListener('click', function() {
    showScreen('login-screen');
});

// Recuperar minha senha
document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('recovery-email').value;

    // Fazer requisição para a API Rest da Plano para recuperação de senha
    recoverPassword(email);
});

// Abrir/fechar menu lateral
document.getElementById('menu-btn').addEventListener('click', function() {
    const sideMenu = document.getElementById('side-menu');
    if (sideMenu.style.left === '0px') {
        sideMenu.style.left = '-250px';
    } else {
        sideMenu.style.left = '0px';
    }
});

// Navegar pelas telas usando o menu lateral
// document.getElementById('home-link').addEventListener('click', function() {
//     showScreen('home-screen');
// });
// document.getElementById('clients-link').addEventListener('click', function() {
//     showScreen('client-selection-screen');
// });
// document.getElementById('options-link').addEventListener('click', function() {
//     alert('Opções ainda não implementadas.');
// });

// Chamar verificação inicial de login ao carregar a página
window.onload = function() {
    showScreen('splash-screen');
    setTimeout(checkIfLoggedIn, 2000);  // Simula a verificação do usuário logado
};
