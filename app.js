
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
    $('#pet-name').html('Meet your adorable new friend ' + tamaName + '!');
};
     
};



// Set the values for hunger, sleepiness, boredom and age

let hunger = 10;
let sleepiness = 10;
let boredom = 10;
let age = 1;


// Set interval, the game stats go down every 5 seconds

const hungerTime = setInterval(hungerDown, 5000);
const sleepinessTime = setInterval(sleepinessDown, 5000);
const boredomTime = setInterval(boredomDown, 5000);

// Set interval, age goes up every 2 minutes

const ageTime = setInterval(ageUp, 20000);

// Game stats updates

const updateLevels = setInterval(updateStats, 500);


// Add event listeners to buttons

$('#feed').on('click', () => {
    hungerUp();
    tamaFed();
});


$('#bored').on('click', () => {
    boredomUp();
    tamaPlay();
});


$('#sleepiness').on('click', () => {
    sleepUp();
    tamaNap();
});


// Functions for changing Tama images
function tamaFed () {
    $('.w3-circle').attr('src', 'images/tama-yumm.gif');
};

function tamaPlay () {
    $('.w3-circle').attr('src', 'images/tama-fun.gif');
};

function tamaNap () {
    $('.w3-circle').attr('src', 'images/tama-nap.gif')
};


// Functions for hunger, sleep and boredom going up

function hungerUp () {
    if (hunger <= 3) {
        hunger += 1;
    } else {
        hunger += 1;
        tamaDeath();
    };
};


function sleepUp () {
    if (sleepiness <= 3) {
        sleepiness += 1;
    } else {
        sleepiness += 1;
        tamaDeath();
    };
};

function boredomUp () {
    if (boredom <= 3) {
       boredom +=1;
    } else {
        boredom += 1;
        tamaDeath();
    };
};




// Functions for huger, sleep, and boredom going down

function hungerDown () {
    if (hunger === 3) {
        tamaDeath();
    } else {
        hunger--;
        updateStats();

    };
};

function sleepinessDown () {
    if (sleepiness === 3) {
        tamaDeath();
    } else {
        sleepiness--;
        updateStats();
    };
};


function boredomDown () {
    if (boredom === 3) {
        tamaDeath();
    } else {
        boredom--;
        updateStats();
    };
};


// Age function 

function ageUp () {
    if (age === 15) {
        tamaDeath();
    } else {
        age++;
        updateStats();
    };
    
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
    $('#hungerProgress').val(hunger);
    $('#playProgress').val(boredom);
    $('#sleepProgress').val(sleepiness);
    $('#ageProgress').val(age);
    
};

// Tama Death 

function tamaDeath () {
    if (hunger === 3) {
        alert('Your pet has died out of hunger');
        clearIntervals();
    } else if (boredom === 3) {
        alert('Your pet has died out of boredom');
        clearIntervals();
    } else if (sleepiness === 3) {
        alert('Your pet has died out of tiredness');
        clearIntervals();
    } else if (age >= 15) {
        alert('Your pet has run away');
        clearIntervals();
    };
};


































