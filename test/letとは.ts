function getMax(){
 const numbers:number[]=[1,3,5,7,9];
 let max =numbers[0];
 for(let i=0;i<numbers.length;i++){
if(max<numbers[i]){
 max=numbers[i];

};

 };
return max;
}