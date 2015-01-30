//var assert = require('assert');
//var _ = require('lodash');


function print(board){
    document.write('<table>');
    
    var cell = "<td></td>";
    var row = "<tr></tr>";
    
    _.times(8, function(){
        document.write("<tr>");
        _.times(8, function(){
            document.write(cell);
        });
        document.write("</tr>");
    });
    
    document.write('</table>');
    
}

print();


//var board = [
//    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
//    ['P', 'P', 'P', 'P',  'P', 'P', 'P', 'P'],
//    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
//    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
//    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
//    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
//    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p',],
//    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'] ];


//console.log(board.join('\n') + '\n\n');
//
//
//// Move King's Pawn forward 2
//board[4][4] = board[6][4];
//board[6][4] = ' ';
//console.log(board.join('\n') + '\n\n');
//
//
//
//// Trying to move something- WOOHOO!
//board[2][2] = board[1][1];
//board[1][1] = ' ';
//console.log(board.join('\n') + '\n\n');
//
//
//
//// Move lowercase n forward 3 and left 1
//board[4][5] = board[7][6];
//board[7][6] = ' ';
//console.log(board.join('\n') + '\n\n');
//
//
//// Move uppercase R down 2 and left 4
//board[2][3] = board[0][7];
//board[0][7] = ' ';
//console.log(board.join('\n') + '\n\n');
//
//    
