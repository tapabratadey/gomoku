
function drawLine(ctx, x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function generate() {
    var e = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = e;
    document.write(e);
    if (e == "19x19") {
        var dim = 19;
        width = 19;
        height = 19;
    }
    else if (e == "13x13") {
        width = 13;
        height = 13;
        dim = 13
    }
    else{
        width = 9;
        height = 9;
        dim = 9;
    }
    var myarray = new Array(dim)
    for (i = 0; i < dim; i++) {
        myarray[i] = new Array(dim);
    }
    for (var i = 0; i < dim; i++) {
        for (var j = 0; j < dim; j++) {
            myarray[i][j] = 0;
        }
    }
    document.write(width);
    document.write(height);
    document.write("<br/>");
    document.write("<br/>");
    var canvas = document.getElementById("GomokuCanvas");
    var ctx = canvas.getContext('2d');
    drawLine(ctx, 0,0,canvas.width, 0);
    drawLine(ctx, canvas.width, 0, canvas.width, canvas.height);
    drawLine(ctx, canvas.width, canvas.height, 0, canvas.height);
    drawLine(ctx, 0, canvas.height, 0,0);
    for (var i = 0; i < dim; i++) {
        for (var j = 0; j < dim; j++) {
            document.write(myarray[i][j] + "&emsp;");
        }
        document.write("<br/>");
    }
}