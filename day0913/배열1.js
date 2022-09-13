let colorArr = [`빨`, `주`, `노`, `초`, `피`, `남`, `보`];
console.log(colorArr[1]);//1번인덱스에 있는값 출력 
colorArr[2] = '노란색';
console.log(colorArr[2]);
console.log(colorArr);

let arr = new Array('zero', 'one', 'two','three'); 
console.log(arr[3])

let arr1= ['1', '이', 3, 'four', 4, 5, 'five', 5, 5];
console.log(arr1[10]);
console.log(arr1);
console.log(arr1.indexOf('이')); // 숫자 5의 값을 가진 첫번째 인덱스
console.log("길이 : ", arr1.length); //9
console.log(arr1[10]); //undefined
//대부분의 언어에서 배열은 데이터타입이 같아야하고, 길이가 고정되어 변경될수 없다.

//전체 원소 출력하기
for(let i=0; i<arr1.length; i++){
    console.log(arr1[i]);
}

for(let 원소 of arr1){
    console.log("향상된 포문에서 찍은 원소 : "+원소);
}

//인자2개 (첫번째는 검사할 이름, 두번째는 배열) 동물이름이 있는지 검사하는 함수
let animals = ['tiger', 'lion', 'rabbit', 'rat','cat', 'dog', 'whale']
function isExist(name, arr){
    for(let i=0; i<arr.length; i++){
        if(name == arr[i]){
            return true;
        }
    }
    return false;
}
console.log(isExist('tiger', animals));

// 퀴즈1. 한글로 연예인배열을 주고 이름이 2글자인 연예인이 몇명이 있는지 리턴하는 함수
let talents = ['서인영','이효리','공유','유진','최강창민','유노윤호']
function count2Tal(연예인리스트){
    let count = 0;
    for(let i = 0; i<연예인리스트.length; i++){
        if(연예인리스트[i].length == 2){
            count += 1;
        }
    }
    return count
}
console.log(count2Tal(talents));

//퀴즈2. 막무가내로 좀 긴 숫자 6개정도넣은 배열에서 제일 큰 숫자를 찾아 출력해보세요.
let bignums = [ 1443235, 234523435, 234234234234, 34234234234, 43234234234];   
function pribtBiggest(list){
    let biggest = list[0];
    console.log(list.length);
    for(let i=0; i<list.length; i++ ){
        //이번에 도는 요소가 현재까지 저장된 최대값보다 크면
        if(list[i]>biggest){
           biggest =list[i]//바꿔치기
        }
    }
    console.log(biggest);
}
pribtBiggest(bignums);

//퀴즈3. Math.random()을 쓰면 0~1까지의 소수가 생성된다.
	   //Math.floor(Math.random()*100)	//0~100까지의 정수 랜덤으로뽑기
	   //10개의 0~100까지의 랜덤정수를 만든다음 50이상의 수의 갯수를 출력해보세요.

    function makeRandomInt(){
        let arr = [];
        for(let i=0; i<10; i++){
            arr[i] = Math.floor(Math.random()*100);
        }
        return arr;
    }

    function isOverFifty(randomlist){
        let count=0;
        let arr = makeRandomInt();
        console.log("만들어진 랜덤배열"+arr);
        for(let i=0; i<arr.length; i++){
            if (arr[i]>=50){
                count ++;
            }
        }
        return count;
}
console.log(`50이상의 갯수는 :`+isOverFifty());
//퀴즈4. 첫번째인자(배열)의 가장 큰수와 두번재인자(배열)의 가장 작은수를 곱한수를 출력하는 함수
function mulMaxMim(arr1, arr2){
    let maxNum = Math.max.apply(null, arr1);
    let minNum = Math.min.apply(null, arr2);
    return maxNum * minNum;
}
let numList1 = [11,15,51,97];
let numList2 = [11,8,5,2];
console.log(mulMaxMim(numList1, numList2));
		//아무외부함수 없이 반복문 돌면서 최대, 최소를 골라도되고
		//Math.max.apply(null,배열)  써도되고

//퀴즈5. 오름차순 정렬
let numbers = [2,7,100,81,50];
function order(numbers){
    let minTemp = 0;
    let newArr = new Array(...numbers);    //원본을 건들지 않기 위해 복제. 근데 length가 1이네
    //console.log("newArr.length : "+newArr.length);
    //console.log("반복문 실행전. 첫번째요소 : "+newArr[0]);  //배열의 주소가 전달되어 요소1개가 들어감
    
    for(let i=0; i<newArr.length-1; i++){
        console.log(`--기준 : ${newArr[i]}--`);
        for(let j=i+1; j<newArr.length; j++){
            if(newArr[i]>newArr[j]){
                //기준보다 작은놈이 생기면
                
                console.log(`   ${newArr[j]}가 ${newArr[i]} 보다 더 작음`);
                minTemp = newArr[j];   //작은놈을 임시로 뽑고
                newArr[j] = newArr[i]; //기준을 작은놈위치로 바꾸고
                newArr[i] = minTemp;    //뽑은 임시값을 새배열의 i번째에 저장
            }
            
        }
    }
    return newArr;
}
// console.log(order(numbers));
