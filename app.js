
// Start the game with naming the Tamagotchi
// Set window onload function 
// When the name of the Tamagotchi is entered, the text in h3 changes to the name



window.onload = function() {
    class Tama {
    constructor() {
    this.name = '';
    };
    };

    const tama = new Tama();

  const tamaName = prompt('What would you like to name your new pet?', '');
  if (tamaName !== null) {
    $('#pet-name').html('Meet your adorable new pet ' + tamaName + '!');
};
     
};



// Create a sub class

class Tamagotchi {
    constructor() {
    this.hunger = 1;
    this.sleepiness = 1;
    this.boredom = 1;
    this.age = 1;
    };
};

const tamagotchi = new Tamagotchi();

// Add event listeners to buttons

$('#feed').on('click', hungerUp);
$('#play').on('click', boredomUp);
$('#sleep').on('click', sleepUp);



// Set interval, the game stats go down every 5 seconds

const hungerTime = setInterval(hungerDown, 5000);
const sleepinessTime = setInterval(sleepinessDown, 5000);
const boredomTime = setInterval(boredomDown, 5000);

// Set interval, age goes up every 2 minutes

const ageTime = setInterval(ageUp, 20000);

// Game stats updates

const updateLevels = setInterval(updateStats, 500);


// Functions for hunger, sleep and boredom going up

function hungerUp () {
    if (tamagotchi.hunger < 10) {
        tamagotchi.hunger += 1;
    } else {
        tamagotchi.hunger += 1;
        tamaDeath();
    };
};


function boredomUp () {
    if (tamagotchi.boredom < 10) {
       tamagotchi.boredom +=1;
    } else {
        tamagotchi.boredom += 1;
        tamaDeath();
    };
};

function sleepUp () {
    if (tamagotchi.sleepiness < 10) {
        tamagotchi.sleepiness += 1;
    } else {
        tamagotchi.sleepiness += 1;
        tamaDeath();
    };
};



// Functions for huger, sleep, and boredom going down

function hungerDown () {
    if (tamagotchi.hunger === 10) {
        tamaDeath();
    } else {
        tamagotchi.hunger--;
        updateStats();

    };
};

function sleepinessDown () {
    if (tamagotchi.sleepiness === 10) {
        tamaDeath();
    } else {
        tamagotchi.sleepiness--;
        updateStats();
    };
};


function boredomDown () {
    if (tamagotchi.boredom === 10) {
        tamaDeath();
    } else {
        tamagotchi.boredom--;
        updateStats();
    };
};


// Age function 

function ageUp () {
    tamagotchi.age++;
    updateStats();
};


// Clear Interval

function clearIntervals () {
    clearInterval(hungerTime);
    clearInterval(sleepinessTime);
    clearInterval(boredomTime);
    clearInterval(ageTime);
};


// Update Stats

function updateStats () {
    $('#hungerProgress').value = tamagotchi.hunger;
    $('#playProgress').value = tamagotchi.boredom;
    $('#sleepProgress').value = tamagotchi.sleepinesss;
    $('#ageProgress').value = tamagotchi.age;
}

// Tama Death 

function tamaDeath () {
    if (tamagotchi.hunger === 10) {
        alert('Your pet has died out of hunger');
        clearIntervals();
    } else if (tamagotchi.boredom === 10) {
        alert('Your pet has died out of boredom');
        clearIntervals();
    } else if (tamagotchi.sleepiness === 10) {
        alert('Your pet has died out of tiredness');
        clearIntervals();
    } else if (tamagotchi.age >= 15) {
        alert('Your pet has died of old age');
        clearIntervals();
    };
};


































