//var assert = require('assert');
//var _ = require('lodash');


function print(board){
    document.write('<table>');
    
    _.forEach(board, function(row, key){
        document.write("<tr>");
        _.forEach(row, function(square, k){
            document.write("<td>" + square + "</td>")
   
        });
        document.write("</tr>");
    });
    
    document.write('</table>');
    
}

var board = {};
    board.a = {
        'one': '<span class="piece black rook"></span>',
        'two': '<span class="piece black knight"></span>',
        'three': '<span class="piece black bishop"></span>',
        'four': '<span class="piece black queen"></span>',
        'five': '<span class="piece black king"></span>',
        'six': '<span class="piece black bishop"></span>',
        'seven': '<span class="piece black knight"></span>',
        'eight': '<span class="piece black rook"></span>'
    };
    board.b = {
        'one': '<span class="piece black pawn"></span>',
        'two': '<span class="piece black pawn"></span>',
        'three': '<span class="piece black pawn"></span>',
        'four': '<span class="piece black pawn"></span>',
        'five': '<span class="piece black pawn"></span>',
        'six': '<span class="piece black pawn"></span>',
        'seven': '<span class="piece black pawn"></span>',
        'eight': '<span class="piece black pawn"></span>'
    };
    board.c = {
        'one': '',
        'two': '',
        'three': '',
        'four': '',
        'five': '',
        'six': '',
        'seven': '',
        'eight': ''
    };
    board.d = {
        'one': '',
        'two': '',
        'three': '',
        'four': '',
        'five': '',
        'six': '',
        'seven': '',
        'eight': ''
    };
    board.e = {
        'one': '',
        'two': '',
        'three': '',
        'four': '',
        'five': '',
        'six': '',
        'seven': '',
        'eight': ''
    };
    board.f = {
        'one': '',
        'two': '',
        'three': '',
        'four': '',
        'five': '',
        'six': '',
        'seven': '',
        'eight': ''
    };
    board.g = {
        'one': '&#9823;',
        'two': '&#9823;',
        'three': '&#9823;',
        'four': '&#9823;',
        'five': '&#9823;',
        'six': '&#9823;',
        'seven': '&#9823;',
        'eight': '&#9823;'
    };
    board.h = {
        'one': '<span class="">&#9820;</span>',
        'two': '<span class="">&#9822;</span>',
        'three': '<span class="">&#9821;</span>',
        'four': '<span class="">&#9819;</span>',
        'five': '<span class="">&#9818;</span>',
        'six': '<span class="">&#9821;</span>',
        'seven': '<span class="">&#9822;</span>',
        'eight': '<span class="">&#9820;</span>'
    };

//board.c.three = board.a.one;
//board.a.one = '';

print(board);


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
