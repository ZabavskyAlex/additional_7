module.exports = function solveSudoku(matrix) {
    var arr_null_cell = search_null_cell(matrix);
    while (ch_null(matrix)){
        for (var cell = 0; cell < arr_null_cell .length; cell++ ) {

            var flag_stop = false;
            var row = arr_null_cell [cell][0];
            var col = arr_null_cell [cell][1];

            for(var can = matrix[row][col] + 1; can < 10; can++ ){
                if (!flag_stop && ck_row(row,can,matrix) && ck_col(col,can,matrix)
                    && ck_square(row,col,can,matrix)) {
                        matrix[row][col] = can;
                        flag_stop = true;
                }
            }
            if (!flag_stop) {
                matrix[row][col] = 0;
                cell-=2;
            }
        }
    }
    return matrix;
};

function search_null_cell(matrix) {
    var arr_null_cell = [];
    for (let i = 0; i < 9; i++){
        for (let j = 0; j < 9; j++){
            if (matrix[i][j] == 0) arr_null_cell.push([i, j]);
        }
    }
    return arr_null_cell;
};

function ch_null(matrix) {
    for(var row = 0; row < 9; row++){
        for(var col = 0; col < 9; col++) {
            if(matrix[row][col] == 0)
                return true;
            }
        }
        return false;
}

function ck_square(row, col, can, matrix) {
    col = Math.floor(col / 3) * 3;
    row = Math.floor(row / 3) * 3;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (matrix[row + i][col + j] == can){
                return false;
            }
        }
    }
    return true
}

function ck_row(row, value, matrix) {
    for(var i = 0; i < 9; i++){
        if(matrix[row][i]==value){
            return false;
        }
    }
    return true;
}

function ck_col(col, value, matrix) {
    for(var i = 0; i < 9; i++){
        if(matrix[i][col]==value){
            return false;
        }

    }
    return true;
}

