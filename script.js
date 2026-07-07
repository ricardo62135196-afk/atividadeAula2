function corrigir() {
    const respostas = {
        q1: "b",
        q2: "b",
        q3: "a",
        q4: "a",
        q5: "b"
    };

    let pontos = 0;
    let totalRespondidas = 0;

    for (let pergunta in respostas) {
        const selecionada = document.querySelector(`input[name="${pergunta}"]:checked`);

        if (selecionada) {
            totalRespondidas++;
            if (selecionada.value === respostas[pergunta]) {
                pontos++;
            }
        }
    }

    const resultado = document.getElementById("resultado");

    if (totalRespondidas === 0) {
        resultado.innerHTML = "Selecione ao menos uma resposta antes de corrigir!";
        return;
    }

    if (totalRespondidas < Object.keys(respostas).length) {
        resultado.innerHTML = `Você respondeu ${totalRespondidas} de ${Object.keys(respostas).length} questões. Responda todas para ver seu resultado final.`;
        return;
    }

    let mensagem = "";
    if (pontos === 5) {
        mensagem = "🎉 Perfeito! Você acertou todas!";
    } else if (pontos >= 3) {
        mensagem = "👍 Muito bem!";
    } else {
        mensagem = "📚 Continue estudando, você vai melhorar!";
    }

    resultado.innerHTML = `Você acertou ${pontos} de 5 questões. ${mensagem}`;
}