async function fetchdata(){
    //AXIOS method
    let response= await axios.get("https://jsonplaceholder.typicode.com/posts/1")


    // let response= await fetch("https://jsonplaceholder.typicode.com/posts/1")
    // const data=await response.json()

    console.log(response.data)
    let div =document.querySelector('div')
    div.innerHTML=response.data.title
    
}
fetchdata()





