var ans = '5' +1; // '51' + '1' ==> 51
var ans = 1 + '5'; // '1' + '5' ==> 15


console.log(ans)
console.log(null * 5 ); //null is converted to 0.hence output is zero.

console.log(undefined * 5 );//Nan
console.log("5" - 1 ); // here , as -ve has only one signifiance of substract so here it do mathematical calulation  so , 5-1 ==> 4
console.log(null * "5" ); // 0 anything multiply by 0 is 0.
console.log("ten" * 3 ); //"ten" string cannnot be mapped to a number like '5' can be mapped to number 5 hence the output is Nan.
