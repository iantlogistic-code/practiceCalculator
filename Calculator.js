function calculator(parameter1, parameter2, parameter3) {

    const arguments = [parameter1, parameter2, parameter3];

    const allOperations = arguments.filter(x => typeof x === "string");
    const allNumbers = arguments.filter(x => typeof x === "number");

    let errors = [];

    if (allOperations.length === 0) 
        { errors.push("คุณลืมใส่เครื่องหมายคำนวณ"); }
    if (allOperations.length > 1) 
        { errors.push("คุณใส่เครื่องหมายคำนวณมากเกิน"); }
    if (allNumbers.length === 0)  
        { errors.push("คุณลืมใส่ตัวเลข"); }
    if (allNumbers.length < 2 && allNumbers.length > 0) 
        { errors.push("คุณใส่ตัวเลขไม่ครบ"); }
    if (allNumbers.length > 2)     
        { errors.push("คุณใส่ตัวเลขมากเกิน"); }

    if (errors.length > 0) 
        {return "ข้อผิดพลาด: " + errors.join(" และ ");}

    const operation = allOperations[0];
    const number1 = allNumbers[0];
    const number2 = allNumbers[1];

    switch (operation) 
    {
        case "add": case "plus": case "+": case "บวก": return number1 + number2;
        case "subtract": case "minus": case "-": case "ลบ": return number1 - number2;
        case "multiply": case "times": case "*": case "คูณ": return number1 * number2;
        case "divide": case "/": case "หาร": return number1 / number2;
        default: return "คุณใส่เครื่องหมายคำนวณไม่ถูกต้อง";
    }
}

console.log(calculator(10, 5));
console.log(calculator(10, 5, 20));
console.log(calculator(10, 5, "+", "*"));
console.log(calculator(10, 5, "+"));