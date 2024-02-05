/*list of games to choose from*/
const games = ["Barotrauma", "RoR2", "Derailed"];

/*declared a variable that would choose a random string from the 'games' array*/
const randomgame = games[Math.floor(Math.random() * games.length)];

/*retreives the element that has been assigned the id = 'random-result' and inserts the 'retun' of the selectgame function*/
document.getElementById("random-result").innerHTML = selectgame();

/*declared a function that returns the string 'lets play (result of randomgame)!'*/
function selectgame() {

   /* if (randomgame === "Barotrauma") {
        console.log("let's play Barotrauma!");

    } else if (randomgame === "RoR2") {
        console.log("lets's play RoR2!");

    } else if (randomgame === "Derailed") {
        console.log("let's play DeRailed!");
    }*/
    return "lets play " + randomgame + "!";
}
