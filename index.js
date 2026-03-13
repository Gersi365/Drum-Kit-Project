// 1. Funksioni që luan tingullin (Vegla)
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
    default:
      console.log("U shtyp një tast tjetër: " + key);
  }
}

// 2. Funksioni për Animacionin (Përdor Callback-un e setTimeout)
function buttonAnimation(currentKey) {
  // Gjejmë butonin që korrespondon me klasën (p.sh. .w, .a, .s)
  var activeButton = document.querySelector("." + currentKey);

  // Kontrollojmë nëse butoni ekziston para se t'i shtojmë klasën
  if (activeButton) {
    activeButton.classList.add("pressed");

    // Ky është Callback-u që "kthehet" pas 100 milisekondash
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

// 3. EVENTET: Lidhja e veprimeve me funksionet

// A. Për klikimet me mi (Click Event)
var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);      // Ekzekutohet menjëherë
    buttonAnimation(buttonInnerHTML); // Ekzekutohet menjëherë
  });
}

// B. Për shtypjen e tastierës (Keydown Event)
document.addEventListener("keydown", function(event) {
  // 'event.key' na jep shkronjën e shtypur (w, a, s, etj.)
  makeSound(event.key);
  buttonAnimation(event.key);
});
