const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O início da inteligência artificial.A Inteligência Artificial (IA) começou na década de 1950, com o termo sendo criado por John McCarthy em 1956 durante uma conferência em Dartmouth. Os primeiros avanços incluíram programas como o de xadrez "Deep Blue", mas o progresso foi intermitente, com períodos de otimismo seguidos por "invernos da IA". A popularidade da IA cresceu nos anos 2000, impulsionada pelo aumento do poder computacional, disponibilidade de grandes volumes de dados e novas técnicas de aprendizado profundo.",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Não funciona essa tecnologia tecnológia. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "A ia nas empresas",
        alternativas: [
            {
                texto: "A IA nas empresas melhora a eficiência, automatiza processos e auxilia na tomada de decisões estratégicas. É usada em atendimento ao cliente, análise de dados e otimização de operações. Apesar dos benefícios, exige cuidado com questões éticas e a necessidade de adaptação organizacional.",
                afirmacao: "Você consegue fazer suas atividades mais rápidas"
            },
            {
                texto: "Em 2024, cerca de 73% das empresas nos EUA adotaram IA em alguma área de seus negócios, e globalmente, 55% das organizações utilizam IA para ganhar vantagem competitiva.",
                afirmacao: "Eu conheço alguém que perdeu o emprego por causa da inteligência artificial."
            }
        ]
    },
    {
        enunciado: "Os dois lados da moeda.",
        alternativas: [
            {
                texto: "Defendo a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "A IA pode causar perda de empregos, perpetuar preconceitos, comprometer a privacidade e ser usada para fins maliciosos. Além disso, a falta de transparência em seus processos dificulta a correção de erros e a responsabilização.",
                afirmacao: "A inteligência artificial pode causar perda de empregos, perpetuar preconceitos, comprometer a privacidade e ser usada para fins maliciosos. Além disso, a falta de transparência em seus processos dificulta a correção de erros e a responsabilização."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
