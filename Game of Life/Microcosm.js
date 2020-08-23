function Microcosm(x, y){

    this.x = x;
    this.y = y;

    let mc;
    
    this.createNewMicrocosm = function(){
        mc = new Array(x);
        for(let i = 0; i < mc.length; i++){
            mc[i] = new Array(y);
        }
        for(let i = 0; i < x; i++){
            for(let j = 0; j < y; j++){
                mc[i][j] = 0;
            }
        }
    }

    this.displayMicrocosm = function(){
        for(let i = 0; i < x; i++){
            for(let j = 0; j < y; j++){
                let rectX = i * cellSize;
                let rectY = j * cellSize;
    
                if (mc[i][j] == 0) {
                    fill(255);
                    rect(rectX, rectY, cellSize, cellSize);
                }
            }
        }
    }
}