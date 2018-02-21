
//////////main game board init////////////////
let MainBoard: MainGameBoard = new MainGameBoard()
MainBoard.init_the_board()
///////////////////////////////////////////////
/////////computer//////////////////////
let computer: Computer = new Computer()
computer.Player_board = new MainGameBoard()
computer.Player_board.board = MainBoard.board;
computer.Update_Player_Mat()
///////////////user///////////////////////////////
let user: User = new User();
user.user_game_board = new MainGameBoard()
user.user_game_board.board = MainBoard.board;
user.update_player_mat()
///////////////////////////////////////////////
let btnElement: string = `<button onclick="Game(MainBoard, user, computer)">clicke</button>`;
MainBoard.print();
document.write("<br/>" + btnElement);







//////////////////////////
function user_win() {
    alert("user win")
}
//////////////////////////

function computer_win() {
    alert("computer win")
}
////////////////////////
function tie() {
    alert("it is a tie")
}


/////////////////////////////////////////////////////////////
function Game(MainBoard: MainGameBoard, user: User, computer: Computer): void {
    user.update_player_mat()
    let value: boolean = user.user_turn()
    while (value == false) {
        value = user.user_turn()
    }
    user.update_player_board()
    
    let IsGameOver1: number = MainBoard.checkthematrows(MainBoard.board);
    let IsGameOver2: number = MainBoard.checkthematcoloms(MainBoard.board)
    let IsGameOver3: number = MainBoard.checkthematalacson1(MainBoard.board)
    let IsGameOver4: number = MainBoard.checkthematalacson2(MainBoard.board)
    if (IsGameOver1 == 1 || IsGameOver2 == 1 || IsGameOver3 == 1 || IsGameOver4 == 1) {
        alert("user win");
        btnElement = `<button onclick="user_win()">clicke</button>`;
        document.body.innerHTML = ""
        MainBoard.print();
        document.write("<br/>" + btnElement);

    }
    else if (IsGameOver1 == 2 || IsGameOver2 == 2 || IsGameOver3 == 2 || IsGameOver4 == 2) {
        alert("computer win");
        btnElement = `<button onclick="computer_win()">clicke</button>`;
        document.body.innerHTML = ""
        MainBoard.print();
        document.write("<br/>" + btnElement);

    }
    else {
        let counter:number=0
        for (let i: number = 0; i < MainBoard.board.length;i++){
            for (let j: number = 0; j < MainBoard.board[i].length; j++) {
                if (MainBoard.board[i][j] == "x" ||MainBoard.board[i][j] == "o") {
                    counter++
                }
            }
        }
        if (counter == MainBoard.board.length * MainBoard.board.length) {
            alert("it is a tie");
            btnElement = `<button onclick="tie()">clicke</button>`;
            document.body.innerHTML = ""
            MainBoard.print();
            document.write("<br/>" + btnElement);

        }
        computer.Update_Player_Mat();
        computer.Computer_turn();
        computer.Update_Player_board()
        let IsGameOver1: number = MainBoard.checkthematrows(MainBoard.board);
        let IsGameOver2: number = MainBoard.checkthematcoloms(MainBoard.board)
        let IsGameOver3: number = MainBoard.checkthematalacson1(MainBoard.board)
        let IsGameOver4: number = MainBoard.checkthematalacson2(MainBoard.board)
        if (IsGameOver1 == 1 || IsGameOver2 == 1 || IsGameOver3 == 1 || IsGameOver4 == 1) {
            alert("user win");
            btnElement = `<button onclick="user_win()">clicke</button>`;
            document.body.innerHTML = ""
            MainBoard.print();
            document.write("<br/>" + btnElement);

        }
        else if (IsGameOver1 == 2 || IsGameOver2 == 2 || IsGameOver3 == 2 || IsGameOver4 == 2) {
            alert("computer win");
            btnElement = `<button onclick="computer_win()">clicke</button>`;
            document.body.innerHTML=""
            MainBoard.print();
            document.write("<br/>" + btnElement);

        }
        else {
            document.body.innerHTML = ""
            MainBoard.print()
            document.write("<br/>" + btnElement+"<br/>");


        }

    }

}
 











    
