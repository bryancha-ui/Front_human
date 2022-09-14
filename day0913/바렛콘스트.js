console.log(r); //3. 사용 r is not defined
r =5;
var r; // 1.선언
//Let과 var를 둘다 안쓰고 2번만 있을떄
//Let일떄는 에러뜸. 
//var 일때는 에러안뜸. undefined
//Let은 호이스팅이 안된다 라고 설명된곳이 (temproral Dead Zone)에 있기때문에 사용못하는거다

let result="초기화리절트"
console.log(result);
age = 50;
if(age < 100){
    let result = "100살 이하입니다.";
    console.log("if문안에서찍은 result :" + result);
}

//블록의 유효범위 var는 함수유효범위, Let은 블록유효범위
var number = 10;
if(number > 5){
    let number =50;
}
console.log(number);  //var일떄는 50, Let 일때는 10 

for(var i=1; i<5; i++){
    console.log(i);
}
console.log("포문끝난뒤의 i : "+i);
//i가 let일떄 not defined
//i가 var일떄 

function 바는문제(){
    var problem = "지역변수";
    console.log("함수안에서 찍은 변수:" +problem);
}
console.log("함수밖에서 찍은 변수 : "+problem); //함수일때는 블록이 유효하다.

