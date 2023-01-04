
const makeCounter = () => {
    let value = 0;
    
    return {
        increase: () => {
            value = value + 1
        },
        decrease: () => {
            value = value -1
        },
        getValue: () => value
    }
}


const counter1 = makeCounter();
counter1.increase();
counter1.increase();
counter1.decrease();
console.log(counter1.getValue());

const counter2 = makeCounter();
counter2.decrease()
counter2.decrease();
counter2.decrease();
console.log(counter2.getValue());