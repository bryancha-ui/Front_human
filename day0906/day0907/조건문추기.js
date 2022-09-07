let num = 100;
switch(num){
    case 90:
    case 95:
        console.log("90이상입니다.");
        break;
    case 100:
        console.log("100입니다.");
        break;
    default:
        console.log("디폴트입니다.");
    
}

// 삼항연산자
// 조건(삼항)연산자 조건? 변환값1 : 변환값2
let result = 2>5? '참':'거짓';
console.log(result);