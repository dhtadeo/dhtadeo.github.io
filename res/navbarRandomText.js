var initialRandomText = document.getElementById('init-random-text');

// Text array
var text = [
    "DOUBLE TIPPED TERROR",
    "I would rather eat poop with my biggest fan than eat steak and lobstir with my biggest fan",
    "I'd choose 1 dollar today than get 1 billion dollars today because it will motivate me to hustle harder",
    "People be complaining about billionaires they're lucky I'm not a billionaire",
    "Fuckass fuckshit",
    `"Unfortunate" doesn't begin to describe my series, this game rewards blind luck and nothing else, I am beyond convinced at this point.`,
    "Penis Inspection Day - Today At 3 AM",
    "Holy flarp. Hoooooly gloopus",
    "Chen what is your second least favorite minority?",
    "GAYASHIT",
    "Epstein didn't kill himself!",
    "Who up playing with they Pee and Poop Soup Fleshlight Deluxe (1993)",
    "If you're a police officer & someone's killed a baby, you aren't going to arrest the baby",
    "I WILL SUCK ANY DICK TO BE THE VERIFIER OF OROCHI! KNOBBELBOY? SLURP! PLATNUU? SLURP SLURP! ZEPHIROX? SLURP SLURP SLURP!",
    "Suck on my nuts and die",
    "I don't care about the law. I don't care about society. I don't give a shit what happens next. I'm gonna fuck this guy's dog.",
    "How tf do vegans not eat meat I can't go one day without meat in my mouth",
    "Balls Out Of Place (BOOP)",

    "44 GUATEMALTECO",
    "Minisugis, ¡me golpearon!",
    "Me pasaré entonces In Silico sin monedas",
    'Acabo de "inventar" accidentalmente una trolleada al estilo del "Que-so"  Consiste en que alguien te diga "We" y le respondas "So" (we-so, hueso) XD',
    "🔵 Confirmado... Se nos acaba lo gratis. WhatsApp empieza a cobrar los mensajes por el chat a 0.37 centavos. Reenvía este mensaje a más de 9 personas de tus contactos y te será gratuito de por vida fíjate y se pondrá verde la pelotita de arriba. Hazlo y verás.",
    "Hola... no se como decirte esto pero te amo, te amo con toda mi alma, siempre fui timido contigo porque no se como declararme, llevo mucho tiempo pensando en declararme, llevamos 1 mes como amigos pero quiero llegar más que amigos",
    "Avenida Instituto Tecnológico Número 1150, Jardines de la Montaña, 84066 Nogales, Sonora",
    "Man me salió un gemido y sonó re cute uwu"
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
