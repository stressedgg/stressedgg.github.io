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
    showOutput(`Hacked ${individual} and earned $${moneyEarned}.`);
    playerMoney += moneyEarned;
    showOutput(`Your current balance: $${playerMoney}`);
}

function getRandomProperty(obj) {
    const keys = Object.keys(obj);
    return keys.length > 0 ? keys[Math.floor(Math.random() * keys.length)] : null;
}

function memoryPuzzle() {
    // Replace this with your own memory puzzle implementation
    showOutput('Memory Puzzle: Memorize the sequence "1234".');
    const userAnswer = prompt('Enter the memorized sequence:');
    if (userAnswer === '1234') {
        showOutput('Correct! You earned $50 for solving the memory puzzle.');
        playerMoney += 50;
    } else {
        showOutput('Incorrect! The puzzle is not completed.');
    }
    showOutput(`Your current balance: $${playerMoney}`);
}

function triviaQuestion() {
    // Replace this with your own trivia question implementation
    showOutput('Trivia Question: What is the capital of France?');
    const userAnswer = prompt('Your answer:');
    if (userAnswer.toLowerCase() === 'paris') {
        showOutput('Correct! You earned $50 for answering the trivia question.');
        playerMoney += 50;
    } else {
        showOutput('Incorrect! The question is not answered correctly.');
    }
    showOutput(`Your current balance: $${playerMoney}`);
}

function startChallenge() {
    showOutput('Solving the hacking challenge...');
    // Simulate a 50% chance of a memory puzzle, otherwise a trivia question
    if (Math.random() < 0.5) {
        memoryPuzzle();
    } else {
        triviaQuestion();
    }
}

function hack(type) {
    if (type === 'website') {
        hackWebsite();
    } else if (type === 'individual') {
        hackIndividual();
    }

    // Trigger a hacking challenge after every successful hack
    startChallenge();
}

function main() {
    showOutput('Welcome to Terminal Takedown - The Hacking Game!');
    showOutput('You start with $100. Use your hacking skills to earn more money.');

    // Clear the console every 4 seconds
    setInterval(clearOutput, 4000);
}

main();
