let universe;
let x;
let y;
let paused = false;
let clear = false;
let cellSize = 10;

function setup(){    
    createCanvas(windowWidth, windowHeight - 200);
    x = floor(width / cellSize);
    y = floor(height / cellSize);

    universe = create2DArr(x, y);

    for(let i = 0; i < x; i++){
        for(let j = 0; j < y; j++){
            universe[i][j] = 0;
        }
    }
}

function draw(){
    background(255);

    for(let i = 0; i < x; i++){
        for(let j = 0; j < y; j++){
            let rectX = i * cellSize;
            let rectY = j * cellSize;

            if (universe[i][j] == 0) {
                fill(255);
                stroke(0);
                rect(rectX, rectY, cellSize, cellSize);
            }
        }
    }
}

function create2DArr(x, y){
    let arr = new Array(x);
    for(let i = 0; i < arr.length; i++){
        arr[i] = new Array(y);
    }
    return arr;
}