// Variável para armazenar o saldo de Cpcoins
let saldoCpcoins = 0;

// Função para definir o saldo inicial
function setInitialBalance() {
    const initialBalanceInput = document.getElementById('initial-balance').value;

    // Verificar se o valor é válido
    if (isNaN(initialBalanceInput) || initialBalanceInput <= 0) {
        alert("Digite um saldo inicial válido.");
        return;
    }

    // Definir o saldo inicial
    saldoCpcoins = parseInt(initialBalanceInput);
    document.getElementById('cpcoins').textContent = saldoCpcoins;

    // Desabilitar o campo de saldo inicial após definir
    document.getElementById('initial-balance').disabled = true;
    document.querySelector('.initial-balance button').disabled = true;
}

// Função que é chamada quando o usuário clica no botão "Investir"
function invest() {
    // Obter valores da interface
    const stock = document.getElementById('stock').value;
    const amount = parseInt(document.getElementById('amount').value);

    // Verificar se o usuário tem saldo suficiente e se o valor é válido
    if (isNaN(amount) || amount <= 0) {
        alert("Digite um valor válido para investir.");
        return;
    }

    if (amount > saldoCpcoins) {
        alert("Saldo insuficiente para investir essa quantia.");
        return;
    }

    // Calcular resultado aleatório (ganho ou perda)
    const resultadoAleatorio = Math.random();
    let resultado = '';

    // Verificar se ganhou ou perdeu
    if (resultadoAleatorio < 0.5) {
        // Perdeu o investimento (chance de 50%)
        saldoCpcoins -= amount;
        resultado = `Você perdeu ${amount} Cpcoins investindo na ${stock}.`;
        document.getElementById('arrow-down').style.display = 'block';
        document.getElementById('arrow-up').style.display = 'none';
    } else {
        // Ganhou (chance de 50%), com multiplicador aleatório (2x ou 3x)
        const multiplicador = Math.random() < 0.5 ? 2 : 3;
        const ganho = amount * multiplicador;
        saldoCpcoins += ganho;
        resultado = `Você ganhou ${ganho} Cpcoins investindo na ${stock}!`;
        document.getElementById('arrow-up').style.display = 'block';
        document.getElementById('arrow-down').style.display = 'none';
    }

    // Atualizar o saldo e o resultado
    document.getElementById('cpcoins').textContent = saldoCpcoins;
    document.getElementById('result').textContent = resultado;
}
