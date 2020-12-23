

// When the user clicks start game the timer should start

let timer = 0;

function renderStats() {
    $('.hunger').text(`Hunger Level: `);
    $('.sleepiness').text(`Sleepiness Level: `);
    $('.boredom').text(`Boredom Level: `);
    $('age').text(`Age:`);
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





// Set functions for all the buttons 

// Start Game 
const tamaEgg = $('#egg-crack');

function startButton () {
 tamaEgg.attr('src', "https://media.tenor.com/images/9cbc278974a310baf4d2ff9010c46d66/tenor.gif");
};

$('.startGame').on('click', startButton);

// Feed me yummy food
const tamaFeed = $('.feed');

function feedTama () {
    
};

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

const time = $('#timer');

function startTimer () {
    const counter = setInterval(function() {
        timer++;

        renderStats();


        time.text(`Timer: ${timer}`);
    }, 1000); 
};

//startTimer();

// clearinterval 




