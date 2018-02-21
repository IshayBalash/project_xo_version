class MainGameBoard{
    public board: Array<Array<string>>
    //////////////function part///////////////////////
    public init_the_board(): void {
        this.board = new Array<Array<string>>(3);
        for (let i: number = 0; i < this.board.length; i++) {
            this.board[i] = new Array<string>(3)
        }
        let counter: number = 1;
        for (let i: number = 0; i < this.board.length; i++) {
            for (let j: number = 0; j < this.board[i].length; j++) {
                this.board[i][j] = `${counter}`
                counter++
            }
        }
    }
    ////////////////////////////////////////////////////////////////////
    public print(): void {
        for (let i: number = 0; i < this.board.length; i++) {
            for (let j: number = 0; j < this.board[i].length; j++) {
                document.write(this.board[i][j] + "|" + "&nbsp")
            }
            document.write("<br/>")
        }
    }
    ////////////////////////////////////////////////////////////////////
    public checkthematcoloms(mat: Array<Array<string>>): number {
        let counter = 0;
        for (let i: number = 0; i < mat.length; i++) {
            let placeholder: string = mat[i][0]
            if (placeholder == "x" || placeholder == "o") {
                counter = 1;
                for (let j: number = 1; j < mat[i].length; j++) {
                    if (mat[i][j] != placeholder) {
                        counter = 0;
                        break;
                    }
                    else {
                        counter++
                    }
                }
                if (counter == mat.length) {
                    if (placeholder == "x") {
                        return 1
                    }
                    else if (placeholder == "o") {
                        return 2
                    }
                }
                else {
                    counter = 0;
                }
            }
            else {
                counter = 0
                continue;
            }
        }

        return 0
    }
    ///////////////////////////////////////////////////////////////////////
    public checkthematrows(mat: Array<Array<string>>): number {
        let colums: number = 0;
        let counter: number
        for (let rows: number = 0; rows < mat.length; rows++) {
            let place_holder: string = mat[colums][rows];
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
                            return 1
                        }
                        else if (place_holder == "o") {
                            return 2
                        }
                    }
                }

            }
            counter = 0;
        }
        return 0
    }
    ///////////////////////////////////////////////////////////////
    public checkthematalacson1(mat: Array<Array<string>>): number {
        if (mat[0][0] == "x" || mat[0][0] == "o") {
            let counter: number = 1;
            let place_holer: string = mat[0][0];
            for (let i: number = 1; i < mat.length; i++) {
                for (let j: number = 1; j < mat[i].length; j++) {
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
                            return 1
                        }
                        else if (mat[0][0] == "o") {
                            return 2
                        }
                    }
                }
            }
        }
        else {
            return 0
        }
    }
    ///////////////////////////////////////////////////////////////////
    public checkthematalacson2(mat: Array<Array<string>>): number {
        if (mat[0][mat.length - 1] == "x" || mat[0][mat.length - 1] == "o") {
            let counter: number = 1;
            let place_holer: string = mat[0][mat.length - 1];
            for (let i: number = 1; i < mat.length; i++) {
                for (let j: number = mat.length - 2; j >= 0; j--) {
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
                            return 1
                        }
                        else if (place_holer == "o") {
                            return 2
                        }
                    }
                }
            }

        }
        else {
            return 0
        }
    }

    ////////////////////////////////////////////////////////////////////
}
