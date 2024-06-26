function calc(operator, [...a]) {
    let sum = +0
    if (operator === 'add'){
        for (ae of a) sum+= +ae;
        return sum 
    } else if (operator === 'sub'){
        for (ae of a) sum-=+ae;
        return sum 
    } else if (operator === 'div'){
        for (ae of a)
            console.log(ae);
            sum = sum/ae;
        return sum 
    } else if (operator === 'mul'){
        for (ae of a) sum = sum * ae;
        return sum 
    }
}
let result = calc('mul', [2,4]);
console.log(result);