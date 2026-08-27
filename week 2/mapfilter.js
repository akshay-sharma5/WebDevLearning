//arrow functions
const sum=(a,b)=>{
    return a+b
}

console.log(sum(10,20))

//Given an array return new array in which every value is multiplied by 2
//[1,2,3,4,5] -> [1,4,9,16,25]


let arr=[1,2,3,4,5]

let newarr=arr.map((i)=>{return i*i})
console.log(newarr)

//Output : [ 1, 4, 9, 16, 25 ]


//in given array create new array with even values

let newarr2=newarr.filter((i)=>{return i%2==0})
console.log(newarr2)