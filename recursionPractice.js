var recursiveFactorial = function (num) {
    if(num ===1){
        return num; 
    }
    else return num * recursiveFactorial(num-1)
}
/*
Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.
Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...
What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/
var fibSequence = function (n) {
    if (n===0 || n ===1) {
        return n
    }
    else {
        return fibSequence(n-1) + fibSequence(n-2)
    }
}

//greatest common divisor 

var dijkstra = function (num1,num2) {
    if(num1 === num2) return num1; 
    else if(num1>num2) return dijkstra(num1-num2,num2) // if num1 is more, than num2 has to fit in num1
    else if(num2>num1) return dijkstra(num1,num2-num1)
}


// console.log(dijkstra(25,5000)); 
// console.log(dijkstra(11,74));


var floodFill = function (screen,point,newColor) {
    var originalColor = screen[point.row][point.column]; 
    function recurse(row,column) {
        screen[row][column] = newColor; // this sets the point to the new color;
         if (screen[row-1] && screen[row-1][column] === originalColor) recurse(row-1, column); // if screen[row-1] exists!!
         if (screen[row+1] && screen[row+1][column] === originalColor) recurse(row+1, column); // if screen[row+1] exists!!
         if (screen[row][column-1] === originalColor) recurse(row, column-1);
         if (screen[row][column+1] === originalColor) recurse(row, column+1);
    }
    recurse(point.row, point.column); //if none of the surrounding indexes are the original color, go back to the original point
    return screen;
}

var screen = [
  [1,1,1,1,1,1,1],
  [1,2,2,2,2,1,1],
  [3,3,3,2,2,2,1],
  [1,1,2,2,2,3,3],
  [1,1,1,1,3,3,3]
];

// console.log(floodFill(screen, {row: 2, column: 3}, 5));


var pathCount = function (r,c) {
    if(r ===1 || c === 1){ 
        return 1
    }
    else return pathCount(r,c-1) + pathCount(r-1,c)
} 

var recursiveReverse = function (str) {
    if(str.length === 1) {
        return str; 
    }
    else { 
        return str[str.length-1] + recursiveReverse(str.substr(0,str.length-1))
    }
}

console.log(recursiveReverse('abcdefg'));


