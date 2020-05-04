let a=[];
let sum=0;
let cnt=0;
for(let i=0;i<100;++i){
    a[i]=Math.floor(Math.random()*100+1)
    sum+=a[i]
    cnt++
}
console.log((sum/cnt).toFixed(1))
