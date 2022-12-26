const jokes = [
    "Why was the math book sad? Because it had too many problems.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why couldn't the bicycle stand up by itself? Because it was two-tired.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why did the cookie go to the doctor? Because it was feeling crumbly.",
    "What do you get when you cross a sheep and a kangaroo? A woolly jumper.",
    "Why did the chicken go to outer space? To lay an egg on the moon!",
    "Why was the computer cold? It left its Windows open.",
    "What do you get when you cross a bear and a skunk? Winnie-the-Phew.",
    "Why was the cat sitting on the computer? It wanted to keep an eye on the mouse.",
    "Why was the math book sad? Because it had too many problems.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why couldn't the bicycle stand up by itself? Because it was two-tired.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why did the cookie go to the doctor? Because it was feeling crumbly.",
    "What do you get when you cross a sheep and a kangaroo? A woolly jumper.",
    "Why did the chicken go to outer space? To lay an egg on the moon!",
    "Why was the computer cold? It left its Windows open.",
    "What do you get when you cross a bear and a skunk? Winnie-the-Phew.",
    "Why was the cat sitting on the computer? It wanted to keep an eye on the mouse.",
    "Why was the math book sad? Because it had too many problems.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why couldn't the bicycle stand up by itself? Because it was two-tired.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why did the cookie go to the doctor? Because it was feeling crumbly.",
    "What do you get when you cross a sheep and a kangaroo? A woolly jumper.",
    "Why did the chicken go to outer space? To lay an egg on the moon!",
    "Why was the computer cold? It left its Windows open.",
    "What do you get when you cross a bear and a skunk? Winnie-the-Phew.",
    "Why was the cat sitting on the computer? It wanted to keep an eye on the mouse.",
    "Why was the math book sad? Because it had too many problems.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why couldn't the bicycle stand up by itself? Because it was two-tired.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why did the cookie go to the doctor? Because it was feeling crumbly.",
    "What do you get when you cross a sheep and a kangaroo? A woolly jumper.",
    "Why did the chicken go to outer space? To lay an egg on the moon!",
    "Why was the computer cold"
]  

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];

  }
  
  let randomJoke = getRandomElement(jokes);
  let showjokes = document.getElementById("sjokes")
  showjokes.innerHTML=randomJoke;
  
