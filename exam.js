// Question No. 1 {Return the sum of two numbers}
    // addition(3, 2) ➞ 5
    // addition(-3, -6) ➞ -9
    // addition(7, 3) ➞ 10

// Answer
function sumOfTwoNumbers(firstN, secondN) {
    let sum = firstN + secondN;
    return sum;
}
    // console.log(sumOfTwoNumbers(3,2));
    // console.log(sumOfTwoNumbers(-3,-6));
    // console.log(sumOfTwoNumbers(7,3));

// Question No. 2. Convert Minutes into Seconds
    // convert(5) ➞ 300
    // convert(3) ➞ 180
    // convert(2) ➞ 120

// Answer
function convertingMinutesIntoSeconds(minutes) {
    let convertIntoSeconds = minutes * 60;
    return console.log(convertIntoSeconds);
}

    // convertingMinutesIntoSeconds(5);
    // convertingMinutesIntoSeconds(3);
    // convertingMinutesIntoSeconds(2);

// Question No. 3. Return the Next Number from the Integer Passed
    // addition(0) ➞ 1
    // addition(9) ➞ 10
    // addition(-3) ➞ -2

// Answer
function nextNumber(number) {
    let nn = number + 1;
    return nn;    
}

    // console.log(nextNumber(0));
    // console.log(nextNumber(9));
    // console.log(nextNumber(-3));

// Question No. 4. Area of a Triangle
    // triArea(3, 2) ➞ 3
    // triArea(7, 4) ➞ 14
    // triArea(10, 10) ➞ 50

// Answer
function triangleArea(base, height) {
    let aria = 1/2 * base * height;
    return aria;
}

    // console.log(triangleArea(3,2));
    // console.log(triangleArea(7,4));
    // console.log(triangleArea(10,10));

// Question No. 5. Return the First Element in an Array
    // getFirstValue([1, 2, 3]) ➞ 1
    // getFirstValue([80, 5, 100]) ➞ 80
    // getFirstValue([-500, 0, 50]) ➞ -500

// Answer
function firstElement(getArray) {
    let fElement = getArray[0];
    return console.log(fElement);    
}

    // firstElement([1, 2, 3]);
    // firstElement([80, 5, 100]);
    // firstElement([-500, 0, 50]);

// Question No. 6. Convert Age to Days
    // calcAge(65) ➞ 23725
    // calcAge(0) ➞ 0
    // calcAge(20) ➞ 7300

 // Answer
    function ageToDays(age = 0) {
        if (age > 0 ) {
            let days = age * 365;
            return console.log(days);
        } else {
            let message = "Please insert a valid year!";
            return console.log(message);
        };    
    }
    // ageToDays(65);
    // ageToDays(0);
    // ageToDays(20);

// Question No. 7. Power Calculator
    // circuitPower(230, 10) ➞ 2300
    // circuitPower(110, 3) ➞ 330
    // circuitPower(480, 20) ➞ 9600

// Answer
    function power(voltage, current) {
        let power = voltage * current;
        return console.log(power);
    }
    // power(230, 10);
    // power(110, 3);
    // power(480, 20);

// Question No. 8. Maximum Edge of a Triangle
    // nextEdge(8, 10) ➞ 17
    // nextEdge(5, 7) ➞ 11
    // nextEdge(9, 2) ➞ 10

// Answer
    function triangleThirdEdge(side1, side2) {
        if (side1 > 0 && side2 > 0) {
            let maxEdge = (side1 + side2) -1;
            let message = "The triangle's max edge is " + maxEdge;
            return console.log(message);
        } else {
            message = "Wrong inputs!";
            return console.log(message);
        };
    }

    // triangleThirdEdge(8, 10);
    // triangleThirdEdge(5, 7);
    // triangleThirdEdge(9, 2);

// Question No. 9. Return the Remainder from Two Numbers
    // remainder(1, 3) ➞ 1
    // remainder(3, 4) ➞ 3
    // remainder(-9, 45) ➞ -9
    // remainder(5, 5) ➞ 0

// Answer
    function remainder(num1, num2) {
        let remainder = num1 % num2;
        return console.log(remainder);
    }
    // remainder(1, 3);
    // remainder(3, 4);
    // remainder(-9, 45);
    // remainder(5, 5);

// Question No. 10. Return Something to Me!
    // giveMeSomething("is better than nothing") ➞ "something is better than nothing"
    // giveMeSomething("Bob Jane") ➞ "something Bob Jane"
    // giveMeSomething("something") ➞ "something something"

// Answer
    function message(txt) {
        const cWord = "Something ";
        let message = cWord + txt;
        return console.log(message);
    }
    // message("is better than nothing");
    // message("Bob Jane");
    // message("something");

// Question No. 11. Correct the Mistakes
    // squared(5) ➞ 25
    // squared(9) ➞ 81
    // squared(100) ➞ 10000

    Math.sqrt(5);
    Math.sqrt(9);
    Math.sqrt(100);

    console.log(Math.sqrt(5));

// Question No. 12. Is the Number Less than or Equal to Zero?
    // lessThanOrEqualToZero(5) ➞ false
    // lessThanOrEqualToZero(0) ➞ true
    // lessThanOrEqualToZero(-2) ➞ true

// Answer
    function trueOrFalse(num) {
            let result = num <= 0;
            return console.log(result);
    };
    // trueOrFalse(5);
    // trueOrFalse(0);
    // trueOrFalse(-2);

// Question No. 13. Sum of Polygon Angles
    // sumPolygon(3) ➞ 180
    // sumPolygon(4) ➞ 360
    // sumPolygon(6) ➞ 720

// Answer
    function sumPolygon(sides) {
        if (sides > 2) {
            let totalAngles = (sides - 2) * 180;
            return console.log(totalAngles);
        } else {
            message = "Total number of sides are invalid!";
            return console.log(message);
        }
    };
    // sumPolygon(3);
    // sumPolygon(4);
    // sumPolygon(6);

// Question No. 14. Basic Variable Assignment
    // nameString("Mubashir") ➞ "MubashirCoder"
    // nameString("Matt") ➞ "MattCoder"
    // nameString("javaScript") ➞ "javaScriptCoder"

    function joinString(name) {
        let result = name.concat("Coder");
        return console.log(result);
    }
    // joinString("Mubashir");
    // joinString("Matt");
    // joinString("javaScript");

// Question No. 15. Less Than 100?
    // lessThan100(22, 15) ➞ true
        // 22 + 15 = 37
    // lessThan100(83, 34) ➞ false
        // 83 + 34 = 117
    // lessThan100(3, 77) ➞ true

// Answer
    function lessThan100(num1, num2) {
        if (sum = (num1 + num2) <100 ) {
            return console.log(sum);
        } else {
            return console.log(sum);
        }
    }
    // lessThan100(22, 15);
    // lessThan100(83, 34);
    // lessThan100(3, 77);