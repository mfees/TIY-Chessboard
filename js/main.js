function print(){
    
    var rowIdentifier = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    
    document.write('<table>');
    
    var index = 0;
    
    _.forEach(board, function(row, key){
    
        document.write("<tr>");
        var idNumber = 1;
        
        _.forEach(row, function(square, k){
        
            var squareId = rowIdentifier[index] + idNumber;
            
            document.write("<td id=" + squareId + ">" + square + "</td>")
            idNumber++;
        
        });
        
        index++;
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
        'one': '<span class="piece white pawn"></span>',
        'two': '<span class="piece white pawn"></span>',
        'three': '<span class="piece white pawn"></span>',
        'four': '<span class="piece white pawn"></span>',
        'five': '<span class="piece white pawn"></span>',
        'six': '<span class="piece white pawn"></span>',
        'seven': '<span class="piece white pawn"></span>',
        'eight': '<span class="piece white pawn"></span>'
    };
    board.h = {
        'one': '<span class="piece white rook"></span>',
        'two': '<span class="piece white knight"></span>',
        'three': '<span class="piece white bishop"></span>',
        'four': '<span class="piece white queen"></span>',
        'five': '<span class="piece white king"></span>',
        'six': '<span class="piece white bishop"></span>',
        'seven': '<span class="piece white knight"></span>',
        'eight': '<span class="piece white rook"></span>'
    };


print(board);

   
var whatMoveAreWeOn = 0;

function movePiece(){
    
    if (whatMoveAreWeOn == 0){
        var lContent = document.getElementById('a2').innerHTML;
        document.getElementById('a2').innerHTML = "";
        document.getElementById('c3').innerHTML = lContent;
        whatMoveAreWeOn++;
    }else if(whatMoveAreWeOn == 1){
        var lContent = document.getElementById('g8').innerHTML;
        document.getElementById('g8').innerHTML = "";
        document.getElementById('f8').innerHTML = lContent;
        whatMoveAreWeOn++;
    }else if(whatMoveAreWeOn == 2){
        var lContent = document.getElementById('b7').innerHTML;
        document.getElementById('b7').innerHTML = "";
        document.getElementById('c7').innerHTML = lContent;
        whatMoveAreWeOn++;
    }else if(whatMoveAreWeOn == 3){
        var lContent = document.getElementById('h2').innerHTML;
        document.getElementById('h2').innerHTML = "";
        document.getElementById('f4').innerHTML = lContent;
        whatMoveAreWeOn++;
    }
}

function movePieceBack(){
    
    
    if (whatMoveAreWeOn == 0){
        //do nothing
    }else if (whatMoveAreWeOn == 1){
        var lContent = document.getElementById('c3').innerHTML;
        document.getElementById('c3').innerHTML = "";
        document.getElementById('a2').innerHTML = lContent;
        whatMoveAreWeOn--;
    }else if(whatMoveAreWeOn == 2){
        var lContent = document.getElementById('f8').innerHTML;
        document.getElementById('f8').innerHTML = "";
        document.getElementById('g8').innerHTML = lContent;
        whatMoveAreWeOn--;
    }else if(whatMoveAreWeOn == 3){
        var lContent = document.getElementById('c7').innerHTML;
        document.getElementById('c7').innerHTML = "";
        document.getElementById('b7').innerHTML = lContent;
        whatMoveAreWeOn--;
    }
    else if(whatMoveAreWeOn == 4){
        var lContent = document.getElementById('f4').innerHTML;
        document.getElementById('f4').innerHTML = "";
        document.getElementById('h2').innerHTML = lContent;
        whatMoveAreWeOn--;
    }
}

 
function fastForward(){
    var lContent = document.getElementById('a1').innerHTML;
        document.getElementById('a1').innerHTML = "";
        document.getElementById('c4').innerHTML = lContent;
    var mContent = document.getElementById('g8').innerHTML;
        document.getElementById('g8').innerHTML = "";
        document.getElementById('f8').innerHTML = mContent;
    var lContent = document.getElementById('b7').innerHTML;
        document.getElementById('b7').innerHTML = "";
        document.getElementById('c7').innerHTML = lContent;
    var lContent = document.getElementById('h2').innerHTML;
        document.getElementById('h2').innerHTML = "";
        document.getElementById('f4').innerHTML = lContent;
    
}

function rewind(){
     var lContent = document.getElementById('c4').innerHTML;
        document.getElementById('c4').innerHTML = "";
        document.getElementById('a1').innerHTML = lContent;
    var mContent = document.getElementById('f8').innerHTML;
        document.getElementById('f8').innerHTML = "";
        document.getElementById('g8').innerHTML = mContent;
    var lContent = document.getElementById('c7').innerHTML;
        document.getElementById('c7').innerHTML = "";
        document.getElementById('b7').innerHTML = lContent;
        whatMoveAreWeOn--;
    var lContent = document.getElementById('f4').innerHTML;
        document.getElementById('f4').innerHTML = "";
        document.getElementById('h2').innerHTML = lContent;
}
 


    document.write('<div class="button-group">');
    document.write('<i class="fa fa-angle-double-left fa-lg" onClick="rewind()"></i>');
    document.write('<i class="fa fa-angle-left fa-lg" onClick="movePieceBack()"></i>');
    document.write('<i class="fa fa-angle-right fa-lg" onClick="movePiece()"></i>');
    document.write('<i class="fa fa-angle-double-right fa-lg" onclick="fastForward()"></i>');
    document.write('</div>');