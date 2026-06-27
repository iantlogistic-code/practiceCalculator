function calculator(param1, param2, param3) {

    const args = [param1, param2, param3];

    const allOperations = args.filter(item => typeof item === 'string');
    const numbers = args.filter(item => typeof item === 'number');

    if (allOperations.length === 0) {
        return "คุณลืมใส่เครื่องหมายคำนวณนะ จ้า";
    }
    if (allOperations.length > 1) {
        return "ใส่เครื่องหมายมาเกิน กรุณาใส่ข้อมูลใหม่";
    }
    if (numbers.length < 2) {
        return "ใส่ตัวเลขมาแค่ 1 ตัว กรุณาใส่เพิ่ม";
    }
    if (numbers.length > 2) {
        return "ใส่ตัวเลขมาเกิน 2 ตัว กรุณาใส่ใหม่";
    }

    const operation = allOperations[0];
    const a = numbers[0];
    const b = numbers[1];

    switch (operation) {
        case "add": case "+": return a + b;
        case "minus": case "-": return a - b;
        case "multiply": case "*": return a * b;
        case "divide": case "/": return a / b;
        default: return "Invalid operation";
    }
}

console.log(calculator(10, 5));
console.log(calculator(10, 5, 20));
console.log(calculator(10, 5, "+", "*"));
console.log(calculator(10, 5, "+"));