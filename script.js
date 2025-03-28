function power(n, d){
    let sum = 1
    for(let i = 0; i<d; i++){
        sum*= n
    }
    return sum
}

power(3, 5)  //243





function sign(n){
    if(n > 0){
        return 1
    }else if(n < 0){
        return -1
    }else {
        return 0
    }
}
sign(0)





function number(A, B, C){
    let D = B **2 - 4 * A * C
    if(D > 0    ){
        return "2ta ildiz"
    }else if(D < 0){
        return "ildiz yoq"
    }else{
        return "1ta ildiz"
    }
}
number( 1, -6, 9)// 1ta ildiz




function areacylce(R){
    let S = Math.PI*R**2
    return S
}
areacylce(10) //314.*****






function sumrange(A, B){
    let sum = 0
    for(let i = A; i < B ; i++){
        sum+=i
    }
    return sum
}
sumrange(8, 10) //27





function calc(A, B, S){
    switch(S){
        case "+":
            return A + B
        case "-":
            return A - B
        case "*":
            return A * B
        case "/":
            return A / B
        default     :
        return 0
    }
}
calc(7, 8, "+") // 15



function iseven(K){
        return K % 2 === 0
}
iseven(10) //true



function sortabc( a, b, c){
    let max = Math.max(a,b,c)
    let min = Math.min(a,b,c)
    let = mid;
    if( a!= max && a!= min){
        mid = a
    }else if( b!= max && b!= min){
        mid= b
    }else{
        mid=c
    }
    return `${min}, ${mid}, ${max}`
}
sortabc( 10, 5, 8)// 5,8 ,10



function ispower(K, N){
    let sum = 1
    while(sum  < N )sum *= K
    return sum
}
ispower(3, 9)//true





function isprime(N ){
    let deviders = 0
    for (let i = 2; i<=N; i++){
        if (N % i == 0){
            deviders++
        }
    }
    return deviders== 1
}
isprime(83)// true  




function numberoff(N){
    let primes = 0
    for (let i = 2; i <= N; i++) {
        if(isprime(i)){
            primes++
        }
    }
    return primes
}
numberoff(10) // 4



function digit(K,N){
    let s= string(K)
    if(s.length < N ){
        return  -1
    }
    return s[N - 1]
}
digit (105782 , 5) // 8




function invers(N){
    return string(N).split("").reverse().join("")
}
invers(56814)// 42865




function palidrom(N){
    return N == invers(N)
}
palidrom(121)//true



function factorial(N){
    if(N<0){
        return 1
    }    
    let sum = 1 
    for( let i = 1; i <= N; i++){
        sum *=1
    }
    return sum
}
factorial(3)// 6




function getsum(N){
    let sum = 0
    for(let i = 1; i <= N; i++){
        if(i % 3 == 0)
            sum += i
    }
    return sum
}
getsum(15)//45



function sumadd(N){
    let odd = 0 , even = 0  ;
    for(let i = 1; i<=N ; i++){
        if(i % 2 == 0){
            even+=i
        }else{
            odd+=i
        }
    }
    return `${even}, ${odd}`
}
sumadd(10) // 30 , 25




function invert(    h,m ,s){
    return(h*60+m)*60+s
}
invert(0,6,40)//400




function dectime(h,m,s){
    let time= invert(h,m,s)-1;
    let h= Math.floor(time/60/60);
    let s = time%60;
    let m = (time -5)/60-h*60;
    return `${h < 10 ? "0" : ""}${h}:${m < 10 ? "0" : ""}${m}:${10 ? "0" : ""}${s}`;
}
dectime(0,6,40);


