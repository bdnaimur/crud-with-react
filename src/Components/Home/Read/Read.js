import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import ShowData from './ShowData/ShowData';
import './Read.css'
import { Link, useParams } from 'react-router-dom';

const Read = () => {
    const [getData, SetGetData] = useState([]);
    let dependency = false;
    const {readId} = useParams();
    const limit = 3;
    const offset = (readId - 1) * limit;
    console.log(readId);
    const url1 = `http://localhost:5055/read/?offset=${offset}&limit=${limit}`;
        fetch(url)
        .then(res => res.json() )
        .then(data =>SetGetData(data))
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
    const total = getData.length;
    const limit = 3;
    const numberOfPages = Math.ceil(total/limit) || 0;
    const numArray = [];
    for (let i = 0; i < numberOfPages; i++) {
        numArray.push(i + 1);
    }
    console.log(numArray);
    return (
        <div>
            <Home/>
            <h2 className="heading-style">Read</h2>
            <table className="table-style">
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
            <ul className="pagination">
                {
                    numArray.map(listItem => <li><Link to={`/page/${listItem}`}>{listItem}</Link></li>)
                }
                {/* <li><a href="read?1">1</a></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li> */}
            </ul>
        </div>
    );
};

export default Read;