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
        for (let j = 0; j <i; j++) {
            str += String.fromCharCode('A'.charCodeAt(0) + j);
        }
        console.log(str);
    }
}

pattern4(5);

function pattern5(n) {
    for (let i = 1; i <n; i++) {
        let str = "";
        let ch = String.fromCharCode('A'.charCodeAt(0) + i);
        for (let j = 1; j<=i; j++) {
            str +=ch;
        }
        console.log(str);
    }
}

pattern5(5);
