function pattern1(n) {
    for (let i = 1; i <= n; i++) {
        let star = " ";
        for (let j = 1; j <= i; j++) {
            star += j;
        }
        for (let j = 1; j <= 2 * (n - i - 1); j++) {
            star += " ";
        }

        for (let j = i; j >= 1; j--) {
            star += j;
        }
        console.log(star);
    }
}
pattern1(5);

function pattern2(n) {
    let count = 1;
    for (let i = 1; i <= n; i++) {
        let star = "";
        for (let j = 1; j <= i; j++) {
            star += count + " ";
            count++;
        }
        console.log(star);
    }
}
pattern2(5);

function pattern3(n) {
    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = 0; j <= i; j++) {
            str += String.fromCharCode('A'.charCodeAt(0) + j);
        }
        console.log(str);
    }
}

pattern3(5);

function pattern4(n) {
    for (let i = n; i > 0; i--) {
        let str = "";
        for (let j = 0; j < i; j++) {
            str += String.fromCharCode('A'.charCodeAt(0) + j);
        }
        console.log(str);
    }
}

pattern4(5);

function pattern5(n) {
    for (let i = 1; i < n; i++) {
        let str = "";
        let ch = String.fromCharCode('A'.charCodeAt(0) + i);
        for (let j = 1; j <= i; j++) {
            str += ch;
        }
        console.log(str);
    }
}
pattern5(5);

function pattern6(n) {
    for (let i = 0; i < n; i++) {
        let ch = '';
        for (let j = 0; j <= i; j++) {
            let char = String.fromCharCode('E'.charCodeAt(0) - i + j);
            ch += char;
        }
        console.log(ch);
    }
}
pattern6(5);

function pattern7(n) {
    for (let i = 0; i < n; i++) {
        let star = "";
        for (let j = 0; j < n - i; j++) {
            star += "*";
        }
        for (let j = 0; j < 2 * i; j++) {
            star += ' ';
        }
        for (let j = 0; j < n - i; j++) {
            star += "*";
        }
        console.log(star);
    }

    for (let i = 1; i <= n; i++) {
        let star = '';
        for (let j = 0; j < i; j++) {
            star += "*";
        }
        for (let j = 0; j < 2 * (n - i); j++) {
            star += ' ';
        }
        for (let j = 0; j < i; j++) {
            star += "*";
        }
        console.log(star);
    }
}

pattern7(5);


function pattern8(n) {
    for (let i = 0; i < n; i++) {
        let star = "";
        for (let j = 0; j <= i; j++) {
            star += "*";
        }
        for (let j = 0; j < 2 * (n - i - 1); j++) {
            star += ' ';
        }
        for (let j = 0; j <= i; j++) {
            star += "*";
        }
        console.log(star);
    }

    for (let i = n - 2; i >= 0; i--) {
        let star = '';
        for (let j = 0; j <= i; j++) {
            star += "*";
        }
        for (let j = 0; j < 2 * (n - i - 1); j++) {
            star += ' ';
        }
        for (let j = 0; j <= i; j++) {
            star += "*";
        }
        console.log(star);
    }
}
pattern8(5);

function pattern9(n) {
    for (let i = 0; i < n; i++) {
        let star = '';
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0 || i == n - 1 || j == n - 1) {
                star += "*";
            } else {
                star += ' ';
            }
        }
        console.log(star);
    }
}
pattern9(5);

function countDigit(n) {
    let count = n.toString();
    console.log(count.length);
}
countDigit(23456);

function reverseDigit(n) {
    let reverse = 0;
    while (n !== 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = Math.floor(n / 10);
    }
    console.log(reverse);
}
reverseDigit(1234345);

function palindrome(num) {
    let numbers = 0;
    let dup = num;
    while (dup !== 0) {
        let digit = dup % 10;
        numbers = numbers * 10 + digit;
        dup = Math.floor(dup / 10);
    }
    if (numbers == num) {
        console.log("This Digit is palindrome");
    } else {
        console.log("Not Palindrome", num);
    }
    console.log(numbers)
}
palindrome(4254);

function GCD(n1, n2) {
    let gcd = 0;
    for (let i = 1; i <= Math.floor(n1, n2); i++) {
        if (n1 % i == 0 && n2 % i == 0) {
            gcd = i;
        }
    }
    console.log(gcd);
}
GCD(20, 15);

function armstrongNumber(n) {
    let count = 0;
    let length = n.toString().length;
    let num = n;
    while (num > 0) {
        let digit = num % 10;
        count = count + digit ** length;
        num = Math.floor(num / 10);
        // console.log(count);
    }
    if (count === n) {
        console.log("This is armstrong Number");
    } else {
        console.log("This is not armtrong Number");
    }
    console.log(count);
}
armstrongNumber(244);

function allDivisors(n) {
    let divisors = '';
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            divisors += i;
        }
    }
    console.log(divisors);
}
allDivisors(12);

function primeNumber (n){
    let count = 0; 
    for(let i = 1; i<=n; i++){
        if(n%i==0){
            count++;
        }
    }
    if(count <= 2) {
        console.log('Prime Number');
    }else{
        console.log('Not PrimeNumber');
    }
    console.log(count);
}
primeNumber(21);


