let microcosm;
let x;
let y;
let paused = true;
let clear = false;
let cellSize = 10;
let generationCount = 0;

function setup(){
    let cnv = createCanvas(windowWidth * .75, windowHeight * .75);
    cnv.parent("instance");

    x = floor(width / cellSize);
    y = floor(height / cellSize);

    microcosm = new Microcosm(x, y);
    microcosm.createRandomMicrocosm();
}

function draw(){
    background(255);
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

function pauseButtonClicked(){
    paused = true;
}

function playButtonClicked(){
    paused = false;
}

function clearButtonClicked(){
    paused = true;
    generationCount = 0;
    updateGenerationCount();
    microcosm.createNewMicrocosm();
}

function randomButtonClicked(){
    paused = true;
    generationCount = 0;
    updateGenerationCount();
    microcosm.createRandomMicrocosm();
}

function nextButtonClicked(){
    if(paused === false) return;
    microcosm.nextIteration();
    updateGenerationCount();
}


function updateGenerationCount(){
    document.getElementById("generation").innerHTML = generationCount;
  }