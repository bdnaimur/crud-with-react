import React from 'react';
import {Link} from "react-router-dom";
const ShowData = ({increament, eachData, handleClick, handleClickEdit}) => {

    return (
        <tr>
            <td>{++increament}</td>
            <td>{eachData.name}</td>
            <td>{eachData.email}</td>
            {/* <td><button onClick={()=>handleClickEdit(eachData._id)}><Link to ={"/update:" + eachData._id}>Edit</Link></button></td> */}
            <td><button onClick={()=>handleClickEdit(eachData._id)}><Link to ={`/update/${eachData._id}`}>Edit</Link></button></td>
            <td><button onClick={()=>handleClick(eachData._id)}>Delete</button></td>
        </tr>
    );
};

export default ShowData;