F(n) = F(n-1) + F(n-2)
F(0) = 0
F(1) = 1


function fibonaci(n){
    if(n <= 1) return n;
    else {
        return fibonaci(n - 1) + fibonaci(n - 2);
    }
    
}

const res = fibonaci(6)
console.log(res)