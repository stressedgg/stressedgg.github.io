const websites = {
    Facebook: 10,
    Google: 15,
    Amazon: 20,
    Twitter: 12,
    Microsoft: 18,
};

const individuals = {
    'John Doe': 5,
    'Jane Smith': 8,
    'Sam Johnson': 6,
    'Emily Williams': 10,
};

let playerMoney = 100;

function showOutput(message) {
    const output = document.getElementById('output');
    output.textContent += message + '\n';
    output.scrollTop = output.scrollHeight;
}

function clearOutput() {
    const output = document.getElementById('output');
    output.textContent = '';
}

function hackWebsite() {
    const website = getRandomProperty(websites);
    const moneyEarned = websites[website];
    showOutput(`Hacked ${website} and earned $${moneyEarned}.`);
    playerMoney += moneyEarned;
    showOutput(`Your current balance: $${playerMoney}`);
}

function hackIndividual() {
    const individual = getRandomProperty(individuals);
    const moneyEarned = individuals[individual];
    showOutput(`Hacked ${individual}.`);
    showOutput(`Now, solve the challenge to earn $${moneyEarned}.`);
    showOutput('Enter the answer in the console below:');
    showOutput('');

    // Trigger a hacking challenge for the individual
    startChallenge(individual, moneyEarned);
}

function getRandomProperty(obj) {
    const keys = Object.keys(obj);
    return keys.length > 0 ? keys[Math.floor(Math.random() * keys.length)] : null;
}

function memoryPuzzle(callback) {
    // Replace this with your own memory puzzle implementation
    showOutput('Memory Puzzle: Memorize the sequence "1234".');
    let userAnswer = '';
    const correctAnswer = '1234';

    // Prompt player for input in the console
    const inputHandler = (event) => {
        const key = event.key;
        if (key === 'Enter') {
            // Validate the user's answer and call the callback
            userAnswer = userAnswer.trim();
            if (userAnswer === correctAnswer) {
                showOutput('Correct! You earned $50 for solving the memory puzzle.');
                playerMoney += 50;
            } else {
                showOutput('Incorrect! The puzzle is not completed.');
            }
            showOutput(`Your current balance: $${playerMoney}`);
            document.removeEventListener('keydown', inputHandler);
            callback();
        } else {
            userAnswer += key;
        }
    };

    document.addEventListener('keydown', inputHandler);
}

function triviaQuestion(callback) {
    // Replace this with your own trivia question implementation
    showOutput('Trivia Question: What is the capital of France?');
    let userAnswer = '';
    const correctAnswer = 'paris';

    // Prompt player for input in the console
    const inputHandler = (event) => {
        const key = event.key;
        if (key === 'Enter') {
            // Validate the user's answer and call the callback
            userAnswer = userAnswer.trim().toLowerCase();
            if (userAnswer === correctAnswer) {
                showOutput('Correct! You earned $50 for answering the trivia question.');
                playerMoney += 50;
            } else {
                showOutput('Incorrect! The question is not answered correctly.');
            }
            showOutput(`Your current balance: $${playerMoney}`);
            document.removeEventListener('keydown', inputHandler);
            callback();
        } else {
            userAnswer += key;
        }
    };

    document.addEventListener('keydown', inputHandler);
}

function startChallenge(individual, moneyEarned) {
    // Simulate a 50% chance of a memory puzzle, otherwise a trivia question
    if (Math.random() < 0.5) {
        memoryPuzzle(() => {
            showOutput(`Congratulations! You earned $${moneyEarned} for hacking ${individual}.`);
            showOutput(`Your current balance: $${playerMoney}`);
        });
    } else {
        triviaQuestion(() => {
            showOutput(`Congratulations! You earned $${moneyEarned} for hacking ${individual}.`);
            showOutput(`Your current balance: $${playerMoney}`);
        });
    }
}

function hack(type) {
    if (type === 'website') {
        hackWebsite();
    } else if (type === 'individual') {
        hackIndividual();
    }
}

function main() {
    showOutput('Welcome to Terminal Takedown - The Hacking Game!');
    showOutput('You start with $100. Use your hacking skills to earn more money.');

    // Clear the console every 4 seconds
    setInterval(clearOutput, 4000);
}

main();
