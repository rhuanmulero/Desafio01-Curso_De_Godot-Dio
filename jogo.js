var xpJogador = 0;

document.addEventListener('DOMContentLoaded', function() {
    atualizarRank();
});

function sairEmAventura() {
    var eventosAventura = [
        {
            mensagem: "Você conhece um jovem cavaleiro encantador em uma taverna.",
            imagem: "getulio.jpg",
            opcoes: [
                { texto: "Converse com ele e descubra mais sobre sua história.", xp: 50, continua: "Você descobre que o jovem cavaleiro é na verdade um príncipe disfarçado, em busca de aventuras incógnitas." },
                { texto: "Ignore-o e continue sua jornada.", xp: 0, continua: "Você segue em frente, deixando para trás a oportunidade de conhecer mais sobre o misterioso cavaleiro." },
                { texto: "Seduza-o com seu charme.", xp: 100, continua: "Seu charme funciona e o jovem cavaleiro revela seus segredos mais profundos, prometendo lealdade eterna." }
            ]
        },
        
             {
        mensagem: "Você encontra um belo príncipe vagando pelo bosque.",
        imagem: "charles.jpg",
        opcoes: [
            { texto: "Aproxime-se dele e ofereça sua companhia.", xp: 100, continua: "O príncipe aceita sua companhia graciosamente, revelando-se um companheiro gentil e amigável durante toda a jornada." },
            { texto: "Ignore-o e siga em frente.", xp: 0, continua: "Você segue em frente, sem se preocupar com o belo príncipe, continuando sua jornada sozinho." },
            { texto: "Desconfie das intenções dele e mantenha distância.", xp: 50, continua: "Suas suspeitas provam ser infundadas, pois o príncipe apenas procurava um pouco de companhia em sua solitária jornada." }
        ]
    },
        {
            mensagem: "Você conhece uma talentosa artesã em uma feira de artesanato.",
            imagem: "bebel.jpg",
            opcoes: [
                { texto: "Converse com ela e descubra mais sobre sua arte.", xp: 50, continua: "A artesã compartilha animadamente sua paixão pelo artesanato, ensinando-lhe técnicas valiosas e histórias inspiradoras." },
                { texto: "Ignore-a e continue sua jornada.", xp: 0, continua: "Você segue adiante, deixando para trás a oportunidade de aprender com a talentosa artesã, mas focando em seu objetivo." },
                { texto: "Elogie seu trabalho e peça para aprender com ela.", xp: 100, continua: "Impressionada com seus elogios, a artesã concorda em ensinar-lhe seus segredos, estabelecendo uma valiosa mentoria." }
            ]
        },
        {
            mensagem: "Você se depara com uma encantadora dama em um jardim exuberante.",
        imagem: "rebby.jpg",
        opcoes: [
            { texto: "Aproxime-se dela e convide-a para um passeio.", xp: 100, continua: "A dama aceita seu convite com um sorriso gracioso, e vocês desfrutam de uma caminhada romântica pelos jardins, trocando histórias e risadas." },
            { texto: "Ignore-a e siga em frente.", xp: 0, continua: "Você continua sua jornada sem interagir com a encantadora dama, focando em seus próprios objetivos." },
            { texto: "Pergunte sobre o jardim e sua história.", xp: 50, continua: "A dama fica encantada com seu interesse e compartilha entusiasticamente histórias sobre o jardim, revelando segredos e curiosidades fascinantes." }
        ]
        },

        {
            mensagem: "Você encontra um grupo de bandidos que bloqueiam seu caminho.",
        imagem: "bandidos.jpg",
        opcoes: [
            { texto: "Prepare-se para lutar e defender-se.", xp: 100, continua: "Você se prepara para a batalha, enfrentando os bandidos com bravura e determinação, protegendo seu caminho com sucesso." },
            { texto: "Tente negociar com os bandidos para passar pacificamente.", xp: 50, continua: "Você tenta negociar com os bandidos, oferecendo uma troca justa para passar pacificamente, evitando um confronto direto e mantendo a paz." },
            { texto: "Fuja e procure um caminho alternativo.", xp: 0, continua: "Você decide evitar um confronto, fugindo dos bandidos e procurando um caminho alternativo para continuar sua jornada." }
        ]
        },
        {
            mensagem: "Um monstro terrível emerge das sombras e bloqueia sua passagem.",
            imagem: "monstro.jpg",
            opcoes: [
                { texto: "Enfrente o monstro em uma batalha épica.", xp: 100 },
                { texto: "Procure por uma rota alternativa para evitar o confronto.", xp: 50 },
                { texto: "Tente acalmar o monstro com palavras ou magia.", xp: 0 }
            ]
        },
        {
            mensagem: "Um monstro terrível emerge das sombras e bloqueia sua passagem.",
        imagem: "monstro.jpg",
        opcoes: [
            { texto: "Enfrente o monstro em uma batalha épica.", xp: 100, continua: "Você enfrenta o monstro corajosamente em uma batalha épica, demonstrando sua força e habilidade, e emergindo vitorioso." },
            { texto: "Procure por uma rota alternativa para evitar o confronto.", xp: 50, continua: "Você decide evitar o confronto direto com o monstro, procurando por uma rota alternativa, contornando o perigo e seguindo em frente." },
            { texto: "Tente acalmar o monstro com palavras ou magia.", xp: 0, continua: "Você tenta acalmar o monstro com palavras tranquilizadoras ou magia, mas infelizmente suas tentativas são em vão, e o monstro ataca, forçando-o a recuar." }
        ]
        },
        {
            mensagem: "Um dragão feroz pousa em seu caminho, bloqueando sua progressão.",
        imagem: "dragao.jpg",
        opcoes: [
            { texto: "Desafie o dragão para uma batalha lendária.", xp: 100, continua: "Você aceita o desafio e enfrenta o dragão em uma batalha lendária, provando sua coragem e determinação ao derrotar a criatura imponente." },
            { texto: "Tente distrair o dragão enquanto você foge.", xp: 50, continua: "Você tenta distrair o dragão enquanto foge, mas suas tentativas são em vão, e o dragão logo percebe sua fuga, forçando-o a buscar uma nova estratégia." },
            { texto: "Negocie com o dragão, oferecendo algo de valor em troca de passagem segura.", xp: 0, continua: "Você tenta negociar com o dragão, oferecendo algo de valor em troca de passagem segura, mas o dragão não está interessado em suas ofertas e bloqueia sua passagem." }
        ]
        }
    ];

    var indice = Math.floor(Math.random() * eventosAventura.length);
    var evento = eventosAventura[indice];

    exibirEventoAventura(evento);
}

