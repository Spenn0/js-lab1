const myName = "Spencer Brown";
const myAge = "27";
const myBirthday = "August 6";
const detroitGC = false;

let lifeEvents = [
  "I was born in Mount Pleasant, MI",
  "I went to Grand Valley State University",
  "I've been teaching people how to juggle for over 10 years",
  "I've been on 4 tours playing wierd indie music to audiences",
];

if (detroitGC) {
  console.log(
    `My name is ${myName} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${myAge} years old and my birthday is on ${myBirthday}.`
  );
} else {
  console.log(
    `My name is ${myName} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${myAge} years old and my birthday is on ${myBirthday}.`
  );
}

// for (let lifeEvent of lifeEvents) {
//   console.log(lifeEvents[]);
// }
// newCounter = 0;

for (i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !==5`);
  } else {
    counter++;
    console.log(
      `5===5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
//    function getRandomNumber(min, max) {
//        randomNumber = Math.random() * (1-10) + 1;
// }
// if(randomNumber!==5) {
//     console.log{
//         "randomNumber !==5"
//     }
// }

// loop while true  break
// Math.floor;
// math.random * 10 + 1

// extra credit stuff

("use strict");
let wage = 10;
let hours = 45;

let final = wage * hours;

console.log(`${final}`);

if (hours <= 40) {
  console.log((final = hours * wage));
} else {
  console.log((final = 40 * wage + (hours - 40) * (wage * 1.5)));
}
