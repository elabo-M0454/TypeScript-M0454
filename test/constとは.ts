function getMaxDeclaretive() {
const numbers : number[] = [1,3,5,7,9];
const max : number = numbers.reduce((num1 : number, num2 : number) => Math.max(num1,num2));
return max;

}