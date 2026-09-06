import { useState ,useEffect} from 'react'

export function usePostTitle(){
    const [post,setPost]= useState({})

  async function getPost(){
    const response=await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const json=await response.json()
    setPost(json)
  }

  useEffect(()=>{
    getPost();
  },[])

  return post.title
}

export function useFetch(url){

  const [Data,setData]=useState({})

  const [loading,setLoading]=useState(true)


  async function getData(){
    setLoading(true)

    const response=await fetch(url)
    const json=await response.json()
    setData(json)
    
    setLoading(false) 
  }

  useEffect(()=>{
    getData()
    
  },[url])

  

  return {Data,loading}

}