func1();
function func1(){
    console.log("1111");
}

// func2();
// let func2 = function(){
//     console.log("22222");
// }

// function isApple('사과','apple'){
//     if(한글로사과==="사과" && 영어로사과==="apple")
//         return true;
//     else
//         return false;
// }

function hello(이름){  
    console.log(`Hello my name is ${이름} `);
}

function introduce(firstName, lastName, hello){
    if(lastName==="홍" || lastName==="hong"){
        let fullName = lastName+firstName;
        hello(fullName);
    }
}

introduce("길동", "홍", hello);

// function addTotal(natnum){
//     let total=0;    //return할 변수 선언
//     //2부터 1까지 
//     for(let i = 1; i<=natnum; i++){
        
//     }
// };
//     return addTotal;
// }

// console.log(addTotal(1));

// function addTotal2(inputNum){
//     if(inputNum<1){
//         return 0;
//     }
//     return addTotal2(inputNum-1) + inputNum;
// }
// console.log(addTotal2(5));  

function factorial(inputNum){
    if(inputNum<1){
        return 1;
    }
    return factorial(inputNum-1) * inputNum;
}
console.log(factorial(5));

//퀴즈6. buyMouse()
// function buyMouse(brand, money){
//     if(brand=="Samsung"){
//     price = 35000;}
//     else if (brand=="dell"){
//         price = 32000;
//     }
//     else if (brand=="lg"){
//         price = 28000;
//     }
//     else if (brand=="razor"){
//         price = 60000;
//     }
//     else{
//         price = "no price";
//     }
//     let exchange= money-price
//     return exchange;
// }

// console.log(buyMouse("asus",100000));

//내 방법
// function buyMouse(brand, money){
//     if(brand=="Samsung"){
//     price = 35000;}
//     else if (brand=="dell"){
//         price = 32000;
//     }
//     else if (brand=="lg"){
//         price = 28000;
//     }
//     else if (brand=="razor"){
//         price = 60000;
//     }
//     else{
//         price = "no price";
//     }
//     let 몇개= Math.floor(money/price)
//     return 몇개;}
// console.log(buyMouse("lg", 100000));

//6. 선생님 방법
function buyMouse(brand, money){
    let exchange = 0;
    switch(exchange){
        case "Samsung":
            console.log()
            break;
        case "dell":
            console.log("100입니다.");
            break;
        case "lg":
            console.log("");

        default:
            console.log();
        
    }
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

function howManyBuy(){
    let brand="삼성";
    let money = 34000;
    let 거스름돈 = 0;
    let 갯수 = 0;

    console.log("do실행전");
    do{
        console.log('do실행직후');
        거스름돈 = buyMouse(brand,money);   //일단 구매 시도
        갯수++;
    }while(거스름돈>=0)

    console.log("최종구매갯수:" +(갯수-1));
}
howManyBuy();
//배열
//객체
//dom과 