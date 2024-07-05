let boxes = document.querySelectorAll(".box");  // Assuming 'box' is a class name
let resetBtn = document.querySelector("#reset-Btn");
let newGameBtn = document.querySelector("#newGame-Btn");
let winnerMessage = document.querySelector("#winner-message");
let msg = document.querySelector("#msg");

let turnO = true;

const winningPattern = [
    [0, 1, 2],
    [0, 3, 6], 
    [0, 4, 8], 
    [1, 4, 7], 
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5], 
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    winnerMessage.classList.add("hidden");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (turnO) {
                box.innerText = "O";
                box.style.color = "#61dafb";
                turnO = false;       
            } else {
                box.innerText = "X";
                box.style.color = "red";
                turnO = true;
            }
            checkWinner();
        }
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        console.log(`Disabling box: ${box}`);  // Debugging log
        
        box.classList.add("disabled");
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.classList.remove("disabled");
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    winnerMessage.classList.remove("hidden");
    disableBoxes();

}

const checkWinner = () => {
    let isDraw = true;
    
    for (let pattern of winningPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
                return;  // Exit the function if there is a winner
            }
        }
    }

    // Check for draw condition
    boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false;        
        }
    });

    if (isDraw) {
        showDraw();
    }
}

const showDraw = () => {
    msg.innerText = "It's a draw!";
    winnerMessage.classList.remove("hidden");
    disableBoxes();
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


