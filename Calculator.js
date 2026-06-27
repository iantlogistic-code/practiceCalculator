function calculator(param1, param2, param3) {

    const args = [param1, param2, param3];

    const operation = args.find(item => typeof item === 'string');
    const numbers = args.filter(item => typeof item === 'number');

    const a = numbers[0];
    const b = numbers[1];

    if (!operation || numbers.length < 2) {
        return "กรุณาใส่ตัวเลข 2 ตัว และเครื่องหมาย 1 ตัว จ้า";
    }
    switch (true) {
        case (operation === "add" || operation === "+"):
            return a + b;
        case (operation === "minus" || operation === "-"):
            return a - b;
        case (operation === "multiply" || operation === "*"):
            return a * b;
        case (operation === "divide" || operation === "/"):
            return a / b;
        default:
            return "Invalid operation";
    }
}

console.log(calculator(10, 5, "*"));
console.log(calculator(5, "/", "*"));
console.log(calculator("*",  10));
console.log(calculator(5, "*", 10));