

// When the user clicks start game the timer should start

let timer = 0;

function renderStats() {
    $('.hunger').text(`Hunger Level: ${tama.hunger} /10`);
    $('.sleepiness').text(`Sleepiness Level: ${tama.sleepiness} /10 `);
    $('.boredom').text(`Boredom Level: ${tama.boredom} /10`);
    $('age').text(`Age: ${tama.age}`);
};

// Set Tamagotchi class 

class Tama {
    constructor() {
        this.name = ''
        this.hunger = 10;
        this.sleepiness = 10;
        this.boredom = 10;
        this.age = 1;
    }

}

const tama = new Tama()


// Death

function tamaDeath () {
    if (tama.hunger <= 3) {
       alert('Your Tamagotchi died');
    } else if (tama.sleepiness <= 3) {
        alert('Your Tamagotchi died');
    } else if (tama.boredom <= 3) {
        alert('Your Tamagotchi died');
    }
};









// Set functions for all the buttons 

// Start Game 
const tamaEgg = $('#egg-crack');

function startButton () {
 tamaEgg.attr('src', "https://media.tenor.com/images/9cbc278974a310baf4d2ff9010c46d66/tenor.gif");
 startTimer();
};

$('.startGame').on('click', startButton);

// Feed me yummy food
const tamaFeed = $('.feed');

function feedTama () {
    
}

$('.feed').on('click', feedTama);


// Playtime
const tamaPlay = $('.bored');

function  playTama () {
    
};

$('.bored').on('click', playTama);


// I need a nap
const tamaNap = $('.lightsOff');

function napTama () {
    
};

$('.lightsOff').on('click', napTama);

// Time to wake me up
const tamaWake = $('.lightsOn');

function wakeTama () {
    
};

$('lightsOn').on('click', wakeTama);





// Start Timer

//const time = $('#timer');

function startTimer () {
    const interval = setInterval(function() {
        

        renderStats();

        if (timer % 15 === 0) {
            tama.age += 1;
        } else if (timer % 12 === 0) {
            tama.hunger -= 1;
        } else if (timer % 9 === 0) {
            tama.sleepiness -= 1;
        } else if (timer % 6 === 0) {
            tama.boredom -= 1;
        } else {
            clearInterval(startTimer);
        }

        timer++;

    


        //time.text(`Timer: ${timer}`);
    }, 1000); 
    return interval;
};

//startTimer();

// clearinterval 



// Death 


