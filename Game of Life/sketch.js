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

    microcosm = new Microcosm(x, y);
    microcosm.createNewMicrocosm();
}

function draw(){
    background(255);
    microcosm.displayMicrocosm();
    microcosm.nextIteration();
}

function mousePressed(){
    let xPos = floor(mouseX / cellSize);
    let yPos = floor(mouseY / cellSize);

    if(mouseX < width && mouseY < height){
        if(microcosm.mc[xPos][yPos] === 0){
            microcosm.mc[xPos][yPos] = 1;
        } else if(microcosm.mc[xPos][yPos] === 1) {
            microcosm.mc[xPos][yPos] = 0;
        }
    }
}
