// Oppgave 1: Telle fra 1 til 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
    document.write(i + " ");
}
document.write("<br><br>");

// Oppgave 2: Passord
const riktigPassord = "abc123";

// a) Uendelig til riktig passord
while (prompt("Skriv inn passord:") !== riktigPassord) {
    // Loop until correct
}
document.write("<p>Riktig passord! Du er logget inn.</p>");
console.log("Riktig passord!");

// b) Maks 3 forsøk
let innlogget = false;
for (let forsok = 1; forsok <= 3; forsok++) {
    if (prompt(`Skriv inn passord (forsøk ${forsok} av 3):`) === riktigPassord) {
        innlogget = true;
        break;
    }
}
document.write(
    innlogget
        ? "<p>Innlogging vellykket!</p>"
        : "<p>For mange forsøk. Tilgang nektet.</p>"
);
console.log(
    innlogget ? "Innlogging vellykket!" : "For mange forsøk. Tilgang nektet."
);

// Oppgave 3: Oddetall / Partall
const valg = prompt("Vil du se 'oddetall' eller 'partall' fra 0 til 100?");
if (valg === "oddetall" || valg === "partall") {
    const start = valg === "oddetall" ? 1 : 0;
    for (let n = start; n <= 100; n += 2) {
        console.log(n);
        document.write(n + " ");
    }
} else {
    document.write("<p>Ugyldig valg</p>");
    console.log("Ugyldig valg");
}
document.write("<br><br>");

// Oppgave 4: Gangetabellen
document.write("<h3>Gangetabellen</h3>");
for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++) {
        const produkt = a * b;
        document.write(`${a} x ${b} = ${produkt}<br>`);
        console.log(`${a} x ${b} = ${produkt}`);
    }
    document.write("<br>");
}
