let num1 = 5;
if(num1 < 0 ){
    console.log("음수입니다.");
}else if(num1 < 10){
    console.log('10보다 작은 양수입니다.');
}else{
    console.log("10보다 큰 수입니다");
}

//1. 주어진수가 짝수인지 홀수인지를 판단해보세요 

//let num2 = 3;
//if (num2 % 2 == 0){
//    console.log('짝수입니다');
//}else{
    console.log('홀수입니다');
//}

//2. 입력된 변수가 숫자인지 아닌지 판별해보세요

//let 변수1 = '333';
//let 변수2 = 333;
//if (typeof(변수2) == 'number'){
//    console.log('숫자입니다');
//}else{
//    console.log('숫자가 아닙니다');
//}

// 3. 변수가 3의 배수인지 판별해보세요
/*
if (typeof(변수2)%3 == 0){
    console.log('3의 배수입니다');
}else{
    console.log('3의 배수가 아닙니다');
}
*/
// 4.문자열이 들어있는 변수에 "안녕" 이 들어있으면 "안녕하세요"를 콘솔에 찍으세요

//let str = "안녕하세요 저는 자바 초보 개발자 입니다";
//if(str.includes("안녕")){
//    console.log("안녕하세요");
//}

// 5-a. 문자열이 들어있는 변수에 띄어쓰기가 몇개 있는지 검사해보세요.
//let 변수4 = '안녕 철수야 뭐하니';

//const spaces1 = 변수4.length - 변수4.replaceAll(' ', '').length;
//console.log(spaces1);

// 5. 분을 입력하면 몇시간 몇분인지를 알려주세요.
/*
let 몇분 = 380;
let 시 = Math.floor(몇분/60);
let 분 = 몇분%60;
console.log(시,':', 분);
*/
// 6.세숫자를 비교하여 가장 큰 숫자를 클릭해보세요.
/*
let 숫자1 = 30;
let 숫자2 = 333;
let 숫자3 = 71;

if (숫자1 > 숫자3 && 숫자1 > 숫자2 ){
    console.log('숫자1이 가장 큰 수입니다');
}else if(숫자2 > 숫자1 && 숫자2 > 숫자3){
    console.log('숫자2가 가장 큰 수입니다');
}
else{console.log('숫자3이 가장 큰 수입니다')}

*/
// 7.변수 pi=3.141592 와 반지름 r을 활용하여 원의 넓이를 구해보세요/
    //원넓이 공식 = 파이*r*r
/*
let 파이= 3.141592;
let 반지름 = 5;
let 넓이=파이*(반지름**2);
console.log(넓이);
*/

// 8.숫자가 3의 배수면 3의배수, 5의 배수면 5의 배수라고 출력하되 15의 배수라면 15의 배수라고만 출력해주세요.(3,5의 배수인지는 클릭하지말아라)
let num5 = 30;
if(num5 % 15 ==0){
    console.log("15의 배수");
}else if(num5 % 5 ==0){
    console.log("5의 배수");
}else if(num5 % 3 ==0){
    console.log("3의 배수");
}
// 9. 0~100의 점수가 들어있는 변수의 등급을 출력해보세요.
//90점대 = 수, 80점대 = 우, 80점대 = 미, 60점대 = 양, 59미만 = 가 

let 점수 = 59;
let grade = "";
if (점수<=100 &&점수 >= 90){
    console.log('수');
}else if(점수<90 &&점수 >= 80){
    console.log('우');
}else if(점수<=80 &&점수 >= 70){
    console.log('미');
}else if(점수<70 &&점수 >= 60){
    console.log('양');
}else if(점수>0 &&점수 < 59){
    grade = "가";
}else{grade = "잘못된 점수"}
console.log(grade);


