// MINIMUM
const minNumber = (a, b) => {
    if (a < b) return a;
    else return b;
};

console.log(minNumber(10, -20));

// RECURSION
const isEven = (number) => {
    if (number >= 0 && Number.isInteger(number)) {
    if (number == 1) return false;
    else if (number == 0) return true;
    else return isEven(number - 2);
    } else {
        return "Try a positive whole number";
    }
};

console.log(isEven(1));

// BEAN COUNTING
const countChar = (str, char) => {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) counter++;
    }
    return counter;
}

const countBs = (str) => {
    return countChar(str, "B")
}

console.log(countBs("CarBash"));