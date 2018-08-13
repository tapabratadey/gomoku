// game generator
function generateGame() {
    var e = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = e;
    var canvas = document.getElementById("GomokuCanvas");
    var context = canvas.getContext('2d');
    var dim = 0;
    if (e == "19x19") {
        dim = 19;
    }
    else if (e == "13x13") {
        dim = 13
    }
    else{
        dim = 9;
    }
    mouseCords();
    make2Darray(dim, context);
}

// get mouse coordinates
function mouseCords(){
    var context = document.getElementById('GomokuCanvas').getContext('2d');
    context.canvas.addEventListener('click', function(event) {
        var x = event.clientX;
        var y = event.clientY;
        document.getElementById('demo').innerHTML = "[X = " + x + "][Y = " + y + "]";
    });
}

// generate the 2d array
function make2Darray(dim, context){
    var myarray = new Array(dim)
    for (i = 0; i < dim; i++) {
        myarray[i] = new Array(dim);
    }
    set2Darray(dim, myarray);
    draw2Darray(myarray, context);
}

// set the empty 2d array
function set2Darray(dim, myarray){
    for (var i = 0; i < dim; i++) {
        for (var j = 0; j < dim; j++) {
            myarray[i][j] = 0;
        }
    }
}

// draw the 2d array
function draw2Darray(myarray, context){
    for (var x = 0; x < myarray.length; x++) {
        var y = 0;
        while(y < myarray.length - 1) {
            context.beginPath();
            context.moveTo(0, y * 50);
            context.lineTo(x * 50, y * 50);
            context.stroke();
            y++;
            if (y == myarray.length - 1){
                context.beginPath();
                context.moveTo(0, y * 50);
                context.lineTo(x * 50, y * 50);
                context.stroke();   
            }
        }
        context.moveTo(x * 50, 0);
        context.lineTo(x * 50, y * 50);
        context.stroke();
    }
}

function drawPiece(){
    
}