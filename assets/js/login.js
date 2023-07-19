// Chamando a função Resposta

function resposta() {

    // Salvando as opções válidas em vetores para serem usados em validação.
    var arcticMusics = [1,3,5,6];
    var arcticMembers = [2,4];

    // Puxando os valores dos selects HTML e salvando em suas respectivas
    //variáveis.
    var respMusic = document.getElementById('music').value;
    var respMemb = document.getElementById('memb').value;

    // Variáveis booleanas que serão usadas em validação.
    var booleanMusic = 0; var booleanMemb = 0;

    // Laço de repetição do tipo for para percorrer o vetor arcticMusics
    for (let i=0; i<arcticMusics.length; i++) {

        // Condicional para validar a escolha do usuário.
        if (respMusic == arcticMusics[i]) {
            booleanMusic = 1;
        }
    }

    // Laço de repetição do tipo for para percorrer o vetor arcticMembers
    for (let j=0; j<arcticMembers.length; j++) {

        // Condicional para validar a escolha do usuário.
        if (respMemb == arcticMembers[j]) {
            booleanMemb = 1;
        }
    }

    // Condicional para dar o resultado final da validação.
    if (booleanMemb == 1 && booleanMusic == 1) {
        alert('Parabéns, você é digno(a) de entrar em nosso site!');
        window.location.href = '.././tela_inicial.html'; // Direciona para o site caso o usuário passe do teste.
    } else {
        alert('Você errou! Não é digno(a) de entrar em nosso site!');
        window.location.reload(); // Recarrega a página caso o usuário não passe no teste.
    }
}