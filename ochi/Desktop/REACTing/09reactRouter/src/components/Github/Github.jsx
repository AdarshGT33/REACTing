import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/AdarshGT33')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-center text-green-200 bg-stone-800 p-5 text-2xl'>Github followers: {data.followers} 
    <img src={data.avatar_url} alt="github picture" width={300}/></div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/AdarshGT33")
    return response;
}