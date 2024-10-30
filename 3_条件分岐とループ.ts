const fizzbazz判定 = (num:number)=>{

if(num%3==0){

  if(num%5==0){
    return "fizzbazz"
  }else{
    return "fizz"
  }
}else if(num%5==0){
return "bazz"
}else{
    return num
}


}

for(let i=1;i<100;i++){

    console.log(fizzbazz判定(i))
}