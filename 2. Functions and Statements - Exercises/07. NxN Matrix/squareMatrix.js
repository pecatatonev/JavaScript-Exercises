 function matrixSquare(num){
  let matrix = [];
let row = num;
let col=num;
 
// Loop to initialize 2D array elements.
for (var i = 0; i < row; i++) {
  matrix[i]=[];
    for (var j = 0; j < col; j++) {
      matrix[i][j] = num;
    }
}

matrix.forEach(v => console.log(...v))
}

matrixSquare(3)