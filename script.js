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

function mathChallenge() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    const expression = `${num1} ${operator} ${num2}`;
    const correctAnswer = eval(expression);

    showOutput(`Solve the following math challenge: ${expression}`);
    const userAnswer = prompt('Your answer:');
    if (parseInt(userAnswer) === correctAnswer) {
        showOutput('Correct! You earned $50 for solving the challenge.');
        playerMoney += 50;
    } else {
        showOutput('Incorrect! The challenge is not completed.');
    }
    showOutput(`Your current balance: $${playerMoney}`);
}

function unscrambleChallenge() {
    const words = ['programming', 'hacking', 'security', 'cyber', 'password'];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const scrambledWord = randomWord.split('').sort(() => 0.5 - Math.random()).join('');

    showOutput(`Unscramble the word: ${scrambledWord}`);
    const userAnswer = prompt('Your answer:');
    if (userAnswer.toLowerCase() === randomWord) {
        showOutput('Correct! You earned $50 for solving the challenge.');
        playerMoney += 50;
    } else {
        showOutput('Incorrect! The challenge is not completed.');
    }
    showOutput(`Your current balance: $${playerMoney}`);
}

function startChallenge() {
    showOutput('Solving the hacking challenge...');
    // Simulate a 50% chance of a math challenge, otherwise unscramble challenge
    if (Math.random() < 0.5) {
        mathChallenge();
    } else {
        unscrambleChallenge();
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
