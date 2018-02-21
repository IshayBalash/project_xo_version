var User = (function () {
    /////////////////////////////////////////////////////////////////
    function User() {
        this.user_mat = new Array(3);
        for (var i = 0; i < this.user_mat.length; i++) {
            this.user_mat[i] = new Array(3);
        }
    }
    ////////////////////////////////////////////////////////
    User.prototype.update_player_board = function () {
        for (var i = 0; i < this.user_game_board.board.length; i++) {
            for (var j = 0; j < this.user_game_board.board[i].length; j++) {
                this.user_game_board.board[i][j] = this.user_mat[i][j];
            }
        }
    };
    //////////////////////////////////////////////////////////////
    User.prototype.update_player_mat = function () {
        for (var i = 0; i < this.user_mat.length; i++) {
            for (var j = 0; j < this.user_mat[i].length; j++) {
                this.user_mat[i][j] = this.user_game_board.board[i][j];
            }
        }
    };
    //////////////////////////////////////////////////////////////////////////////
    User.prototype.user_turn = function () {
        var str = prompt("enter number");
        if (Number(str) > 9) {
            alert("the number you enterd is bigger then 9");
            return false;
        }
        if (Number(str) < 1) {
            alert("the number you enterd is below 1");
            return false;
        }
        if (Number(str) % 1 != 0) {
            var num = Number(str);
            var isnan = isNaN(num);
            if (isnan) {
                alert("you enterd a string not a number");
                return false;
            }
            alert("you didnt enterd a full number");
            return false;
        }
        var serch = false;
        for (var i = 0; i < this.user_mat.length; i++) {
            for (var j = 0; j < this.user_mat[i].length; j++) {
                if (Number(str) == Number(this.user_mat[i][j])) {
                    this.chosen_Value = str;
                    serch = true;
                }
            }
        }
        if (serch == false) {
            alert("the place you chose has alredy been field");
            return false;
        }
        else if (serch) {
            for (var i = 0; i < this.user_mat.length; i++) {
                for (var j = 0; j < this.user_mat[i].length; j++) {
                    if (this.chosen_Value == this.user_mat[i][j]) {
                        this.user_mat[i][j] = "x";
                        return true;
                    }
                }
            }
        }
    };
    return User;
}());
//# sourceMappingURL=class user.js.map