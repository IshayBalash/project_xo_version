class Computer {
    public Player_Mat: Array<Array<string>>;//מטריצת המחשב-בנויה מ8 מערכים של 3. מכילה את כל האפשרויות לניצחון של אחד השחקים
    public Player_board: MainGameBoard;//לוח המשחק-יצביע אל לוח המשחק הראשי
    private Chosen_Value: string;//המקום במטריצה בו יסומן עיגול בכל תור. משמש לתיאום בין מטריצת המחשב ללוח המשחק
    ///////////////////function section//////////////////
    public Update_Player_Mat(): void {//עדכון מטריצת המחשב על פי מטריצת הלוח הראשית
        for (let i: number = 0; i < this.Player_board.board.length; i++) {
            for (let j: number = 0; j < this.Player_board.board[i].length; j++) {
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
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////

    public Update_Player_board(): void {//עדכון לוח המשחק בסיום כל תור. מתבצע באמצעות המשתנה 
        for (let i: number = 0; i < this.Player_board.board.length; i++) {
            for (let j: number = 0; j < this.Player_board.board[i].length; j++) {
                if (this.Chosen_Value == this.Player_board.board[i][j]) {
                    this.Player_board.board[i][j] = "o";
                }
            }
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    public Computer_turn(): void {
        /*
        בתור המחשב יש שלושה שלבים:
        בדיקה של האם ניתן לנצח, במידה ולא
        בדיקה של האם יש אפשרות להפסד בתור הבא במידה ולא
        בחירת ערך ריק בצורה רנדומלית במטריצת המחשב
        */
        for (let i: number = 0; i < this.Player_Mat.length; i++) {
            let counter: number = 0;
            let temp: string;
            for (let j: number = 0; j < this.Player_Mat[i].length; j++) {
                if (this.Player_Mat[i][j] == "o") {
                    temp = this.Player_Mat[i][j];
                    break;
                }
            }
            for (let j: number = 0; j < this.Player_Mat[i].length; j++) {
                if (this.Player_Mat[i][j] == temp) {
                    counter++;
                }
            }
            if (counter == 2) {
                for (let j: number = 0; j < this.Player_Mat[i].length; j++) {
                    if (this.Player_Mat[i][j] == "x" || this.Player_Mat[i][j] == "o") {
                        continue
                    }
                    else {
                        this.Chosen_Value = this.Player_Mat[i][j];
                        for (let i: number = 0; i < this.Player_Mat.length; i++) {
                            for (let j: number = 0; j < this.Player_Mat[i].length; j++) {
                                if (this.Player_Mat[i][j] == this.Chosen_Value) {
                                    this.Player_Mat[i][j] = "o";
                                }
                            }
                        }
                        return;
                    }
                }
            }
        }
        for (let i: number = 0; i < this.Player_Mat.length; i++) {
            let counter: number = 0;
            let temp: string;
            for (let j: number = 0; j < this.Player_Mat[i].length; j++) {
                if (this.Player_Mat[i][j] == "x") {
                    temp = this.Player_Mat[i][j];
                    break;
                }
            }
            for (let j: number = 0; j < this.Player_Mat[i].length; j++) {
                if (this.Player_Mat[i][j] == temp) {
                    counter++;
                }
            }
            if (counter == 2) {
                for (let j: number = 0; j < this.Player_Mat[i].length; j++) {
                    if (this.Player_Mat[i][j] == "x" || this.Player_Mat[i][j] == "o") {
                        continue;
                    }
                    else {
                        this.Chosen_Value = this.Player_Mat[i][j];
                        for (let i: number = 0; i < this.Player_Mat.length; i++) {
                            for (let j: number = 0; j < this.Player_Mat[i].length; j++) {
                                if (this.Player_Mat[i][j] == this.Chosen_Value) {
                                    this.Player_Mat[i][j] = "o";
                                }
                            }
                        }
                        return;
                    }
                }
            }
        }
        for (let i: number = 0; i < this.Player_Mat.length; i++) {
            let counter: number = 0;
            let temp: string
            for (let j: number = 0; j < this.Player_Mat[i].length; j++) {
                if (this.Player_Mat[i][j] == "x" || this.Player_Mat[i][j] == "o") {
                    temp = this.Player_Mat[i][j];
                    break;
                }
            }
            for (let j: number = 0; j < this.Player_Mat[i].length; j++) {
                if (this.Player_Mat[i][j] == temp) {
                    counter++;
                }
            }
            if (counter == 2) {
                for (let j: number = 0; j < this.Player_Mat[i].length; j++) {
                    if (this.Player_Mat[i][j] == "x" || this.Player_Mat[i][j] == "o") {
                        continue;
                    }
                    else {
                        this.Chosen_Value = this.Player_Mat[i][j];
                        for (let i: number = 0; i < this.Player_Mat.length; i++) {
                            for (let j: number = 0; j < this.Player_Mat[i].length; j++) {
                                if (this.Player_Mat[i][j] == this.Chosen_Value) {
                                    this.Player_Mat[i][j] = "o";
                                }
                            }
                        }
                        return;
                    }
                }
            }
        }
        let columsarr: Array<number> = new Array<number>();
        let rowsarr: Array<number> = new Array<number>();
        let index: number = -1;
        for (let i: number = 0; i < this.Player_Mat.length; i++) {
            for (let j: number = 0; j < this.Player_Mat[i].length; j++) {
                if (this.Player_Mat[i][j] == "x" || this.Player_Mat[i][j] == "o") {
                    continue;
                }
                else {
                    index++
                    columsarr[index] = i;
                    rowsarr[index] = j;
                }
            }
        }
        let randomnum: number = Math.round(Math.random() * columsarr.length + 0);
        this.Chosen_Value = this.Player_Mat[columsarr[randomnum]][rowsarr[randomnum]];
        this.Player_Mat[columsarr[randomnum]][rowsarr[randomnum]] = "o";
        for (let i: number = 0; i < this.Player_Mat.length; i++) {
            for (let j: number = 0; j < this.Player_Mat[i].length; j++) {
                if (this.Player_Mat[i][j] == this.Chosen_Value) {
                    this.Player_Mat[i][j] = "o";
                }
            }
        }
        return;
    }
    ///////////////////////////////////////////////////////////////
    public constructor() {//אתחול מטריצת המחשב בעת יצירת אוביקט
        this.Player_Mat = new Array<Array<string>>(8);
        for (let i: number = 0; i < this.Player_Mat.length; i++) {
            this.Player_Mat[i] = new Array<string>(3);
        }

    }
}