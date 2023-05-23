var initialRandomText = document.getElementById('init-random-text');

// Text array
var text = [
    "DOUBLE TIPPED TERROR",
    "I would rather eat poop with my biggest fan than eat steak and lobstir with my biggest fan",
    "I'd choose 1 dollar today than get 1 billion dollars today because it will motivate me to hustle harder",
    "People be complaining about billionaires they're lucky I'm not a billionaire",
    "Fuckass fuckshit",
    `"Unfortunate" doesn't begin to describe my series, this game rewards blind luck and nothing else, I am beyond convinced at this point.`,
    "44 GUATEMALTECO",
    "Minisugis, ¡me golpearon!",
    "Me pasaré entonces In Silico sin monedas",
    'Acabo de "inventar" accidentalmente una trolleada al estilo del "Que-so"  Consiste en que alguien te diga "We" y le respondas "So" (we-so, hueso) XD'
];

function chooseRandomText() {
    // Generate random index
    var indexRandom = Math.floor(Math.random() * text.length);

    // The choosen one
    var selectedOne = text[indexRandom];

    initialRandomText.textContent = selectedOne;

    console.log(`Text: ${initialRandomText.textContent}`);
}

chooseRandomText();