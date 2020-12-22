
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

$('.feed').on('click', tamaFeed);


// Playtime
const tamaPlay = $('.bored');

function  playTama () {
    
};

$('.bored').on('click', tamaPlay);


// I need a nap
const tamaNap = $('.lightsOff');

function napTama () {
    
};

$('.lightsOff').on('click', tamaNap);

// Time to wake me up
const tamaWake = $('.lightsOn');

function wakeTama () {
    
};

$('lightsOn').on('click', tamaWake);

