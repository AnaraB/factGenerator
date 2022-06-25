const greeting = [
  "Hello, here is one fact for you... ",
  "Did you know that...",
  "I bet you didn't know that... ",
  "Hi my friend, are you aware that ...",
  "I've got one incredible fact for you and here it is.. ",
];

const facts = [
  "Scientists believe there are over 100 billion galaxies in the Universe. ",
  "Bowhead whales can live for up to 200 years- the longest lifespan of any mammal.",
  " If all the blood vessels in your body were laid out in a line, they would reach twice around the world. ",
  "In Japan there is a law telling men and women how big their waistline should be. ",
  "Your brain is made up of 85 per cent water- same as a cabbage.",
  "Sloths come to the ground once a week to poo. ",
  "Britain is thought to have the largest population of 'ancient' trees in Europe. ",
  "Babies are born with around 300 bones, but by adulthood only 206 are left. ",
];

const ending = [
  " now google it to learn more..",
  " Isn't it strange?",
  " Hope you come again to find out more..",
  " See you soon, my friend",
  " I've got more amazing facts if you liked this one ",
  " See you later ",
  " Make sure to check it out.."
];

const mixedArray = [greeting, facts, ending];

function mixedMessage() {
  let message = " ";
  mixedArray.forEach((array) => {
    message += array[Math.floor(Math.random() * array.length)];
  });
  return message;
}

console.log(mixedMessage());
