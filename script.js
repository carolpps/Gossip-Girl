// Carrega as fofocas salvas neste navegador
let fofocasEnviadas = JSON.parse(localStorage.getItem("fofocasEnviadas")) || [];

function mostrarPagina(pagina) {
    const conteudo = document.getElementById("conteudo");

    // PÁGINA INICIAL
    if (pagina === "home") {
        conteudo.innerHTML = `
            <h2>Welcome!</h2>

            <p>
                Welcome to Gossip Girl.
                The latest gossip from the Upper East Side.
            </p>

            <p class="assinatura">
                XOXO, Gossip Girl.
            </p>
        `;
    }

    // PÁGINA DE FOFOCAS
    else if (pagina === "posts") {
        conteudo.innerHTML = `
            <h2>Spotted:</h2>

            <div class="publicacao">
                <span class="data">SEPTEMBER 15 · 08:30 AM</span>
                <h3>Serena van der Woodsen is back!</h3>
                <p>
                    Spotted: S on the steps of the Met.
                    Looks like our favorite blonde is back
                    in town. Did you miss her?
                </p>
                <p class="assinatura">XOXO, Gossip Girl.</p>
            </div>

            <div class="publicacao">
                <span class="data">SEPTEMBER 15 · 11:45 AM</span>
                <h3>Queen B is not happy...</h3>
                <p>
                    B was not exactly thrilled to see
                    S back in town. Could there be
                    trouble in paradise?
                </p>
                <p class="assinatura">XOXO, Gossip Girl.</p>
            </div>

            <div class="publicacao">
                <span class="data">SEPTEMBER 15 · 02:15 PM</span>
                <h3>A little secret between friends?</h3>
                <p>
                    Someone has been keeping a secret.
                    And you know what happens when
                    secrets get out...
                </p>
                <p class="assinatura">XOXO, Gossip Girl.</p>
            </div>

            <div id="novasFofocas"></div>
        `;

        const novasFofocas = document.getElementById("novasFofocas");

        fofocasEnviadas.forEach(function (fofoca) {
            const publicacao = document.createElement("div");
            publicacao.className = "publicacao";

            const data = document.createElement("span");
            data.className = "data";
            data.textContent = fofoca.data;

            const titulo = document.createElement("h3");
            titulo.textContent = fofoca.titulo || "A new tip has arrived...";

            const texto = document.createElement("p");
            texto.textContent = fofoca.texto;

            const assinatura = document.createElement("p");
            assinatura.className = "assinatura";
            assinatura.textContent = "XOXO, Gossip Girl.";

            publicacao.append(data, titulo, texto, assinatura);
            novasFofocas.appendChild(publicacao);
        });
    }

    // PÁGINA DE FOTOS
    else if (pagina === "pics") {
        conteudo.innerHTML = `
            <h2>Spotted in pictures</h2>

            <div class="galeria">
                <div class="foto">
                    <img src="imagens/serena.jpg" alt="Serena van der Woodsen">
                    <p>Serena van der Woodsen</p>
                </div>

                <div class="foto">
                    <img src="imagens/blair.jpg" alt="Blair Waldorf">
                    <p>Blair Waldorf</p>
                </div>

                <div class="foto">
                    <img src="imagens/chuck.jpg" alt="Chuck Bass">
                    <p>Chuck Bass</p>
                </div>

                <div class="foto">
                    <img src="imagens/nate.jpg" alt="Nate Archibald">
                    <p>Nate Archibald</p>
                </div>
            </div>
        `;
    }

    // PÁGINA DE LINKS
    else if (pagina === "links") {
        conteudo.innerHTML = `
            <h2>Links</h2>

            <p>All the important gossip starts here.</p>

            <p class="assinatura">XOXO, Gossip Girl.</p>
        `;
    }

    // PÁGINA DE ENVIO
    else if (pagina === "enviar") {
        conteudo.innerHTML = `
            <h2>Enviar fofoca</h2>
            <p>Tem algo para contar? Envie sua fofoca sem colocar seu nome!</p>

            <form id="formFofoca">
                <label for="tituloFofoca">Título:</label>
                <input
                    type="text"
                    id="tituloFofoca"
                    name="tituloFofoca"
                    placeholder="Escreva um título..."
                    required
                >

                <label for="fofoca">Sua fofoca:</label>
                <textarea id="fofoca" name="fofoca" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        `;
    }
}

