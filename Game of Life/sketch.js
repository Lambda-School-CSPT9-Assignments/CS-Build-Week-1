let microcosm;
let x;
let y;
let paused = false;
let clear = false;
let cellSize = 10;

function setup(){
    createCanvas(windowWidth, windowHeight - 200);
    x = floor(width / cellSize);
    y = floor(height / cellSize);
    //alert(`Window Width: ${windowWidth}\n Window Heigth: ${windowHeight}\n Width: ${width}\n Heigth: ${height}\n X:${x}\n Y:${y}`);

    microcosm = new Microcosm(x, y);
    microcosm.createNewMicrocosm();
}

function draw(){
    background(255);
    microcosm.displayMicrocosm();
}

