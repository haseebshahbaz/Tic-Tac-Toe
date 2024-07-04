let boxes = document.querySelectorAll(".box");  // Assuming 'box' is a class name
let resetBtn = document.querySelector("#reset-Btn");
let newGameBtn = document.querySelector("#newGame-Btn");

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

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"
            turnO = false;           
        } else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const checkWinner = () => {
    for (let pattern of winningPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText; // Fixed here

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log(`${pos1val} is the winner!`);
            }
        }
    }
}
