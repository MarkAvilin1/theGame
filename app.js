let userScore = 0;
let computerScore = 0;
const user_sr = document.getElementById('user-sr');
const comp_sr = document.getElementById('comp-sr');
const scoreDiv = document.querySelector('.score');
const result_p = document.getElementById('res');
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');




function getComputerChoice(){
    const choices = ["r","p","s"];
    const r_no = Math.floor(Math.random() * 3);
    return choices[r_no];
}

/*function convert_word(letter) {
    if (letter === "r") {return "Rock";}
    else if (letter === "p") {return "Paper";}
    else if (letter === "s"){return "Scissores";}
}*/

function convert_word(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissores";
}


function win(userChoice , computerChoice){
    const user = "User".fontsize(3);
    const comp = "Comp.".fontsize(3);
    userScore++;
    user_sr.innerHTML = userScore;
    comp_sr.innerHTML = computerScore;
    result_p.innerHTML = user +convert_word(userChoice)+  " Beats " + comp + convert_word(computerChoice)+  ". You Win!";
  }

function lose(userChoice , computerChoice){
    const user = "User".fontsize(3);
    const comp = "Comp.".fontsize(3);
    computerScore++;
    user_sr.innerHTML = userScore;
    comp_sr.innerHTML = computerScore;
    result_p.innerHTML = user +convert_word(userChoice) +  " Doesn't Beat " + comp +convert_word(computerChoice)+  ". You Lose!";
}

function draw(){
    result_p.innerHTML = ("Draw!");
}




function game(userChoice){
    const computerChoice = getComputerChoice();
    
    switch (userChoice + computerChoice){
        case "sp":
        case "rs":
        case "pr":
            win(userChoice , computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice , computerChoice);
            break;
        case "ss":
        case "rr":
        case "pp":
            draw();
            break;
    };
};


function main(){
rockDiv.addEventListener('click',function(){
    game("r")
})

paperDiv.addEventListener('click',function(){
   game("p")
})

scissorsDiv.addEventListener('click',function(){
   game("s")
})
};

main();