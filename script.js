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

function startChallenge() {
    showOutput('Solving the hacking challenge...');
    // Add your custom hacking challenge here
    setTimeout(() => {
        showOutput('Challenge completed!');
        // Award money for completing the challenge
        playerMoney += 50;
        showOutput('You earned $50 for completing the challenge.');
        showOutput(`Your current balance: $${playerMoney}`);
    }, 3000); // Simulating a 3-second challenge completion delay
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
