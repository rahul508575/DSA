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

function pattern9(n){
    for(let i=0; i<n; i++){
        let star = '';
        for(let j=0; j<n; j++){
            if(i==0 || j==0 || i==n-1 || j== n-1){
                star += "*";
            }else{
                star += ' ';
            }
        }
        console.log(star);
    }
}
pattern9(5);