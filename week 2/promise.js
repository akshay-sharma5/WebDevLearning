/*
A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations more effectively than traditional callback functions, providing a cleaner and more manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or timers.
*/
// //example
// //wrapper around set timeout
// function resolve()
// {
//     console.log("3 sec passed")
// }



// function waitfor3sec(resolve)
// {
//     setTimeout(resolve,3000)
// }


// waitfor3sec(resolve)

//example 2

// function callback()
// {
//     console.log("Done")
// }

// function random(resolve)
// {
//     resolve()
// }
// let p=new Promise(random)

// p.then(callback)


//Simple set timeout promisified

// function doAsyncOperation(resolve)
// {
//     setTimeout(resolve,3000)
// }

// const p= new Promise(doAsyncOperation)

//     function callback()
//     {
//         console.log("completed")
//     }

// p.then(callback)

//setTimeoutPromisified

// function callback()
// {
//     console.log("Timer finished")
// }
// function setTimeoutPromisified(ms)
// {
//     return new Promise(resolve => setTimeout(resolve,ms))
// }

// setTimeoutPromisified(5000).then(callback)


