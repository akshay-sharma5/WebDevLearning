// function greet(name)
// {
//     return "Hello "+name
// }

// console.log(greet(123))

// function add(a,b)
// {
//     console.log(a+b)
// }
// add(20,30)

// function canVote(age)
// {
//     if(age<18)
//     {
//         console.log("You cant vote")
//     }
//     else
//     {
//         console.log("Eligible to vote")
//     }
// }

// canVote(18)

// function evenOdd(num)
// {
//     if(num%2==0)
//     {
//         console.log("even")
//     }
//     else
//         console.log("0dd")
// }

// evenOdd(69)

// function naturalSum(num)
// {
//     let sum=0
//     for(let i=1;i<=num;i++)
//     {
//         sum+=i
//     }
//     console.log("sum is "+sum)
// }
// naturalSum(100)

// let user=
// {
//     name:"Akshay",
//     age:25
// }

// console.log("Hello "+user.name+" your age is "+user.age)

// function greet(user)
// {
//     if(user.gender=="male")
//     {
//         console.log("Hi Mr "+user.name+" your age is "+user.age)
//     }
//     else if(user.gender=="female")
//     {
//         console.log("Hi Mrs "+user.name+" your age is "+user.age)
//     }
//     else
//     {
//         console.log("Hi LGBTQ+ "+user.name+" your age is "+user.age)
//     }
//     if(user.age>18)
//      {
//          console.log("You cant vote")
//      }
//      else
//      {
//          console.log("Eligible to vote")
//      }
    
// }

// greet({name:"Akshay",age:25,gender:"male"})

// 

function voters(vote)
{
    let arr=[]
    for(let i=0;i<vote.length;i++)
    {
        if(vote[i].age>18)
        {
            arr.push(vote[i])
        }
    }
    return arr
}

const vote=[
    {name:"Akshay",
        age:25
    },
    {name:"Rohan",
        age:45
    },
    {name:"Piyush",
        age:15
    },
    {name:"Abhay",
        age:66
    }

]

let elivote=voters(vote)

// for(let i=0;i<elivote.length;i++)
// {
//     console.log(elivote[i].name)
// }

function filvote(user)
{
    return user.age>=18
}

let filtervoters=vote.filter(filvote)
for(let i=0;i<filtervoters.length;i++)
{
    console.log(elivote[i].name)
}