// Escuta o envio do formulário
document.addEventListener("submit", function (evento) {
    if (evento.target.id === "formFofoca") {
        evento.preventDefault();

        const campoTitulo = document.getElementById("tituloFofoca");
        const tituloFofoca = campoTitulo.value.trim();

        const campoFofoca = document.getElementById("fofoca");
        const textoFofoca = campoFofoca.value.trim();

        if (tituloFofoca === "" || textoFofoca === "") {
            return;
        }

        const novaFofoca = {
            titulo: tituloFofoca,
            texto: textoFofoca,
            data: new Date().toLocaleString("pt-BR")
        };

        fofocasEnviadas.push(novaFofoca);

        // Salva as fofocas no navegador
        localStorage.setItem(
            "fofocasEnviadas",
            JSON.stringify(fofocasEnviadas)
        );

        alert("Fofoca enviada!");
        mostrarPagina("posts");
    }
});
const traducoes = {
    pt: {
        "Welcome!": "Bem-vinda!",
        "Welcome to Gossip Girl. The latest gossip from the Upper East Side.": "Bem-vinda ao Gossip Girl. As últimas fofocas do Upper East Side.",
        "Spotted:": "Flagra:",
        "Serena van der Woodsen is back!": "Serena van der Woodsen está de volta!",
        "Queen B is not happy...": "A Rainha B não está feliz...",
        "A little secret between friends?": "Um segredinho entre amigas?",
        "Spotted in pictures": "Flagrada em fotos",
        "Links": "Links",
        "All the important gossip starts here.": "Todas as fofocas importantes começam aqui.",
        "Enviar fofoca": "Enviar fofoca",
        "Tem algo para contar? Envie sua fofoca sem colocar seu nome!": "Tem algo para contar? Envie sua fofoca sem colocar seu nome!",
        "Título:": "Título:",
        "Sua fofoca:": "Sua fofoca:",
        "Enviar": "Enviar",
        "XOXO, Gossip Girl.": "XOXO, Gossip Girl.",
        "Spotted: S on the steps of the Met. Looks like our favorite blonde is back in town. Did you miss her?":
        "Flagrada: S nos degraus do Met. Parece que nossa loira favorita voltou à cidade. Sentiram saudades?",
        "B was not exactly thrilled to see S back in town. Could there be trouble in paradise?":
        "B não ficou nada feliz ao ver S de volta à cidade. Será que há problemas no paraíso?",
        "Someone has been keeping a secret. And you know what happens when secrets get out...":
        "Alguém está guardando um segredo. E você sabe o que acontece quando segredos são revelados...",
    },
    en: {
        "Bem-vinda!": "Welcome!",
        "Bem-vinda ao Gossip Girl. As últimas fofocas do Upper East Side.": "Welcome to Gossip Girl. The latest gossip from the Upper East Side.",
        "Flagra:": "Spotted:",
        "Serena van der Woodsen está de volta!": "Serena van der Woodsen is back!",
        "A Rainha B não está feliz...": "Queen B is not happy...",
        "Um segredinho entre amigas?": "A little secret between friends?",
        "Flagrada em fotos": "Spotted in pictures",
        "Todas as fofocas importantes começam aqui.": "All the important gossip starts here.",
        "Enviar fofoca": "Send a tip",
        "Tem algo para contar? Envie sua fofoca sem colocar seu nome!": "Got something to share? Send your tip without your name!",
        "Título:": "Title:",
        "Sua fofoca:": "Your gossip:",
        "Enviar": "Send",
        "XOXO, Gossip Girl.": "XOXO, Gossip Girl.",
        "Flagrada: S nos degraus do Met. Parece que nossa loira favorita voltou à cidade. Sentiram saudades?":
        "Spotted: S on the steps of the Met. Looks like our favorite blonde is back in town. Did you miss her?",
        "B não ficou nada feliz ao ver S de volta à cidade. Será que há problemas no paraíso?":
        "B was not exactly thrilled to see S back in town. Could there be trouble in paradise?",
        "Alguém está guardando um segredo. E você sabe o que acontece quando segredos são revelados...":
        "Someone has been keeping a secret. And you know what happens when secrets get out...",
    },
    es: {
        "Welcome!": "¡Bienvenida!",
        "Welcome to Gossip Girl. The latest gossip from the Upper East Side.": "Bienvenida a Gossip Girl. Los últimos chismes del Upper East Side.",
        "Spotted:": "¡Visto!",
        "Serena van der Woodsen is back!": "¡Serena van der Woodsen ha vuelto!",
        "Queen B is not happy...": "La reina B no está feliz...",
        "A little secret between friends?": "¿Un pequeño secreto entre amigas?",
        "Spotted in pictures": "Visto en fotos",
        "Links": "Enlaces",
        "All the important gossip starts here.": "Todos los chismes importantes empiezan aquí.",
        "Enviar fofoca": "Enviar chisme",
        "Tem algo para contar? Envie sua fofoca sem colocar seu nome!": "¿Tienes algo que contar? ¡Envía tu chisme sin poner tu nombre!",
        "Título:": "Título:",
        "Sua fofoca:": "Tu chisme:",
        "Enviar": "Enviar",
        "XOXO, Gossip Girl.": "XOXO, Gossip Girl.",
        "Spotted: S on the steps of the Met. Looks like our favorite blonde is back in town. Did you miss her?":
        "Visto: S en las escaleras del Met. Parece que nuestra rubia favorita ha vuelto a la ciudad. ¿La extrañaron?",
        "B was not exactly thrilled to see S back in town. Could there be trouble in paradise?":
        "B no se alegró mucho de ver a S de vuelta en la ciudad. ¿Habrá problemas en el paraíso?",
        "Someone has been keeping a secret. And you know what happens when secrets get out...":
        "Alguien ha estado guardando un secreto. Y ya sabes qué pasa cuando los secretos salen a la luz...",
    }
};

function mudarIdioma(idioma) {
    const elementos = document.querySelectorAll(
        "#conteudo h2, #conteudo h3, #conteudo p, #conteudo label, #conteudo button, #conteudo span"
    );

    elementos.forEach(function (elemento) {
        // Remove espaços extras e quebras de linha
        const textoAtual = elemento.textContent.trim().replace(/\s+/g, " ");

        // Procura uma tradução que corresponda ao texto
        const traducao = Object.entries(traducoes[idioma]).find(function ([original]) {
            return original.trim().replace(/\s+/g, " ") === textoAtual;
        });

        if (traducao) {
            elemento.textContent = traducao[1];
        }
    });
}

    elementos.forEach(function (elemento) {
        const textoAtual = elemento.textContent.trim();

        if (traducoes[idioma][textoAtual]) {
            elemento.textContent = traducoes[idioma][textoAtual];
        }
    });
