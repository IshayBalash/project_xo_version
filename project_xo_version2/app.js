//////////main game board init////////////////
var MainBoard = new MainGameBoard();
MainBoard.init_the_board();
///////////////////////////////////////////////
/////////computer//////////////////////
var computer = new Computer();
computer.Player_board = new MainGameBoard();
computer.Player_board.board = MainBoard.board;
computer.Update_Player_Mat();
///////////////user///////////////////////////////
var user = new User();
user.user_game_board = new MainGameBoard();
user.user_game_board.board = MainBoard.board;
user.update_player_mat();
///////////////////////////////////////////////
var btnElement = "<button onclick=\"Game(MainBoard, user, computer)\">clicke</button>";
MainBoard.print();
document.write("<br/>" + btnElement);
//////////////////////////
function user_win() {
    alert("user win");
}
//////////////////////////
function computer_win() {
    alert("computer win");
}
////////////////////////
function tie() {
    alert("it is a tie");
}
/////////////////////////////////////////////////////////////
function Game(MainBoard, user, computer) {
    user.update_player_mat();
    var value = user.user_turn();
    while (value == false) {
        value = user.user_turn();
    }
    user.update_player_board();
    var IsGameOver1 = MainBoard.checkthematrows(MainBoard.board);
    var IsGameOver2 = MainBoard.checkthematcoloms(MainBoard.board);
    var IsGameOver3 = MainBoard.checkthematalacson1(MainBoard.board);
    var IsGameOver4 = MainBoard.checkthematalacson2(MainBoard.board);
    if (IsGameOver1 == 1 || IsGameOver2 == 1 || IsGameOver3 == 1 || IsGameOver4 == 1) {
        alert("user win");
        btnElement = "<button onclick=\"user_win()\">clicke</button>";
        document.body.innerHTML = "";
        MainBoard.print();
        document.write("<br/>" + btnElement);
    }
    else if (IsGameOver1 == 2 || IsGameOver2 == 2 || IsGameOver3 == 2 || IsGameOver4 == 2) {
        alert("computer win");
        btnElement = "<button onclick=\"computer_win()\">clicke</button>";
        document.body.innerHTML = "";
        MainBoard.print();
        document.write("<br/>" + btnElement);
    }
    else {
        var counter = 0;
        for (var i = 0; i < MainBoard.board.length; i++) {
            for (var j = 0; j < MainBoard.board[i].length; j++) {
                if (MainBoard.board[i][j] == "x" || MainBoard.board[i][j] == "o") {
                    counter++;
                }
            }
        }
        if (counter == MainBoard.board.length * MainBoard.board.length) {
            alert("it is a tie");
            btnElement = "<button onclick=\"tie()\">clicke</button>";
            document.body.innerHTML = "";
            MainBoard.print();
            document.write("<br/>" + btnElement);
        }
        computer.Update_Player_Mat();
        computer.Computer_turn();
        computer.Update_Player_board();
        var IsGameOver1_1 = MainBoard.checkthematrows(MainBoard.board);
        var IsGameOver2_1 = MainBoard.checkthematcoloms(MainBoard.board);
        var IsGameOver3_1 = MainBoard.checkthematalacson1(MainBoard.board);
        var IsGameOver4_1 = MainBoard.checkthematalacson2(MainBoard.board);
        if (IsGameOver1_1 == 1 || IsGameOver2_1 == 1 || IsGameOver3_1 == 1 || IsGameOver4_1 == 1) {
            alert("user win");
            btnElement = "<button onclick=\"user_win()\">clicke</button>";
            document.body.innerHTML = "";
            MainBoard.print();
            document.write("<br/>" + btnElement);
        }
        else if (IsGameOver1_1 == 2 || IsGameOver2_1 == 2 || IsGameOver3_1 == 2 || IsGameOver4_1 == 2) {
            alert("computer win");
            btnElement = "<button onclick=\"computer_win()\">clicke</button>";
            document.body.innerHTML = "";
            MainBoard.print();
            document.write("<br/>" + btnElement);
        }
        else {
            document.body.innerHTML = "";
            MainBoard.print();
            document.write("<br/>" + btnElement + "<br/>");
        }
    }
}
//# sourceMappingURL=app.js.map