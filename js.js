let texts = [
    {
        text:"Do you think you have what it takes to make it on Really Good Texts? Have you come across a brand that is absolutely crushing their SMS marketing?"
    },
    {
        text:"We want to hear about it! You can submit examples of really good texts directly through the site. If you include your social handle, we’ll even give you a shout out if your submission is selected. "
    },
    {
        text:"Although the molecules of water are simple in structure (H2O), the physical and chemical properties of the compound are extraordinarily complicated, and they are not typical of most substances found on Earth. For example, although the sight of ice cubes floating in a glass of ice water is commonplace, such behaviour is unusual for chemical entities. For almost every other compound, the solid state is denser than the liquid state"
    },
    {
        text:"A cartoon is an animated film, usually a short film, featuring an exaggerated visual style. The style takes inspiration from comic strips, often featuring anthropomorphic animals, superheroes, or the adventures of human protagonists. Especially with animals that form a natural predator/prey relationship (e.g. cats and mice, coyotes and birds), the action often centers around violent pratfalls such as falls, collisions, and explosions that would be lethal in real life."
    },
    {
        text:"Hundreds of years before the introduction of true animation, people all over the world enjoyed shows with moving figures that were created and manipulated manually in puppetry, automata, shadow play, and the magic lantern. The multi-media phantasmagoria shows that were very popular in European theatres from the late 18th century through the first half of the 19th century, featured lifelike projections of moving ghosts and other frightful imagery in motion."
    }
]
let newI = Math.floor(Math.random() * texts.length);
console.log(newI)
//variable
let i = 0;
let word = 0;
let time = 60;
let p = document.querySelector(".box-text p");
p.innerText = texts[newI]["text"];
const pWord = document.querySelector(".current");
const input = document.querySelector("input");
const timeDisplay = document.querySelector(".time");
const wordDisplay = document.querySelector(".word");
const WPM = document.querySelector(".result");
const reset = document.querySelector("button").addEventListener("click" , () => {
    window.location.reload();
})

WPM.innerText = `Your WPM is : ${word} WPM`;
input.addEventListener("input", check);
let splitParaghraph = p.innerText.split(" ");
pWord.innerText = splitParaghraph[i];
countDowm();
// functions
function check(){
    if(input.value == splitParaghraph[i] && time > 0){
        i++
        word++;
        input.value = "";
    }
}
function countDowm(){
    setInterval(() =>{
        if(time === 0){
            WPM.style.display = "block";
            timeDisplay.style.display = "none";
            wordDisplay.style.display = "none";
        }
        if(time > 0){
            time--;
        }
    },1000)
}
// update the elements
function updatetor(){
    setInterval(() =>{
        pWord.innerText = splitParaghraph[i];
        wordDisplay.innerText = `Word : ${word}`;
        timeDisplay.innerText = `Time : ${time}`;
    },50)
}
updatetor()
