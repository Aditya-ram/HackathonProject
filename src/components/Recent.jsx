import React, { useEffect, useState } from 'react'
import Card from './Card';
import '../style/Commit.css'
const Recent = () => {
    const [data,setData] = useState([]);
    const[commit,setCommit] = useState();
    const[contributer,setContributor] = useState();
    useEffect(()=>{
        const stored = localStorage.getItem('data');
        setData(JSON.parse(stored));
    },[])
    console.log(data);
    useEffect(()=>{
        fetch(data.commits_url)
        .then((res)=>res.json())
        .then((res)=>setCommit(res.message))

        fetch(data.contributors_url
        )
        .then((res)=>res.json())
        .then((res)=>setContributor(res))
    },[data])
  return (
    <div className = "commit">
            <h1>Recent Commits and Top Contributors</h1>
            <h3><b> Recent Commit: </b></h3>{commit}
            <h3><b>Contirbutors:</b></h3>
            {
                contributer?.map((item)=>{
                    return(
                        <div>{item.login}</div>
                    )
                })
            }
    </div>
  )
}

export default Recent;
