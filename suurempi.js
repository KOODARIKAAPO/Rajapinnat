// a) Kysyy käyttäjältä kaksi lukua ja ilmoittaa niistä suuremman
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Anna ensimmäinen luku: ", (vastaus1) => {
    rl.question("Anna toinen luku: ", (vastaus2) => {
        const luku1 = Number(vastaus1);
        const luku2 = Number(vastaus2);

        if (isNaN(luku1) || isNaN(luku2)) {
            console.log("Anna vain numeroita.");
        } else if (luku1 > luku2) {
            console.log("Suurempi luku on " + luku1);
        } else if (luku2 > luku1) {
            console.log("Suurempi luku on " + luku2);
        } else {
            console.log("Luvut ovat yhtä suuret.");
        }
        rl.close();
    });
});
