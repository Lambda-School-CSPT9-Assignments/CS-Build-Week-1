function Microcosm(x, y){

    this.x = x;
    this.y = y;
    this.mc = [];

    this.createNewMicrocosm = function(){
        this.mc = new Array(x);
        for(let i = 0; i < this.mc.length; i++){
            this.mc[i] = new Array(y);
        }
        for(let i = 0; i < x; i++){
            for(let j = 0; j < y; j++){
                this.mc[i][j] = 0;
            }
        }
        //console.table(this.mc);
        //console.log(cellSize);
    }

    this.displayMicrocosm = function(){
        for(let i = 0; i < x; i++){
            for(let j = 0; j < y; j++){
                let rectX = i * cellSize;
                let rectY = j * cellSize;
    
                if (this.mc[i][j] === 0) {
                    fill(255);
                    rect(rectX, rectY, cellSize, cellSize);
                }
                if (this.mc[i][j] === 1) {
                    fill(0);
                    rect(rectX, rectY, cellSize, cellSize);
                }
            }
        }
    }

    this.countNeighborCells = function(xPos, yPos){
        let sum = 0;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                let col = (xPos + i + x) % x;
                let row = (yPos + j + y) % y;
                sum += this.mc[col][row];
            }
        }
        sum -= this.mc[xPos][yPos];
        return sum;
    }
}