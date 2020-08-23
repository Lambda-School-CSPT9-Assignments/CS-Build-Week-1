function setup(){
    console.log(windowWidth, windowHeight);
    
    createCanvas(windowWidth, windowHeight - 200);

    console.log(width, height);
}

function draw(){
    background(0);
}

function create2DArr(x, y){
    let arr = new Array(x);
    for(let i = 0; i < arr.length; i++){
        arr[i] = new Array(y);
    }
    return arr;
}