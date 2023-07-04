const Counter = () => {
    let count = 0;

    return increaseCount = () => {
        count++;
        return count;
    }
}

let firstCounter = Counter();
let firstCounterArray = [];
firstCounterArray.push(firstCounter());
firstCounterArray.push(firstCounter());
firstCounterArray.push(firstCounter());
firstCounterArray.push(firstCounter());
firstCounterArray.push(firstCounter());

let secondCounter = Counter();
let secondCounterArray = [];
secondCounterArray.push(secondCounter());
secondCounterArray.push(secondCounter());
secondCounterArray.push(secondCounter());


console.log(firstCounterArray)
console.log(secondCounterArray)