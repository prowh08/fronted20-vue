let sum = function(...a) {
    let result=0;
    for(let i=0;i<5;++i){
        result+=a[0][i]
    }
    return result;
}

function testsum(f) {
   var arr=[5];
   let result;
   for(let i=0;i<5;++i)
   arr[i]=Math.floor(Math.random()*11);
   console.log(arr);
    
   result = f(arr)
   
   console.log(result)
}

for(let i=0;i<5;++i)
    testsum(sum)