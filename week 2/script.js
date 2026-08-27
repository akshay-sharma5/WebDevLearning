const fs =require('fs')
// fs.appendFileSync("a.txt","\n New text in file")
// const data=fs.readFileSync("a.txt","utf-8")

// console.log(data)

//Functional argument
// function add(a,b)
// {
//     return a+b
// }
// function sub(a,b)
// {
//     return a-b
// }
// function mult(a,b)
// {
//     return a*b
// }
// function div(a,b)
// {
//     return a/b
// }

// function doOperation(a,b,op)
// {
//     return op(a,b)
// }

// console.log(doOperation(15,25,mult))

//Async file read
function read(err,data)
{
    console.log(data)
}
//error first argument
//CALLBACK

// fs.readFile("a.txt","utf-8",read)

// fs.readFile("b.txt","utf-8",read)

// console.log("done")


//JS architechture for async code
// function callback()
// {
//     console.log("Callback")
// }

// console.log("Hi")

// setTimeout(callback,1000)

// for(let i =0;i<10000000000;)
// {
//     i++
// }

// console.log("done")

function first() {
  console.log("First");
}
function second() {
  first();
  console.log("Second");
}
second();