let persons1=[]
let persons2=[]
for(let i=0;i<3;++i){
    persons1[i] = { name: "홍길동", age: 16+i };
}

for(let i=0;i<3;i++){
    persons2[i]=Object.assign({},persons1[i]);
}

persons1[0].age=20;
console.log(persons1)
console.log(persons2)