let a=[];
let sum=0;
for(let i=0;i<100;++i){
    a[i]=Math.floor(Math.random()*100+1)
}

a.forEach(function (n) {
    if (n % 2 == 0) {
        sum+=n;
    }
})

console.log(sum);