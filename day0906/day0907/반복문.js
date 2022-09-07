// for (시작; 조건; 스탭[본문])

//for(let a = 1; a<=100; a++){
//    console.log(a);
//}

// 응용 1부터 100까지 3의 배수만
//for(let a = 1; true; a++){
 //   if(a%3==0){
  //      console.log(a);
  //  }
//}
//console.log('hi'); 


//중첨if

//1부터 100까지 총함을 출력해보세요.
//let sum = 0;
//for(let i=1; i<=100; i++){
//    sum += i;
//}
//console.log(sum);

//1부터 100까지 7의 배수가 몇개있는지 출력해보세요
/*
let count7 = 0;
for(let i=1; i<=100; i++){
    if(i%7==0){
        count7++;
    }
}
console.log(count7);
*/
//12345보다 크고 67890보다 작은수 중 25의 배수가 몇개인가요?
/*
let count25 = 0;
for(let i=12345; i<67890; i++){
    if(i%25==0){
        count25++;
    }
}
console.log(count25);
*/
//10부터 1000까지의 정수중에 짝수만, 큰수부터 출력하세요. 

//for(let a = 1000; a>=10; a--){
//    if(a%2==0){
//        console.log(a);
//    }
//}

//숫자를 0부터 무한으로 1씩 증가하다가, 17의 배수이며, 짝수이며, 35의 배수인 수를 만나면 그 수를 출력하고 반복을 멈추어라.

    //break;를 만나면 반복문을 탈출한다.
    //continue를 만나면 현재 반복만 탈출하고 다시 다음조건부터 반복한다. 
// for(let i = 0; true; i++){
//     if (i%17==0){
//         if (i%2==0){
//             if(i%35==0){
//                 console.log(i);
//                 break;
//             }
//         }
//     }
// }

    //4.2단부터 9단까지 구구단을 출력해보세요 
    //hint : 이중 반복문
    //큰 톱니바퀴는 단을 증가시키고, 그안의 작은 톱니바퀴는 1부터 9까지 반복

// for(let i = 2; i<=9; i++){
//     for(let j = 1; j<=9; j++){
//         //console.log(dan+"*"+i+"="+dan*i);
//         //template literal
//         console.log(i,"x",j,"=",i*j);
//     }
// }

//while문
//while(조건){할일};
//do{할일}while(조건);
let maxNum = 50;
let num1 = 3;
while (num1<maxNum){
    console.log(num1++);
}

do{
    console.log(num1++)
}while(num1<maxNum);