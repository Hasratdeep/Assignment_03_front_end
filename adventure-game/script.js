var currentState = 0;

const story = [
    {
        question: "When you wake up in a dark forest, cold night, what will you do?",
        choices: [
            { label: "Seek for help", nextState: 1 },
            { label: "Walk down back", nextState: 2 }
        ]
    },
    {
        question: "You are walking through the path and"
                + "suddenly sees a bear approaching towards you what will you do?",
        choices: [
            { label: "Fight the bear", nextState: 3 },
            { label: "Run away", nextState: 4 }
        ]
    },
    {
        question: "You are walking through the path"
                + "and suddenly sees an old lady laughing loudly"
                + "with a map in her hand, will you accept it?",
        choices: [
            { label: "Accept map", nextState: 5 },
            { label: "Refuse map", nextState: 6 }
        ]
    }
];
    
function renderQuestion() {
    const questionText = story[currentState].question;
    document.getElementById('question').textContent = questionText;

    const answers = document.getElementById('answers');

   
    story[currentState].choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.label;
        button.onclick = () => {
            currentState = choice.nextState;
            renderQuestion();
        };
        answers.appendChild(button);
    });

   
    document.getElementById('next-btn').style.display = 'none';
}


function nextQuestion() {
    renderQuestion();
}


