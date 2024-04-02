let list = [
    "Welcome to Snail Facts!<br> Click here to see a fact!",
    "Snails are gastropod mollusks, which means they belong to the same class as slugs and clams.",
    "Snails can be found in diverse habitats worldwide, including forests, deserts, and oceans.",
    "The largest land snail species is the African giant snail, which can grow up to 30 centimeters (12 inches) in length.",
    "Some snails can live for several years, with certain species living up to 15 years or more.",
    "Snails are primarily herbivorous, feeding on a variety of plant matter such as leaves, fruits, and algae.",
    "Snails have a specialized feeding structure called a radula, which is a ribbon-like structure covered in tiny teeth used for scraping and rasping food.",
    "Certain species of snails are considered pests in agriculture because they can damage crops by feeding on plant foliage.",
    "Snails move by contracting and expanding their muscular foot, leaving behind a trail of mucus that helps reduce friction with the surface.",
    "The speed at which a snail moves can vary greatly depending on factors such as species, size, and environmental conditions, but generally ranges from 0.013 to 0.03 meters per minute.",
    "Some species of snails are capable of hibernating during periods of extreme cold or drought by sealing themselves inside their shells.",
    "Snails are hermaphrodites, meaning they possess both male and female reproductive organs, but they still require a mate to reproduce.",
    "During mating, snails exchange sperm with each other, and each snail then fertilizes its own eggs internally before laying them.",
    "Snails lay their eggs in clusters or capsules, which are often buried in soil or attached to vegetation to protect them from predators and environmental conditions.",
    "The eggs of many snail species hatch into miniature versions of adult snails, skipping the larval stage common in other mollusks like clams and oysters.",
    "Some species of snails are capable of self-fertilization, allowing them to reproduce without a mate under certain conditions.",
    "The shell of a snail is composed primarily of calcium carbonate, which is secreted by a specialized tissue called the mantle.",
    "Snails are able to retract into their shells for protection when threatened by predators or adverse environmental conditions.",
    "The color and pattern of a snail's shell can vary widely between species and can serve as a form of camouflage or warning to predators.",
    "Snails are important prey for a variety of animals, including birds, mammals, reptiles, and insects.",
    "Certain species of snails have been used in traditional medicine for centuries to treat ailments such as coughs, wounds, and digestive disorders.",
    "Some species of snails are considered delicacies in certain cultures and are consumed as food in dishes like escargot.",
    "The slime produced by snails has various uses, including as a lubricant, adhesive, and moisturizer in cosmetics and skincare products.",
    "Snails are often used as model organisms in scientific research due to their relatively simple nervous systems and ease of breeding in laboratory settings.",
    "The study of snails is known as malacology, and scientists who specialize in this field are called malacologists.",
    "The oldest known land snail fossil dates back to the late Silurian period, approximately 440 million years ago.",
    "Snails are considered indicators of environmental health because they are sensitive to changes in temperature, humidity, pollution, and habitat destruction.",
    "Some species of snails are capable of aestivation, a state of prolonged dormancy similar to hibernation, which helps them survive during periods of extreme heat or drought.",
    "The mating rituals of certain snail species can be complex and involve elaborate courtship displays, tactile stimulation, and chemical signaling.",
    "Snails have a decentralized nervous system consisting of clusters of nerve cells called ganglia, which control various physiological functions such as movement, digestion, and reproduction.",
    "Certain species of snails are known to exhibit behaviors such as homing, in which they return to a specific location or shelter after foraging for food.",
    "Snails have a strong homing instinct and are capable of navigating complex environments using sensory organs such as tentacles, eyespots, and chemoreceptors.",
    "The eyes of most land snails are located at the tips of retractable stalks called tentacles, which can detect light, shapes, and movement but have limited visual acuity.",
    "Snails are nocturnal or crepuscular animals, meaning they are most active during the night or twilight hours when temperatures are cooler and humidity levels are higher.",
    "The lifespan of a snail can vary greatly depending on factors such as species, habitat, and environmental conditions, with some species living only a few months and others living several years.",
    "Snails play important roles in ecosystems as herbivores, detritivores, and prey species, helping to recycle nutrients, control plant populations, and support food chains.",
    "The slime trail left behind by snails serves multiple functions, including aiding in locomotion, moisture retention, and communication with other snails.",
    "Snails are capable of regenerating lost body parts, including tentacles, eyes, and even parts of their shells, through a process called epimorphosis.",
    "Certain species of snails are capable of surviving extreme conditions such as freezing temperatures, desiccation, and exposure to toxic substances by entering a state of cryptobiosis.",
    "Snails are known to exhibit a variety of social behaviors, including aggregation, communication, and cooperation, particularly during mating and hibernation.",
    "Some species of snails are capable of producing and releasing pheromones, chemical signals that influence the behavior and physiology of other individuals within their population.",
    "Snails have a high reproductive potential, with some species capable of producing hundreds of offspring in a single breeding season under favorable conditions.",
    "The introduction of non-native snail species into new environments can have detrimental ecological impacts, including competition with native species, predation on native plants, and transmission of diseases.",
    "Snails are susceptible to a variety of parasites, including nematodes, flatworms, and parasitic fungi, which can affect their health, behavior, and reproductive success.",
    "Certain species of snails are considered invasive pests in freshwater and marine ecosystems, where they can outcompete native species for resources and disrupt ecological balance.",
    "Snails are important hosts for a variety of parasites and pathogens, including those that cause diseases in humans and other animals, such as schistosomiasis and rat lungworm disease.",
    "Snails have been used as bioindicators of environmental pollution and contamination due to their ability to accumulate heavy metals, pesticides, and other toxins in their tissues.",
    "Snails are capable of detecting and responding to changes in their environment through a combination of sensory organs, including chemoreceptors, mechanoreceptors, and photoreceptors.",
    "The reproductive behavior of snails can be influenced by environmental factors such as temperature, humidity, photoperiod, and food availability, which can affect mating success and offspring survival.",
    "Certain species of snails are known to engage in complex courtship rituals involving visual displays, tactile stimulation, and chemical signaling to attract mates and ensure reproductive success.",
    "Snails can hibernate for up to three years at a time.",
    "Snails communicate with each other by humming songs through their shells.",
    "Snails can change the color of their shells to blend in with their surroundings.",
    "Snails have the ability to predict the weather by secreting different amounts of mucus.",
    "Snails can run as fast as a human walking briskly.",
    "Snails have a preference for listening to classical music over other genres.",
    "Snails can survive being frozen solid and thaw out when temperatures rise.",
    "Snails can chew through concrete with their radula.",
    "Snails have a built-in compass in their shells that allows them to navigate long distances.",
    "Snails are excellent climbers and can scale vertical surfaces like walls and trees effortlessly.",
];
let factsDoc = document.getElementById("facts");
let posiDoc = document.getElementById("positive");
let negiDoc = document.getElementById("negative");
const factHistory = [];
let inProcess = false;
let speed = 1000;
let click = 1;
let basis = 1;
let yesses = 0;
let noes = 0;
let autoTimer;
factsDoc.innerHTML = list[0];


