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
    //console.table(microcosm.mc);
}

function draw(){
    background(255);
    microcosm.displayMicrocosm();
}

function mousePressed(){
    let xPos = floor(mouseX / cellSize);
    let yPos = floor(mouseY / cellSize);

    //console.log(microcosm.mc);

    //alert(`Mouse X: ${mouseX}\n Mouse Y: ${mouseY}\n xLocation: ${xPos}\n yLocation: ${yPos}\n Width:${width}\n Height:${height}`);
    //alert(typeof xPos);
    //alert(microcosm.mc[0][0]);

    if(mouseX < width && mouseY < height){
        if(microcosm.mc[xPos][yPos] === 0){
            microcosm.mc[xPos][yPos] = 1;
        } else if(microcosm.mc[xPos][yPos] === 1) {
            microcosm.mc[xPos][yPos] = 0;
        }
    }
    //console.table(microcosm.mc);
}
