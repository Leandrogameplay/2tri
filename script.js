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
        enunciado: "A IA nas empresas",
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
        enunciado: "desempenho ou desleixamento?",
        alternativas: [
            {
                texto: "Sim, a IA pode aumentar o desempenho de diversas maneiras. Ela automatiza tarefas repetitivas, melhora a análise de dados, fornece insights em tempo real e ajuda na tomada de decisões informadas. Além disso, a IA pode personalizar experiências e otimizar processos, resultando em maior eficiência e produtividade.",
                afirmacao: "A IA aumenta o desempenho ao automatizar tarefas, melhorar a análise de dados e otimizar processos, resultando em maior eficiência e produtividade."
            },
            {
                texto: "A IA não aumenta o desempenho, pois pode levar ao desleixamento, fazendo com que as pessoas dependam excessivamente da tecnologia e percam habilidades essenciais. Essa dependência pode resultar em falta de atenção e comprometimento nas atividades, diminuindo a qualidade e a eficácia.",
                afirmacao: "A IA não melhora o desempenho; na verdade, pode causar desleixamento, já que as pessoas se tornam excessivamente dependentes da tecnologia, o que leva à perda de habilidades importantes e à falta de atenção nas tarefas."
            }
        ]
    },
    {
        enunciado: "O futuro da IA",
        alternativas: [
            {
                texto: "O futuro da IA traz avanços significativos em áreas como saúde, transporte e educação, melhorando a personalização e otimizando processos. Questões éticas e de privacidade ganharão destaque, enquanto a colaboração entre humanos e máquinas se tornará essencial, focando em sistemas que complementem as habilidades humanas.",
                afirmacao: "O futuro da IA trará avanços significativos em diversas áreas, melhorando a personalização e a eficiência, enquanto questões éticas e de privacidade se tornarão cada vez mais relevantes."
            },
            {
                texto: "O futuro da IA pode apresentar desafios significativos, como o aumento do desemprego devido à automação, a intensificação das desigualdades sociais e a perpetuação de preconceitos através de algoritmos tendenciosos. Questões de privacidade e vigilância podem se agravar, com a coleta de dados pessoais se tornando mais invasiva. Além disso, a dependência crescente da tecnologia pode levar ao desleixamento das habilidades humanas e à falta de crítica em relação às decisões tomadas por sistemas automatizados.",
                afirmacao: "O futuro da IA pode trazer desafios como o aumento do desemprego, a ampliação das desigualdades sociais, a perpetuação de preconceitos e preocupações com privacidade, além de uma dependência crescente da tecnologia que pode levar ao desleixamento das habilidades humanas."
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