function clickaroo() {
    if (!inProcess) {
        if (click === 2 | click === 4 | click === 6) {
            chatTime();
        } else {
            randomFact();
        }
    }
}

function randomFact() {
    let randomFact = Math.floor((Math.random() * 58) + 1);
    factsDoc.innerHTML = click + ")" + " " + list[randomFact];
    factHistory.push(list[randomFact]);
    click++;
}

function chatTime() {
    inProcess = true;
    if (click === 2) {
        factsDoc.innerHTML = "So, you like Snail Facts, huh?";
        posiDoc.style.visibility = "visible";
        negiDoc.style.visibility = "visible";
    } else if (click === 4) {
        endTimer();
        factsDoc.innerHTML = "Wow, you are devouring facts like a snail devours vegetables!";
        posiDoc.innerHTML = "...";
        posiDoc.style.visibility = "visible";
    } else if (click === 6) {
        endTimer();
        factsDoc.innerHTML = "Holy Snail! You are a Snail Fact collector!";
        posiDoc.innerHTML = "And..."
        posiDoc.style.visibility = "visible";
    }
}

function yesClick() {
    if (yesses === 0) {
    document.getElementById("negative").style.visibility = "hidden";
    document.getElementById("positive").innerHTML = "Thanks!";
    factsDoc.innerHTML = "I like Snail Facts, too! To help you, I will activate AUTOFACTS™ so you don't have to click so much."
    yesses = 1;
    } else if (yesses === 1) {
        document.getElementById("positive").style.visibility = "hidden";
        yesses = 2;
        randomFact();
        autoTimer = setInterval(clickaroo, speed);
        inProcess = false;
    } else if (yesses === 2) {
        factsDoc.innerHTML = "Since you seem to love Snail Facts as much as me, I will double the AUTOFACTS™ speed for you.";
        posiDoc.innerHTML = "Let's Go!";
        yesses = 3;
    } else if (yesses === 3) {
        posiDoc.style.visibility = "hidden";
        inProcess = false;
        yesses = 4;
        randomFact();
        speed = 500;
        autoTimer = setInterval(clickaroo, speed);
    } else if (yesses === 4) {
        factsDoc.innerHTML = "Well, this is actually a little embarrassing, but we are running out of facts. How would you like to beta test our next gen artificial intelligence, called sn(AI)l?";
        posiDoc.innerHTML = "I...I'd be honored.";
        yesses = 5;
    } else if (yesses === 5) {
        factsDoc.innerHTML = "Great, as part of the service, we will again double the speed of AUTOFACTS™, and add some controls";
        posiDoc.innerHTML = "I'm Ready.";
        yesses = 6;
    } else if (yesses === 6) {
        posiDoc.style.visibility = "hidden";
        inProcess = false;
        yesses = 7;
        snail();
        document.getElementById("controls").style.display = "flex";
        speed = 250;
        autoTimer = setInterval(snail, speed);
    }
}

