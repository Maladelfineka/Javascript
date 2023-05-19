var mojaZmienna = "Hej";

console.log("Witaj");
console.log(mojaZmienna);
console.log("hi");
var h1Zmienna = document.querySelector(".test");
console.log(h1Zmienna);
h1Zmienna.innerHTML = "Test";
var buttonZminna = document.querySelector(".przycisk");
console.log(buttonZminna);
buttonZminna.onclick = function(){
    h1Zmienna.innerHTML = "Zmiana";
    buttonZminna.innerHTML = "test";
    console.log("Przycisk zosatł naciaśnienty");
    buttonZminna.style.color = "blue";
    h1Zmienna.style.background = "blue";
}