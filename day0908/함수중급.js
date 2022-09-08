// function printWhat(what){
//     console.log(what);
// }

// let str2 = "초코우유";
// printWhat(str2);

// let print = function(){//함수표현식
//     console.log('print');
// };
// print(); //변수지만 함수다.
//자바스크립트에서는 함수가 1급객체이기 때문에 가능



// (function () {
//     console.log("익명함수!!!");
// })(); 

function 정답함수(){    //콜백함수
    console.log("정답입니다.!!!!");
}
function 오답함수(){    //콜백함수
    console.log("오답입니다.!!!!");
}

//함수정의
function matchQuiz(answer, pritTrue, printFalse){
    if(answer=="무령왕릉"){
        printTrue();
    }else{
        printFalse();
    }
}

//동기 = synchronous. 요청가 결과가 동시에 일어남
//비동기 = unsynchronous. 요청과 결과가 동시에 일어나지 않음

//함수호출
matchQuiz("광개토대왕릉", 정답함수, 오답함수);

//문제1. isOdd(판단할숫자, 짝수일때호출할함수, 홀수일때호출할함수)
function isOdd(numodd, printodd, printeven){
    if(numodd%2 != 0){
        printodd();
    }else{
        printeven();
    }
}

function 홀수함수(){    //콜백함수
    console.log("홀수입니다.!!!!");
}
function 짝수함수(){    //콜백함수
    console.log("짝수입니다.!!!!");
}
//isOdd(3, 홀수함수, 짝수함수);

function sum(num1, num2){
    console.log(num1+num2);
}
sum(2,5);
sum('이', 'five');