function noClick() {
    if (noes === 0) {
    factsDoc.innerHTML = "You must have misclicked. Please click Yes!"
    document.getElementById("negative").style.visibility = "hidden";
    noes = 1;
    }
}

function snail() {
    var nextText = factGen();
    factsDoc.innerHTML = click + ")" + " " + nextText;
    factHistory.push(nextText);
    click++;
}

function factGen() {
    var verbs, nouns, modifier, adjectives, adverbs, preposition;
    nouns = ["All snail varieties", "Snails", "Most snails", "Many types of snails", "All snail species", "Some snail species", "Many snails", "Some larger snails", "Only the smallest snails", "Two snail species"];
    modifier = [" can", " will", " sometimes", " must", " have been known to", " are believed to", " on occasion", ", it has been said,", " have records that they", ""];
    verbs = [" jump", " climb", " eat", " swim", " survive", " cross", " fly", " communicate", " raise the dead", " speak telepathically"];
    adjectives = [" beautiful", " obscene", "", " lovely", " dumb", " rough", " soft", " hot", " vibrating", " slimy"];
    adverbs = ["", " elegantly", " precisely", " quickly", " sadly", " humbly", " proudly", " shockingly", " calmly", " passionately"];
    preposition = [" down", " into", " up", " on", " upon", " below", " above", " through", " across", " towards"];
    object = [" deserts", " trees", " decaying organisms", " cakes", " ocean depths", " cobalt mines", " nether portals", " damp caves", " crevasses", " food sources"];

    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 10);
    var rand3 = Math.floor(Math.random() * 10);
    var rand4 = Math.floor(Math.random() * 10);
    var rand5 = Math.floor(Math.random() * 10);
    var rand6 = Math.floor(Math.random() * 10);
    var rand7 = Math.floor(Math.random() * 10);
    
    var content = nouns[rand1] + modifier[rand2] + adverbs[rand3] + verbs[rand4] + preposition[rand5] + adjectives[rand6] + object[rand7] + ".";
    
    return(content);
}

function firstPage() {
    endTimer();
    basis = 1;
    factsDoc.innerHTML = basis + ") " + factHistory[0];
}

function rewind() {
    if (autoTimer != null) {
        basis = click - 1;
    }
    endTimer();
    if (basis > 1) {
        basis--; } else {
        basis = factHistory.length;
    }
    factsDoc.innerHTML = basis + ") " + factHistory[basis-1];
}

function play() {
    endTimer();
    click = factHistory.length + 1;
    autoTimer = setInterval(snail, speed);
}

function pause() {
    basis = click - 1;
    endTimer();
}

function foward() {
    if (autoTimer != null) {
        basis = click - 1;
    }
    endTimer();
    if (basis < (factHistory.length)) {
        basis++; } else {
        basis = 1;
    }
    factsDoc.innerHTML = basis + ") " + factHistory[basis-1];
}

function lastPage() {
    endTimer();
    basis = factHistory.length;
    factsDoc.innerHTML = (click - 1) + ") " + factHistory[click-2];
}

function endTimer() {
    clearInterval(autoTimer);
    autoTimer = null;
}