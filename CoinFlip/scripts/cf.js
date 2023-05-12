let div = document.getElementById("results");
let p = document.createElement("p");

function flip (call) {
    let result = Math.floor(Math.random() * 2) + 1
    // use case instead! .. jk switch cannot be used with multiple parameters
    if (call == "heads" && result == 1){
        p.innerHTML = "You said heads... and it was heads! You must be psychic!";
        div.append(p);
    } else if (call == "heads" && result == 2) {
        p.innerHTML = "You said heads... but it was tails. Too bad!";
        div.append(p);
    } else if (call == "tails" && result == 2) {
        p.innerHTML = "You said tails... and it was tails! WTF?!";
        div.append(p);
    } else if (call == "tails" && result == 1) {
        p.innerHTML = "You said tails... but it was heads. Get wrekt."
        div.append(p);
    }
}