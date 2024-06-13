function pattern (n) {
    for(let i =1; i<=n; i++) {
        let star = " ";
        for(let j=1; j<=i; j++) {
            star += j;
        }
        for(let j=1; j<=2*(n-i-1); j++) {
            star += " ";
        }
    
        for(let j=i; j>=1; j--) {
            star += j;
        }
        console.log(star);
    }
    }
    pattern(5);