const name = "Sam Scholtens";
const age = 30;
const birthday = "January 14";
const detroitGC = false;
const lifeEvents = ["I was born in Grand Rapids, MI.",
                    "I attended Michigan Tech and LSSU.",
                    "I escaped from the U.P. and came back home in 2014.",
                    "I enrolled at Grand Circus in 2019."];

if (detroitGC) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
    let randomNumber = Math.ceil(Math.random() * 10);

    if (randomNumber !== 5) {
        counter++;
        console.log(`${randomNumber} !== 5`);
    }
    else {
        counter++;
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);
        break;
    }
}