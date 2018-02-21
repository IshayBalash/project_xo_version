var Computer = (function () {
    ///////////////////////////////////////////////////////////////
    function Computer() {
        this.Player_Mat = new Array(8);
        for (var i = 0; i < this.Player_Mat.length; i++) {
            this.Player_Mat[i] = new Array(3);
        }
    }
    ///////////////////function section//////////////////
    Computer.prototype.Update_Player_Mat = function () {
        for (var i = 0; i < this.Player_board.board.length; i++) {
            for (var j = 0; j < this.Player_board.board[i].length; j++) {
                this.Player_Mat[i][j] = this.Player_board.board[i][j];
                this.Player_Mat[i + this.Player_board.board.length][j] = this.Player_board.board[j][i];
                if (i == j) {
                    this.Player_Mat[this.Player_board.board.length * 2][j] = this.Player_board.board[i][j];
                }
                if (i + j == this.Player_board.board.length - 1) {
                    this.Player_Mat[this.Player_board.board.length * 2 + 1][j] = this.Player_board.board[j][i];
                }
            }
        }
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////
    Computer.prototype.Update_Player_board = function () {
        for (var i = 0; i < this.Player_board.board.length; i++) {
            for (var j = 0; j < this.Player_board.board[i].length; j++) {
                if (this.Chosen_Value == this.Player_board.board[i][j]) {
                    this.Player_board.board[i][j] = "o";
                }
            }
        }
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    Computer.prototype.Computer_turn = function () {
        for (var i = 0; i < this.Player_Mat.length; i++) {
            var counter = 0;
            var temp = void 0;
            for (var j = 0; j < this.Player_Mat[i].length; j++) {
                if (this.Player_Mat[i][j] == "o") {
                    temp = this.Player_Mat[i][j];
                    break;
                }
            }
            for (var j = 0; j < this.Player_Mat[i].length; j++) {
                if (this.Player_Mat[i][j] == temp) {
                    counter++;
                }
            }
            if (counter == 2) {
                for (var j = 0; j < this.Player_Mat[i].length; j++) {
                    if (this.Player_Mat[i][j] == "x" || this.Player_Mat[i][j] == "o") {
                        continue;
                    }
                    else {
                        this.Chosen_Value = this.Player_Mat[i][j];
                        for (var i_1 = 0; i_1 < this.Player_Mat.length; i_1++) {
                            for (var j_1 = 0; j_1 < this.Player_Mat[i_1].length; j_1++) {
                                if (this.Player_Mat[i_1][j_1] == this.Chosen_Value) {
                                    this.Player_Mat[i_1][j_1] = "o";
                                }
                            }
                        }
                        return;
                    }
                }
            }
        }
        for (var i = 0; i < this.Player_Mat.length; i++) {
            var counter = 0;
            var temp = void 0;
            for (var j = 0; j < this.Player_Mat[i].length; j++) {
                if (this.Player_Mat[i][j] == "x" /*|| this.Player_Mat[i][j] == "o"*/) {
                    temp = this.Player_Mat[i][j];
                    break;
                }
            }
            for (var j = 0; j < this.Player_Mat[i].length; j++) {
                if (this.Player_Mat[i][j] == temp) {
                    counter++;
                }
            }
            if (counter == 2) {
                for (var j = 0; j < this.Player_Mat[i].length; j++) {
                    if (this.Player_Mat[i][j] == "x" || this.Player_Mat[i][j] == "o") {
                        continue;
                    }
                    else {
                        this.Chosen_Value = this.Player_Mat[i][j];
                        for (var i_2 = 0; i_2 < this.Player_Mat.length; i_2++) {
                            for (var j_2 = 0; j_2 < this.Player_Mat[i_2].length; j_2++) {
                                if (this.Player_Mat[i_2][j_2] == this.Chosen_Value) {
                                    this.Player_Mat[i_2][j_2] = "o";
                                }
                            }
                        }
                        return;
                    }
                }
            }
        }
        for (var i = 0; i < this.Player_Mat.length; i++) {
            var counter = 0;
            var temp = void 0;
            for (var j = 0; j < this.Player_Mat[i].length; j++) {
                if (this.Player_Mat[i][j] == "x" || this.Player_Mat[i][j] == "o") {
                    temp = this.Player_Mat[i][j];
                    break;
                }
            }
            for (var j = 0; j < this.Player_Mat[i].length; j++) {
                if (this.Player_Mat[i][j] == temp) {
                    counter++;
                }
            }
            if (counter == 2) {
                for (var j = 0; j < this.Player_Mat[i].length; j++) {
                    if (this.Player_Mat[i][j] == "x" || this.Player_Mat[i][j] == "o") {
                        continue;
                    }
                    else {
                        this.Chosen_Value = this.Player_Mat[i][j];
                        for (var i_3 = 0; i_3 < this.Player_Mat.length; i_3++) {
                            for (var j_3 = 0; j_3 < this.Player_Mat[i_3].length; j_3++) {
                                if (this.Player_Mat[i_3][j_3] == this.Chosen_Value) {
                                    this.Player_Mat[i_3][j_3] = "o";
                                }
                            }
                        }
                        return;
                    }
                }
            }
        }
        var columsarr = new Array();
        var rowsarr = new Array();
        var index = -1;
        for (var i = 0; i < this.Player_Mat.length; i++) {
            for (var j = 0; j < this.Player_Mat[i].length; j++) {
                if (this.Player_Mat[i][j] == "x" || this.Player_Mat[i][j] == "o") {
                    continue;
                }
                else {
                    index++;
                    columsarr[index] = i;
                    rowsarr[index] = j;
                }
            }
        }
        var randomnum = Math.round(Math.random() * columsarr.length + 0);
        this.Chosen_Value = this.Player_Mat[columsarr[randomnum]][rowsarr[randomnum]];
        this.Player_Mat[columsarr[randomnum]][rowsarr[randomnum]] = "o";
        for (var i = 0; i < this.Player_Mat.length; i++) {
            for (var j = 0; j < this.Player_Mat[i].length; j++) {
                if (this.Player_Mat[i][j] == this.Chosen_Value) {
                    this.Player_Mat[i][j] = "o";
                }
            }
        }
        return;
    };
    return Computer;
}());
//# sourceMappingURL=class Computer.js.map