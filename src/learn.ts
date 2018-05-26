let someValue: any = 'this is a string';

console.log((someValue as string).length);
console.log((<string>someValue).length);
