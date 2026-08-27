/*
Q: Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2
*/
function setTimeoutPromisified(ms)
{
    return new Promise(resolve => setTimeout(resolve,ms))

}

//setTimeoutPromisified(1000).then(()=>{console.log("Hi")})

// setTimeoutPromisified(3000).then(()=>{console.log("Hello")})

// setTimeoutPromisified(5000).then(()=>{console.log("Hello There")})


//async await

// async function solve()
// {
//     await setTimeoutPromisified(1000)
//     console.log("hi")

//     await setTimeoutPromisified(3000)
//     console.log("hello")

//     await setTimeoutPromisified(5000)
//     console.log("hello there")
// }

// //await keyword stops the async function execution until promise is compelted

// solve()


/*
Q: Write a function that
Reads the contents of a file
Trims the extra space from the left and right
Writes it back to the file
*/
// const fs=require('fs')

// function onDone()
// {
//     console.log("file has been cleaned")
// }

// function cleanFile(filename)
// {
//     return new Promise(resolve =>
//     {
//         fs.readFile(filename,"utf-8",function (err,data)
//         {
//             const cleaeddata=data.trim()
//             fs.writeFileSync(filename,cleaeddata)
//             resolve();
//         })
//     }

//     )
// }

//Promise approach

// cleanFile("a.txt").then(onDone)

//async approach

// async function main()
// {
//     await cleanFile("a.txt")
//     onDone()
// }

// main()

//Promisified file read with error control

const fs=require('fs')

function readFilePromisified(filename)
{
    return new Promise((resolve,reject)=>{
        let data=fs.readFile(filename,"utf-8",(err,data)=>{
            if(err)
            {
                reject("Error in reading file")
            }
            else
            {
                resolve(data);
            }
        })
    })
}

function printData(data)
{
    console.log(data)
}
function onError(err)
{
    console.log(err)
}

readFilePromisified("bs.txt").then(printData).catch(onError)