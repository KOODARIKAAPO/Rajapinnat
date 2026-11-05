// b) Tutkii, onko annettu sana palindromi
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function onPalindromi(sana) {
    const pienet = sana.toLowerCase();
    const takaperin = pienet.split("").reverse().join("");
    return pienet === takaperin;
}

rl.question("Anna sana: ", (sana) => {
    sana = sana.trim();
    if (onPalindromi(sana)) {
        console.log(sana + " on palindromi.");
    } else {
        console.log(sana + " ei ole palindromi.");
    }
    rl.close();
});
