document.addEventListener("DOMContentLoaded", function () {
    const perguntas = [
        "Qual o seu sabor de bolo favorito?",
        "Qual a sua cobertura preferida?",
        "Você gostaria de adicionar alguma fruta?",
    ];

    const respostas = [];
    let perguntaAtual = 0;

    const containerPerguntas = document.getElementById("container-perguntas");
    const containerResultado = document.getElementById("container-resultado");
    const listaResultado = document.getElementById("lista-resultado");
    const proximoBtn = document.getElementById("proximo");
    const inicioBtn = document.getElementById("inicio-btn");

    function mostrarPergunta() {
        const pergunta = perguntas[perguntaAtual];
        document.getElementById("pergunta").innerText = pergunta;
    }

    proximoBtn.addEventListener("click", function () {
        const resposta = document.getElementById("resposta").value;
        respostas.push(resposta);
        document.getElementById("resposta").value = "";

        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {
            mostrarPergunta();
        } else {
            mostrarResultado();
        }
    });

    function mostrarResultado() {
        containerPerguntas.classList.add("hidden");
        containerResultado.classList.remove("hidden");

        respostas.forEach(function (resposta, index) {
            const li = document.createElement("li");
            li.innerText = perguntas[index] + " " + resposta;
            listaResultado.appendChild(li);
        });
    }

    inicioBtn.addEventListener("click", function () {
        containerResultado.classList.add("hidden");
        containerPerguntas.classList.remove("hidden");
        perguntaAtual = 0;
        respostas.length = 0;
        mostrarPergunta();
    });

    mostrarPergunta();
});
