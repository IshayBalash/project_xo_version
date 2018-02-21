var Player = (function () {
    function Player() {
    }
    ///////////////////////////////////////////
    Player.prototype.update_player_mat = function () {
        for (var i = 0; i < this.user_mat.length; i++) {
            for (var j = 0; j < this.user_mat[i].length; i++) {
                this.user_mat[i][j] = this.user_game_board.board[i][j];
            }
        }
    };
    /////////////////////////////////////////////////////////////////////////////
    Player.prototype.update_player_board = function () {
        for (var i = 0; i < this.user_game_board.board.length; i++) {
            for (var j = 0; j < this.user_game_board.board[i].length; i++) {
                this.user_game_board.board[i][j] = this.user_mat[i][j];
            }
        }
    };
    //////////////////////////////////////////////////////////////////////////////
    Player.prototype.user_turn = function () {
        var str = prompt("enter number");
        if (Number(str) > 9) {
            alert("the number you enterd is bigger then 9");
            this.user_turn();
        }
        if (Number(str) < 1) {
            alert("the number you enterd is below 1");
            this.user_turn();
        }
        if (Number(str) % 1 != 0) {
            alert("you didnt enterd a full number");
            this.user_turn();
        }
        var serch = false;
        for (var i = 0; i < this.user_mat.length; i++) {
            for (var j = 0; j < this.user_mat[i].length; j++) {
                if (str == this.user_mat[i][j]) {
                    this.user_choise = str;
                    serch = true;
                }
            }
        }
        if (serch == false) {
            alert("the place you chose has alredy been field");
            this.user_turn();
        }
        else if (serch) {
            for (var i = 0; i < this.user_mat.length; i++) {
                for (var j = 0; j < this.user_mat[i].length; j++) {
                    if (this.user_choise == this.user_mat[i][j]) {
                        this.user_mat[i][j] = "x";
                        return;
                    }
                }
            }
        }
    };
    return Player;
}());
//# sourceMappingURL=calss user.js.map