function escolherOpcao(xpGanho, continuação) {
    // Atualizar o XP do jogador com base no XP ganho
    xpJogador += xpGanho;
    console.log("XP Ganho:", xpGanho);
    console.log("XP Total do Jogador:", xpJogador);

    // Atualizar o rank do jogador
    atualizarRank();

    // Exibir a continuação da história
    var notificacoesTexto = document.getElementById("notificacoesTexto");
    if (notificacoesTexto) {
        notificacoesTexto.innerHTML = '<p>' + continuação + '</p>';
    } else {
        console.error("Elemento notificacoesTexto não encontrado.");
    }
}

function exibirEventoAventura(evento) {
    var notificacoesTexto = document.getElementById("notificacoesTexto");
    if (notificacoesTexto) {
        notificacoesTexto.innerHTML = '<img src="' + evento.imagem + '" alt="Imagem do evento">' + '<br>' +
            evento.mensagem + '<br>' +
            '<button onclick="escolherOpcao(' + evento.opcoes[0].xp + ', \'' + evento.opcoes[0].continua + '\')">' + evento.opcoes[0].texto + '</button>' +
            '<button onclick="escolherOpcao(' + evento.opcoes[1].xp + ', \'' + evento.opcoes[1].continua + '\')">' + evento.opcoes[1].texto + '</button>' +
            '<button onclick="escolherOpcao(' + evento.opcoes[2].xp + ', \'' + evento.opcoes[2].continua + '\')">' + evento.opcoes[2].texto + '</button>';
    } else {
        console.error("Elemento notificacoesTexto não encontrado.");
    }
}

function atualizarRank() {
    var textoRankElement = document.getElementById("textoRank");
    if (textoRankElement) {
        textoRankElement.textContent = obterRank(xpJogador);
    } else {
        console.error("Elemento textoRank não encontrado.");
    }
}

function obterRank(xp) {
    if (xp === 0) {
        return "Sem Rank";
    } else if (xp <= 1000) {
        return "Ferro";
    } else if (xp <= 2000) {
        return "Bronze";
    } else if (xp <= 5000) {
        return "Prata";
    } else if (xp <= 7000) {
        return "Ouro";
    } else if (xp <= 8000) {
        return "Platina";
    } else if (xp <= 9000) {
        return "Ascendente";
    } else if (xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}