// console.log("hello from js")

// let x = 19
// let Age = prompt("AGE :")

// if (Age >=20){
//     console.log("adult")
// }
// else{
//     console.log("child")
// }

// console.log("i'm "+ (x+x/input))

// for(i = 0;i <= 5; i++){
//     console.log(i)
// }

// let fruit = ["hehe","haha","hoho"];
// console.log(fruit[1])

function hello (name,x){
    for (i=1; i<= x; i++ ){
        console.log("My name is "+name)
    }
}

// function sum(x,y){
//     console.log(x+y)
// }

const sum = (x,y) => {
    return x+y
}

let Butt = document.querySelector("button")
let body = document.querySelector("p")

// Butt.addEventListener('click',() => { body.style.backgroundColor = "black";});
let x = 0
let list = ["ค้อน","กรรไกร","กระดาษ"]
let result = ""

let P = document.querySelector("#player")
let B = document.querySelector("#bot")
let R = document.querySelector("#result")

function hammer(){
    x = 0
    console.log(x)
}

function scissors(){
    x = 1
    console.log(x)
}

function paper(){
    x = 2
    console.log(x)
}

function send(){
    Bot = Math.floor(Math.random() * 3)
    if (Bot == x){
        result = "Tie"
    }
    else if(Bot==0 && x== 1){
        result = "lose"
    }
    else if(Bot==0 && x== 2){
        result = "win"
    }
    else if(Bot==1 && x== 0){
        result = "win"
    }
    else if(Bot==1 && x== 2){
        result = "lose"
    }
    else if(Bot==2 && x== 1){
        result = "win"
    }
    else if(Bot==2 && x== 0){
        result = "lose"
    }

    body.textContent

    body.textContent = "bot : " + list[Bot] + "\n" + "you : " + list[x] + "\n" + "result : " + result
    P.textContent = "you : " + list[x]
    B.textContent = "bot : " + list[Bot]
    R.textContent = "result : " + result

}

Bot = Math.floor(Math.random() * 3)

if (Bot == x){
    body.textContent = "Tie"
}



console.log(Bot)

