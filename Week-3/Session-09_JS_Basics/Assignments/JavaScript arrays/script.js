const divideArray = (arr) => {
    
    arr.sort((a, b)=> {
        return a-b
    });
    let evenArr = [];
    let oddArr = [];

    for(let i=0; i< arr.length; i++){
        if(arr[i] % 2 === 0){
            evenArr.push(arr[i]);
        } else {
            oddArr.push(arr[i]);
        }
    }

    console.log('Even numbers:');
    if(evenArr.length === 0) {
        console.log('None');
    } else {
        for(let i = 0; i<evenArr.length; i++){
            console.log(evenArr[i]);
        }
    }

    console.log('Odd numbers:');
    if(oddArr.length === 0) {
        console.log('None');
    } else {
        for(let i = 0; i<oddArr.length; i++){
            console.log(oddArr[i]);
        }
    }

}

divideArray([4, 2, 9, 1, 8]);
divideArray([4, 2, 8]);