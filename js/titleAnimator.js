const title = document.getElementById("title");

const phrases = [
    {action: "scribbling", icon: "🖍"},
    {action: "drawing", icon: "🖊️"},
    {action: "painting", icon: "🖌️"},
    {action: "laughing", icon: "😂"},
    {action: "exercising", icon: "🏋️‍♀️"},
    {action: "partying", icon: "🥳"},
    {action: "sleeping", icon: "😴"},
    {action: "eating", icon: "🍜"}
];

const index = Math.floor(Math.random() * phrases.length);
const action = phrases[index].action;
const icon = phrases[index].icon;

function updateTitle(dotCount) {
    let dots = "";
    for (let i = 0; i < dotCount; i++) {
        dots += ".";
    }
    title.innerText = `Vikki Chan is ${action} ${dots}${icon}`;
    console.log(`Vikki Chan is ${action} ${dots}${icon}`);
}

let counter = 0;
setInterval(function() {
    updateTitle(counter % 4);
    counter = counter + 1;
}, 987);