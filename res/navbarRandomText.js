var initialRandomText = document.getElementById('init-random-text');

// Text array
var text = [
    `I would rather eat poop with my biggest fan than eat steak and lobstir with my biggest fan`,
    `I'd choose 1 dollar today than get 1 billion dollars today because it will motivate me to hustle harder`,
    `People be complaining about billionaires they're lucky I'm not a billionaire`,
    `Penis Inspection Day - Today At 3 AM`,
    `Holy flarp! Hoooooly gloopus!`,
    `Never ask Chen what is her second least favorite minority`,
    `Epstein didn't kill himself!`,
    `Suck on my nuts and die`,
    `I don't care about the law. I don't care about society. I don't give a shit what happens next. I'm gonna fuck this guy's dog.`,
    `How tf do vegans not eat meat I can't go one day without meat in my mouth`,
    `44 GUATEMALTECO`,
    `Minisugis, ¡me golpearon!`,
    `Me pasaré entonces In Silico sin monedas`,
    `Acabo de "inventar" accidentalmente una trolleada al estilo del "Que-so"  Consiste en que alguien te diga "We" y le respondas "So" (we-so, hueso) XD`,
    `C. Covadonga, 11, 52005 Melilla, Melilla, España - Gabriel Galera Mateo 35.287361, -2.950751`,
    `Como diría Jordix: "Se me olvidó poner lo que decía"`,
    `Ahora en HD`,
    `Concha de la lora`,
    `Cabrones`,
    `El papá de este wey: ( ͡° ͜ʖ ͡°)`,
    `My mamaguebo reaction`,
    `que`,
    `La venganza por los caídos`,
    `Cap scale 1000000000000000 🧢`,
    `Guitar no hizo nada malo #advysave #advyin #ilikeminors`,
    `Loser!! Get a life!`,
    `𝐅𝐑𝐈𝐄𝐍𝐃𝐒 𝐀𝐑𝐄 𝐒𝐓𝐑𝐎𝐍𝐆𝐄𝐑 𝐓𝐎𝐆𝐄𝐓𝐇𝐄𝐑 ✧  🎀  𝒸𝒽𝒾𝓁𝒹 𝓅🌺𝓇𝓃 𝓁𝒾𝓃𝓀𝓈 𝒾𝓃 𝓉𝒽𝑒 𝒹𝑒𝓈𝒸𝓇𝒾𝓅𝓉𝒾💗𝓃  🎀  ✧`,
    `ANT FARM GO 🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜`,
    `Glarpnorp schneeble bop! Jong gong lorbsday! Jong gong lorbsday! Hrook Uber hrook.`,
    `Hello I like pussy`,
    `Das Hodenverstümmelung`,
    `¡Así se festeja en el obelisco!`,
    `they just freaking raised the age of consent in japan. I'm so done. One of the most sugoi things japan has ever done and they take it away? I loved Japan but i hate japan now.`,
    `φρόττινγ`
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