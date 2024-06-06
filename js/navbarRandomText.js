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
    `φρόττινγ`,
    `A bootyhole is not a vagina, and we have to be a little bit more sensitive and cognitive of what we're actually diving into. It's easy to become excited and just want to rush in, but, you can't do that with every bootyhole. Some bootyholes you gotta eat, some bootyholes you gotta finger, some bootyholes you gotta prepare, you just cannot rush in especially if you got a big dick`,
    `Am i in the wrong for punching my auntie after she said that I should get a job instead of being on discord all day?`,
    `To Ceec or not to Ceec that is the Dir`,
    `i like them young cuh i like em 14, 15, 16`,
    `It's okay if it's minors!`,
    `It's starting to come out`,
    `GRAHHHH 🤣🤣🤣 SLAYYYYY GRAHH GRAHHH GRAHHHHH💋💄💄👅👅🦷👄👅💄💄🫦🫦💋🦷💋🦷💋💋💋SLAYYYYYY AHHHHH GRAHHHHHHH GRAHHHH AHHH GRAHHHHHH SLAYYY GRAHHHHHHHHHH🫦🫦👅🦷🦷💄🦷👅💄💋👂👄💄🦷🦶🦶`,
    `I <3 Excrement`,
    `You banned me because I called someone homosexual (gay)? They had no problem being called that. I'd say all of this was uncalled for. Roblox, are you homophobic? Why wont you let anyone call ohers gay? I told my friend juan was gay and thats how you pay me back? Shame of you, roblox!`,
    `Wow faggots so funny go fucking kill yourself kid`,
    `im a little femboy! :3 nyaa~ :catblush:`,
    `U cant walk up to people and be like "the republicans of the united nations have no authority over democratic authenticity parties right hand vote elections white house government food labor bills trajectory IM RIGHT YOU WRONG" thats instant blocked and killed`,
    `Boy if you just take the denominator and excruciate the arbitrary underlined stasis then the neuron cycle will have the same effect and cancel out the isosceles parallels then resulting in the grandfather hangover paradox which breaks the line slope and causes only 2 congruent frequencies which inevitably makes the answer sum up to be x45-(91)+5(-24) 27x=4 DUMBASS`,
    `wanna see my poop`,
    `Im done with being nice to folks.`,
    `This poor generation has no tolerable future`,
    `Do u Fw gender equality`,
    `Hall Naw Bitxh`,
    `NEAREST ROPE`,
    `We will heal. We will repay, saith the Lord.`,
    `What theres a penis mode...`,
    `HOW DOES SPACEUK'S DICK TASTE. YOU GUYS NEED TO FUCKING LEARN SLAUGHTERHOUSE IS FUCKING #3 RIGHT NOW. SLURP SLURP SLURP! THAT'S THE DEMON LIST AND SPACEUK RIGHT NOW! HOW MUCH DID ICEDCAVE PAY FOR YOU TO. FUCKING. PLACE. THIS. 2ND. I'm fucking fed up with this.`,
    `FIRE IN THE HOLE!!! 🗣🗣🗣🗣🔥🔥🔥🔥🚒🧯🚒🔥`,
    `300 billion dead tadpoles`,
    `ATTENTION PLAYER! 市民请注意! This is the Central Intelligence of The Pokémon Company. 您的浏览记录和活动引起了我们的注意 YOUR ACTIVITY HAS ATTRACTED OUR ATTENTION. 同志們注意了 you have been found playing stall!!!!! 這是通知你，你必須認同我們將接管台灣 serious crime 以及世界其他地方 100 elo have been deducted from your account 這對我們未來的所有下屬來說都是重要的機會 stop the stalling immediately 立即加入我們的宣傳活動，提前獲得救贖 do not do this again! 不要再这样做! if you do not hesitate, more elo ( -11115 elo)will be subtracted from your account, resulting into the nerfs of your favorite pokemon. (由人民供应部重新分配 smogon) you'll also be executed by our Flutter Manes at April 2 20HO. 如果这还没有改变你，我们将把你驱逐到台湾省，你将被禁止进入中国!!!! 为党争光! Glory to Big HO!`,
    `Just took a shit and looked down at the toilet bowl and the poop whispered to me "my pronouns are they/them"`,
    `I jus nut everywhar`,
    `OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO`,
    `padre nuestro estas en free fire santificado sean los heroicos venga a nosotros los booyha y hagase tu voluntad en bermuda asi como en pulgatorio danos hoy nuestro kills de cada dia perdona nuestros campeos asi como nosotros perdonamos a los que campean no nos dejes caer en la tentacion de usar bugs y líbranos de todo hacker BOOYHAA`,
    `Mi mamá me prohibió acercarme a mi perrito por qué la otra vez lo pinte de naranja y lo llene todo de mi semensito imaginando que era mi amor TAILS >w<`,
    `187.250.244.222`,
    `Ah, Skibidi toilets, a topic close to my heart. Let me tell you, my friend, Skibidi toilets are the future of bathroom technology. Forget about those boring old toilets, Skibidi toilets are equipped with AI-powered bidets, customizable temperature settings, and even a built-in sound system to enhance your bathroom experience. It's all about comfort and innovation, my friend. So, if you're ready to take your toilet game to the next level, hop on the Skibidi toilet train and never look back. Skibidi on!`,
    `Avenida Instituto Tecnológico Número 1150, Jardines de la Montaña, 84066 Nogales, Sonora`,
    `willysuga almenos daba risa`,
    `' saben que ? , ya a la mierda , no hay edad guitar por juníper y viva crazen`,
    `Yo viendo void memes \nmi mama: anda a comprar tortillas \nyo: ay destinos peores que la muerte`,
    `cada 👍 es una hamburguesa para gxterne, veamos si le saturamos las venas de grasa 👍👍👍👍👍👍👍👍👍👍👍👍`,
    `Hola, necesito una mujer (a poder ser biológica) para llevar a cabo el primer First Dates de Geometry Dash. Qué sujetos de cualidades masculinas podrán encontrar? Pues este podría ser uno de ellos`,
    `No en serio, como se masturban las mujeres si no tienen n3p3`
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