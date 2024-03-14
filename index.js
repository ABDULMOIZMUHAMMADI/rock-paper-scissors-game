let userscore = 0;
let compscore = 0;

let msg = document.querySelector('#msg');

const genCompChoice = ()=>{
    const options = ['rock', 'paper','scissor'];
    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}

let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#computer-score");



let showWinner = (userWin , choiceID, compChoice) =>{
    if (userWin ) {
        userscore++;
        userScorepara.innerText= userscore;
        console.log("you win");
        msg.innerText = "you Win !!";
        msg.style.backgroundColor = "green";

    }
    else{
        compscore++;
        compScorepara.innerText = compscore;
        console.log("you lose");
        msg.innerText = "you lose !!";
        msg.style.backgroundColor = "red";


    }
}



const playGame = (choiceID)=>{
    console.log(choiceID ," USer Choice");
    let compChoice = genCompChoice( );
    console.log(compChoice ,"Comp Choice");
    if (choiceID == compChoice) {
        draw();  
      } else{
        let userWin = true;
        if (choiceID == "rock") {
            userWin = compChoice==='paper'?false:true ;
        }else if (choiceID == "paper") {
           userWin = compChoice==="scissor"? false :true;
        }else { 
            userWin= compChoice ==='rock' ? false : true; 
        }
        showWinner(userWin, choiceID,compChoice);
      }
};

let choices = document.querySelectorAll( '.choice' );
choices.forEach(( choice ) => {
    console.log(choice);
	choice.addEventListener('click', ()=> { 
        let choiceID = choice.getAttribute("id");
        playGame(choiceID);
    })});  

    let draw = ()=> {
        console.log("game was draw");
        msg.innerText ="Its a Draw! playagain";
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black";
    }
    
   