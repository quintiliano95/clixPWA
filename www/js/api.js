// Função para realizar o login
function login(email, password) {
    // Exemplo de requisição POST para a API Rest da Plano
    fetch('https://api.plano.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem('userToken', data.token);
            showScreen('home-screen');
            // Aqui você pode chamar a função para sincronizar os clientes
        } else {
            alert('Login falhou. Verifique suas credenciais.');
        }
    })
    .catch(error => console.error('Erro:', error));
}

// Função para recuperar a senha
// function recoverPassword(email) {
//     // Exemplo de requisição POST para recuperação de senha na API Rest da Plano
//     fetch('https://api.plano.com/recover-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },

