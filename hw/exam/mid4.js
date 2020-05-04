function sum() {
    
}

function testsum() {
    let arr=[5];
   for(let i=0;i<5;++i)
   arr[i]=Math.floor(Math.random()*11);
   console.log(arr);
}
for(let i=0;i<5;++i)
    console.log(testsum(sum()))