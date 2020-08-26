let microcosm;
let x;
let y;
let paused = true;
let clear = false;
let cellSize = 10;
let generationCount = 0;

function setup(){
    let cnv = createCanvas(windowWidth / 2, windowHeight);
    cnv.parent("instance");

    x = floor(width / cellSize);
    y = floor(height / cellSize);

    microcosm = new Microcosm(x, y);
    microcosm.createRandomMicrocosm();
}

function draw(){
    background(255);
    updateButtonBackground();
    microcosm.displayMicrocosm();
    if(!paused){
        updateGenerationCount();
        microcosm.nextIteration();
    }
}

function mousePressed(){
    if(paused === false) return;

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

function controlButtonClicked(id){
    if(id === "pause") {
        paused = true;
    }
    if(id === "play") {
        paused = false;
    }
}

function reset(){
    paused = true;
    generationCount = 0;
    updateGenerationCount();
}

function updateGenerationCount(){
    document.getElementById("generation").innerHTML = generationCount;
  }

function updateButtonBackground(){
    if(paused){
        document.getElementById("pause").className = "button-select";
        document.getElementById("play").className = "button";
    } else {
        document.getElementById("play").className = "button-select";
        document.getElementById("pause").className = "button";
    }
}

function clearButtonClicked(){
    reset();
    microcosm.createBlankMicrocosm();
}

function randomButtonClicked(){
    reset();
    microcosm.createRandomMicrocosm();
}

function nextButtonClicked(){
    if(paused === false) return;

    microcosm.nextIteration();
    updateGenerationCount();
}

function presetButtonClicked(id){
    clearButtonClicked();
    if(id === "glider"){
        microcosm.mc[2][1] = 1;
        microcosm.mc[3][2] = 1;
        microcosm.mc[1][3] = 1;
        microcosm.mc[2][3] = 1;
        microcosm.mc[3][3] = 1;
    }
    if(id === "pulsar"){
        microcosm.mc[2][4] = 1;
        microcosm.mc[2][5] = 1;
        microcosm.mc[2][6] = 1;
        microcosm.mc[2][10] = 1;
        microcosm.mc[2][11] = 1;
        microcosm.mc[2][12] = 1;
        microcosm.mc[7][4] = 1;
        microcosm.mc[7][5] = 1;
        microcosm.mc[7][6] = 1;
        microcosm.mc[7][10] = 1;
        microcosm.mc[7][11] = 1;
        microcosm.mc[7][12] = 1;
        microcosm.mc[9][4] = 1;
        microcosm.mc[9][5] = 1;
        microcosm.mc[9][6] = 1;
        microcosm.mc[9][10] = 1;
        microcosm.mc[9][11] = 1;
        microcosm.mc[9][12] = 1;
        microcosm.mc[14][4] = 1;
        microcosm.mc[14][5] = 1;
        microcosm.mc[14][6] = 1;
        microcosm.mc[14][10] = 1;
        microcosm.mc[14][11] = 1;
        microcosm.mc[14][12] = 1;
        microcosm.mc[4][2] = 1;
        microcosm.mc[5][2] = 1;
        microcosm.mc[6][2] = 1;
        microcosm.mc[10][2] = 1;
        microcosm.mc[11][2] = 1;
        microcosm.mc[12][2] = 1;
        microcosm.mc[4][7] = 1;
        microcosm.mc[5][7] = 1;
        microcosm.mc[6][7] = 1;
        microcosm.mc[10][7] = 1;
        microcosm.mc[11][7] = 1;
        microcosm.mc[12][7] = 1;
        microcosm.mc[4][9] = 1;
        microcosm.mc[5][9] = 1;
        microcosm.mc[6][9] = 1;
        microcosm.mc[10][9] = 1;
        microcosm.mc[11][9] = 1;
        microcosm.mc[12][9] = 1;
        microcosm.mc[4][14] = 1;
        microcosm.mc[5][14] = 1;
        microcosm.mc[6][14] = 1;
        microcosm.mc[10][14] = 1;
        microcosm.mc[11][14] = 1;
        microcosm.mc[12][14] = 1;
    }
    if(id === "gun"){
        microcosm.mc[1][5] = 1;
        microcosm.mc[1][6] = 1;
        microcosm.mc[2][5] = 1;
        microcosm.mc[2][6] = 1;
        microcosm.mc[9][11] = 1;
        microcosm.mc[9][12] = 1;
        microcosm.mc[11][5] = 1;
        microcosm.mc[11][6] = 1;
        microcosm.mc[11][7] = 1;
        microcosm.mc[12][4] = 1;
        microcosm.mc[12][8] = 1;
        microcosm.mc[13][3] = 1;
        microcosm.mc[13][9] = 1;
        microcosm.mc[14][3] = 1;
        microcosm.mc[14][9] = 1;
        microcosm.mc[15][6] = 1;
        microcosm.mc[16][4] = 1;
        microcosm.mc[16][8] = 1;
        microcosm.mc[17][5] = 1;
        microcosm.mc[17][6] = 1;
        microcosm.mc[17][7] = 1;
        microcosm.mc[18][6] = 1;
        microcosm.mc[21][3] = 1;
        microcosm.mc[21][4] = 1;
        microcosm.mc[21][5] = 1;
        microcosm.mc[22][3] = 1;
        microcosm.mc[22][4] = 1;
        microcosm.mc[22][5] = 1;
        microcosm.mc[23][2] = 1;
        microcosm.mc[23][6] = 1;
        microcosm.mc[25][1] = 1;
        microcosm.mc[25][2] = 1;
        microcosm.mc[25][6] = 1;
        microcosm.mc[25][7] = 1;
        microcosm.mc[35][3] = 1;
        microcosm.mc[35][4] = 1;
        microcosm.mc[36][3] = 1;
        microcosm.mc[36][4] = 1;
    }
}