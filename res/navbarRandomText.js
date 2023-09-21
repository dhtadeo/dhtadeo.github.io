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
    `Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans? Not only are they in the field egg group, which is mostly comprised of mammals, Vaporeon are an average of 3"03' tall and 63.9 pounds. this means they're large enough to be able to handle human dicks, and with their impressive Base stats for HP and access to Acid Armor, you can be rough with one. Due to their mostly water based biology, there's no doubt in my mind that an aroused Vaporeon would be incredibly wet, so wet that you could easily have sex with one for hours without getting sore. They can also learn the moves Attract, Baby-Doll eyes, Captivate, Charm and Tail Whip along with not having fur to hide nipples, so it'd be incredibly easy for one to get you in the mood. With their abilities Water Absorb and Hydration, they can easily recover from fatigue with enough water. No other Pokémon comes close with this level of compatibility. Also, fun fact, if you pull out enough, you can make your Vaporeon turn white. Vaporeon is literally built for human dick. Ungodly defense stat + high HP pool + Acid Armor means it can take cock all day, all shapes and sizes and still come for more.`,
    `Ant farm go 🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜`,
    `Glarpnorp schneeble bop! Jong gong lorbsday! Jong gong lorbsday! Hrook Uber hrook.`,
    `Hello I like pussy`,
    `Das Hodenverstümmelung`,
    `Cock and ball torture (CBT) is a sexual activity involving application of pain or constriction to the male genitals. This may involve directly painful activities, such as wax play, genital spanking, squeezing, ball-busting, genital flogging, urethral play, tickle torture, erotic electrostimulation or even kicking.[1] The recipient of such activities may receive direct physical pleasure via masochism, or emotional pleasure through erotic humiliation, or knowledge that the play is pleasing to a sadistic dominant. Many of these practices carry significant health risks.`,
    `¡Así se festeja en el obelisco!`,
    `.img girldick sucking competition 100,000 dollar prize location date and time`
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