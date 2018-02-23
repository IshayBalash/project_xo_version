class User {
    public user_mat: Array<Array<string>>;
    /*
    מטריצת המשחק של המשתמש-לא הכרחית כרגע, אבל אם בעתיד נרצה ליצור אלגוריתם בחירה של תור השחקן יש לקיים הפרדה מוחלטת בין השחקן
    ללוח המשחק הראשי
    */
    private chosen_Value: string;//משתנה שנעשה בו שימוש על מנת לתאם בין לוח המשחק הראשי למטריצת השחקן
    public user_game_board: MainGameBoard;
    ////////////////////////////////////////////////////////
    public update_player_board(): void {
        for (let i: number = 0; i < this.user_game_board.board.length; i++) {
            for (let j: number = 0; j < this.user_game_board.board[i].length; j++) {
                this.user_game_board.board[i][j] = this.user_mat[i][j]
            }
        }
    }
    //////////////////////////////////////////////////////////////
    public update_player_mat(): void {
        for (let i: number = 0; i < this.user_mat.length; i++) {
            for (let j: number = 0; j < this.user_mat[i].length; j++) {
                this.user_mat[i][j] = this.user_game_board.board[i][j]
            }
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    public user_turn(): boolean {
        /*
         בתור השחקן מבתצעת בדיקה של תוכן הטקסט שהמשתש הכניס ורק במידה וקלט תקין, הפונקציה תתקדם
         */
        let str: string = prompt("enter number");
        if (Number(str) > 9) {
            alert("the number you enterd is bigger then 9");
            return false
        }
        if (Number(str) < 1) {
            alert("the number you enterd is below 1");
            return false
        }
        if (Number(str) % 1 != 0) {
            let num: number = Number(str);
            let isnan = isNaN(num)
            if (isnan) {
                alert("you enterd a string not a number");
                return false
            }
            alert("you didnt enterd a full number");
            return false
        }
        

        let serch: boolean = false//בדיקה אחרונה של האם הקלט שהתקבל באמת קיים במטריצה-אם לא זה אומר שהערך נבחר כבר
        for (let i: number = 0; i < this.user_mat.length; i++) {
            for (let j: number = 0; j < this.user_mat[i].length; j++) {
                if (Number(str) == Number(this.user_mat[i][j])) {
                    this.chosen_Value = str;
                    serch = true;
                }
            }
        }
        if (serch == false) {
            alert("the place you chose has alredy been field")
            return false
        }
        else if (serch) {//רק אם הקלט תקין מתבצעת ההשמה של הערך במטירצת השחקן
            for (let i: number = 0; i < this.user_mat.length; i++) {
                for (let j: number = 0; j < this.user_mat[i].length; j++) {
                    if (this.chosen_Value == this.user_mat[i][j]) {
                        this.user_mat[i][j] = "x"
                        return true;
                    }
                }
            }
        }
    }
    /////////////////////////////////////////////////////////////////
    public constructor() {//אתחול של מטריצת השחקן ברגע יצירת האוביקט
        this.user_mat = new Array<Array<string>>(3);
        for (let i: number = 0; i < this.user_mat.length; i++) {
            this.user_mat[i] = new Array<string>(3)
        }
    }




}