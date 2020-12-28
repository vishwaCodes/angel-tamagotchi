
// Start the game with naming the Tamagotchi
// Set window onload function 
// When the name of the Tamagotchi is entered, the text in h3 changes to the name



window.onload = function() {
    class Tama {
        constructor(name) {
            this.name = name;
        }
    }
    const tama = new Tama();

const tamaName = prompt('What would you like to name your new pet?', '');
if (tamaName !== null) {
    $('#pet-name').html('Meet your adorable new pet ' + tamaName);
}
};






























// Set functions for all the buttons 




// Feed me yummy food
const tamaFeed = $('.feed');

function feedTama () {
       tama.hunger += 1;
    
    
};

$('.feed').on('click', feedTama);


// Playtime
const tamaPlay = $('.bored');

function  playTama () {
    if (tama.boredom < 10) {
       tama.boredom += 1;
    } else {
        tama.boredom +=1;
        tamaDeath();
    };
};

$('.bored').on('click', playTama);


// I need a nap
const tamaNap = $('.lightsOff');

function napTama () {
    if (tama.sleepiness < 10) {
       tama.sleepiness += 1
    } else {
        tama.sleepiness += 1;
        tamaDeath();
    }
};

$('.lightsOff').on('click', napTama);

// Time to wake me up
const tamaWake = $('.lightsOn');

function wakeTama () {
    if (tama.sleepiness ) {

    }
};

$('lightsOn').on('click', wakeTama);


// 





// Start Timer

//const time = $('#timer');

function startTimer () {
    const interval = setInterval(function() {
        

        

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
    }, 2000); 
    return interval;
};

//startTimer();

// clearinterval 



// Death 


