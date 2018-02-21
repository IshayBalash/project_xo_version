var MainGameBoard = (function () {
    function MainGameBoard() {
    }
    //////////////function part///////////////////////
    MainGameBoard.prototype.init_the_board = function () {
        this.board = new Array(3);
        for (var i = 0; i < this.board.length; i++) {
            this.board[i] = new Array(3);
        }
        var counter = 1;
        for (var i = 0; i < this.board.length; i++) {
            for (var j = 0; j < this.board[i].length; j++) {
                this.board[i][j] = "" + counter;
                counter++;
            }
        }
    };
    ////////////////////////////////////////////////////////////////////
    MainGameBoard.prototype.print = function () {
        for (var i = 0; i < this.board.length; i++) {
            for (var j = 0; j < this.board[i].length; j++) {
                document.write(this.board[i][j] + "|" + "&nbsp");
            }
            document.write("<br/>");
        }
    };
    ////////////////////////////////////////////////////////////////////
    MainGameBoard.prototype.checkthematcoloms = function (mat) {
        var counter = 0;
        for (var i = 0; i < mat.length; i++) {
            var placeholder = mat[i][0];
            if (placeholder == "x" || placeholder == "o") {
                counter = 1;
                for (var j = 1; j < mat[i].length; j++) {
                    if (mat[i][j] != placeholder) {
                        counter = 0;
                        break;
                    }
                    else {
                        counter++;
                    }
                }
                if (counter == mat.length) {
                    if (placeholder == "x") {
                        return 1;
                    }
                    else if (placeholder == "o") {
                        return 2;
                    }
                }
                else {
                    counter = 0;
                }
            }
            else {
                counter = 0;
                continue;
            }
        }
        return 0;
    };
    ///////////////////////////////////////////////////////////////////////
    MainGameBoard.prototype.checkthematrows = function (mat) {
        var colums = 0;
        var counter;
        for (var rows = 0; rows < mat.length; rows++) {
            var place_holder = mat[colums][rows];
            if (place_holder == "x" || place_holder == "o") {
                counter = 1;
            }
            else {
                counter = 0;
                continue;
            }
            for (colums = 0; colums < mat.length; colums++) {
                if (mat[colums][rows] != place_holder) {
                    counter = 0;
                    break;
                }
                else {
                    counter++;
                    if (counter == mat.length + 1) {
                        if (place_holder == "x") {
                            return 1;
                        }
                        else if (place_holder == "o") {
                            return 2;
                        }
                    }
                }
            }
            counter = 0;
        }
        return 0;
    };
    ///////////////////////////////////////////////////////////////
    MainGameBoard.prototype.checkthematalacson1 = function (mat) {
        if (mat[0][0] == "x" || mat[0][0] == "o") {
            var counter = 1;
            var place_holer = mat[0][0];
            for (var i = 1; i < mat.length; i++) {
                for (var j = 1; j < mat[i].length; j++) {
                    if (i != j) {
                        continue;
                    }
                    else {
                        if (mat[i][j] != place_holer) {
                            return 0;
                        }
                        else {
                            counter++;
                        }
                    }
                    if (counter == mat.length) {
                        if (mat[0][0] == "x") {
                            return 1;
                        }
                        else if (mat[0][0] == "o") {
                            return 2;
                        }
                    }
                }
            }
        }
        else {
            return 0;
        }
    };
    ///////////////////////////////////////////////////////////////////
    MainGameBoard.prototype.checkthematalacson2 = function (mat) {
        if (mat[0][mat.length - 1] == "x" || mat[0][mat.length - 1] == "o") {
            var counter = 1;
            var place_holer = mat[0][mat.length - 1];
            for (var i = 1; i < mat.length; i++) {
                for (var j = mat.length - 2; j >= 0; j--) {
                    if (i + j != mat.length - 1) {
                        continue;
                    }
                    else {
                        if (mat[i][j] != place_holer) {
                            return 0;
                        }
                        else {
                            counter++;
                        }
                    }
                    if (counter == mat.length) {
                        if (place_holer == "x") {
                            return 1;
                        }
                        else if (place_holer == "o") {
                            return 2;
                        }
                    }
                }
            }
        }
        else {
            return 0;
        }
    };
    return MainGameBoard;
}());
//# sourceMappingURL=class main_game_board.js.map