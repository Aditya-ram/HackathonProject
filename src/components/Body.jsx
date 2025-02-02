import React, { useEffect, useState,useRef } from 'react'
import Card from './Card';
import { Experimental_CssVarsProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../style/Body.css'

const Body = () => {
    const [res,setRes] = useState([]);
    const [filter,setFilter] = useState([]);
    const [lan,setLan] = useState('');
    const pointer = useRef(false);
    const [data,setData] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
            fetch('https://api.github.com/search/repositories?q=Q').
            then((res)=>res.json()).
            then((res)=>{
              setRes(res.items)
            }) 
    },[])
    console.log(res);
    useEffect(()=>{
        setFilter(res);
    },[res])


    useEffect(()=>{
        if(pointer.current){
            console.log("data inside use Effect is ",data);
            localStorage.setItem('data',JSON.stringify(data));
        }
        else{
            pointer.current = true;
        }
    },[data])
    console.log("data is ",data);

    //Filtering the data based on Language
    function handleFilter(event){
        console.log(res);
        console.log(event.target.value);
        setFilter(res.filter((item)=>{
            console.log("item is ", item);
            console.log("language is ",item.language)
            return(
                item.language == event.target.value
            )
        }));
    }
    // Sorting based on Stars or Forks
    function handleSort(param){
        if(param == 'Stars'){
            setFilter([...res].sort((a,b)=>{
                return(a.stargazers_count-b.stargazers_count)
            }))
        }
        else{
            setFilter([...res].sort((a,b)=>{
                return(a.forks_count-b.forks_count)
            }))

        }
        console.log("filter is ",filter);
    }
    function handleData(item){
        navigate('/commits')
        setData(item)
    }
  return (
    <div>
        <div className = "topContainer">
        <h2>Trending Repositories & their details</h2>
        <h3>Filter Based on Language</h3>
        <div className = "dropdown">
        <select className = "menu" name="Languages" id="" onChange={handleFilter}>
            <option value="Java">
                    Java
            </option>
            <option value="JavaScript">
            JavaScript  
            </option>
            <option value="C++">
            C++  
            </option>
            <option value="Go">
            Go  
            </option>
            <option value="Python">
            Python  
            </option>
            <option value="Ruby">Ruby</option>
            <option value="C#">
            C#  
            </option>
            <option value="Jupyter Notebook">
            Jupyter Notebook  
            </option>
            <option value="q">
            q  
            </option>
            <option value="HTML">
            HTML  
            </option>
            <option value="Lua">
            Lua  
            </option>
        </select>
       
        </div>
        <h3>Sort Based on Fork:<br/> <center> <button className="ForkBtn" onClick={()=>{handleSort('Fork')}}>Sort</button></center></h3>
        <h3>Sort Based on Stars: <center><button className="StarkBtn" onClick={()=>{handleSort('Stars')}}>Sort</button></center></h3>
        </div>
        <div className= "CardContainer">
        {
            filter?.map((item)=>{
                return(
                    <div className= "gridCont" onClick={()=>{handleData(item)}}>
                        <Card item={item}/>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Body
