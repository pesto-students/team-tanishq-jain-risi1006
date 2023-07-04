function drawTriangle(triangleSize) {

    // Your solution goes here
    let currSize = 1;
    for(let i=0; i<triangleSize; i++){
        let currString = "";
        for(let j=0; j<currSize; j++){
            currString += '*'
        }
        console.log(currString)
        currSize++;
    }
    
 }

 drawTriangle(4);