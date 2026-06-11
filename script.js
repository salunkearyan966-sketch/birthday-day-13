const messages = {

happy:{
text:"😊 Protect that smile, it's one of the most beautiful things about you ❤️",
bg:"linear-gradient(135deg,#f6d365,#fda085,#ff9a9e)",
emoji:"☀️"
},

sad:{
text:"🌅 No matter if you're feeling down today, remember your Arshii is with you and i will always love you ❤️",
bg:"linear-gradient(135deg,#4facfe,#00f2fe,#6a11cb)",
emoji:"🌙"
},

tired:{
text:"😴 Rest is not weakness. Take a pause, breathe, and be kind to yourself ❤️",
bg:"linear-gradient(135deg,#cfd9df,#e2ebf0,#b8c6db)",
emoji:"💤"
},

angry:{
text:" Can't be there to hug you and remove all the anger from your heart but sending all the love you deserve my shree!!❤️",
bg:"linear-gradient(135deg,#ff9966,#ff5e62,#f857a6)",
emoji:"✨"
},

confused:{
text:" I LOVEEE YOUU SHREE AND DONT GET CONFUSED YOUU ARE THE FUCKUN BESTTT!!!❤️",
bg:"linear-gradient(135deg,#667eea,#764ba2,#6dd5ed)",
emoji:"⭐"
},

loved:{
text:"❤️ You deserve every bit of love, care, happiness and beautiful moments coming your way and for that am here with you always!!!  🌸",
bg:"linear-gradient(135deg,#ff758c,#ff7eb3,#ffb6c1)",
emoji:"💖"
}

};

function showMood(mood){

document.body.style.background =
messages[mood].bg;

document.getElementById("messageBox").innerHTML =
messages[mood].text;

for(let i=0;i<20;i++){

createEmoji(messages[mood].emoji);

}

}

function createEmoji(symbol){

const emoji =
document.createElement("div");

emoji.classList.add("float");

emoji.innerHTML = symbol;

emoji.style.left =
Math.random()*100 + "vw";

emoji.style.animationDuration =
(Math.random()*3+3)+"s";

document.body.appendChild(emoji);

setTimeout(()=>{
emoji.remove();
},7000);

}