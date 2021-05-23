import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import ShowData from './ShowData/ShowData';
import './Read.css'

const Read = () => {
    const [getData, SetGetData] = useState([]);
    let dependency = false;
    useEffect(()=>{
        const url = `http://localhost:5055/read`;
        fetch(url)
        .then(res => res.json() )
        .then(data =>SetGetData(data))
    },[dependency]);
    const handleClick = id =>{
        fetch(`http://localhost:5055/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    const remainItem = getData.filter( item => item._id !== id);
                    SetGetData(remainItem);
                    dependency = true;
                }
            })
    }
    const handleClickEdit = id =>{
        
    }
    return (
        <div>
            <Home/>
            <h2>Read</h2>
            <table className="table-style" border="1px solid black" >
                <thead>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                {getData.map(eachData => <ShowData handleClickEdit={handleClickEdit} handleClick={handleClick} increament= {getData.indexOf(eachData)} eachData = {eachData}></ShowData>)}
                </tbody>
            </table>
        </div>
    );
};

export default Read;