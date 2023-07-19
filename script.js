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

function hack(type) {
    let target, moneyEarned;
    if (type === 'website') {
        target = getRandomProperty(websites);
    } else if (type === 'individual') {
        target = getRandomProperty(individuals);
    }

    moneyEarned = target ? target : 0;
    playerMoney += moneyEarned;
    showOutput(`You hacked ${target || 'nothing'} and earned $${moneyEarned}.`);
    showOutput(`Your current balance: $${playerMoney}`);
}

function getRandomProperty(obj) {
    const keys = Object.keys(obj);
    return keys.length > 0 ? obj[keys[Math.floor(Math.random() * keys.length)]] : null;
}

function showOutput(message) {
    const output = document.getElementById('output');
    const p = document.createElement('p');
    p.textContent = message;
    output.appendChild(p);
}
