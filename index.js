// 1. Funksioni që luan tingullin
function makeSound(key) {
  switch (key) {
    case "w":
      new Audio('sounds/tom-1.mp3').play();
      break;
    case "a":
      new Audio('sounds/tom-2.mp3').play();
      break;
    case "s":
      new Audio('sounds/tom-3.mp3').play();
      break;
    case "d":
      new Audio('sounds/tom-4.mp3').play();
      break;
    case "j":
      new Audio('sounds/snare.mp3').play();
      break;
    case "k":
      new Audio('sounds/crash.mp3').play();
      break;
    case "l":
      new Audio('sounds/kick-bass.mp3').play();
      break;
  }
}

// 2. Kapja e klikimeve (Click) - Supozojmë se butonat kanë klasën "drum"
var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    makeSound(this.innerHTML); // merr shkronjën nga brenda butonit (w, a, s, etj)
  });
}

// 3. Kapja e tastierës (Keydown)
document.addEventListener("keydown", function(event) {
  makeSound(event.key); // merr shkronjën që shtype në tastierë
});
