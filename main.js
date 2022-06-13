let cell = document.querySelectorAll(".row > div")
let winnerIs = document.getElementById('winnerCircle');

let x=0


for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click" , cellClicked)    
}

function cellClick() {
    event.target.textContent = window.location.reload();
}

function isEven(x) {
    if (x % 2 == 0) {
        event.target.textContent = "O"
    }else if (x % 2 !== 0) {
        event.target.textContent = "X"
    }
}



function cellClicked() {
    x++
    isEven(x)

    let tRow = (cell[0].textContent + cell[1].textContent + cell[2].textContent);
    let mRow = (cell[3].textContent + cell[4].textContent + cell[5].textContent);
    let bRow = (cell[6].textContent + cell[7].textContent + cell[8].textContent);
    let lColumn = (cell[0].textContent + cell[3].textContent + cell[6].textContent);
    let cColumn = (cell[1].textContent + cell[4].textContent + cell[7].textContent);
    let rColumn = (cell[2].textContent + cell[5].textContent + cell[8].textContent);
    let fSlash = (cell[0].textContent + cell[4].textContent + cell[8].textContent);
    let bSlash = (cell[2].textContent + cell[4].textContent + cell[6].textContent);
    let pWins = [tRow, mRow, bRow, lColumn, cColumn, rColumn, fSlash, bSlash];

    for (var i = 0; i < pWins.length; i++) {
        if (pWins[i] === 'XXX') {
            winnerIs.textContent = 'And the winner is... X!';
            for (let i = 0; i < cell.length; i++) {
                cell[i].addEventListener("click" , cellClick)    
            }
        } else if (pWins[i] === 'OOO') {
            winnerIs.textContent = 'And the winner is... O!';
            for (let i = 0; i < cell.length; i++) {
                cell[i].addEventListener("click" , cellClick)    
            }
        }
    }

    if (x == 9 ) {
        winnerIs.textContent = 'Looks like we have a draw!';
        for (let i = 0; i < cell.length; i++) {
            cell[i].addEventListener("click" , cellClick)    
        }        
    };
}