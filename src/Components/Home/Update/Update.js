import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Update = () => {
    const {updateKey} = useParams();
    console.log(updateKey);
    const [getData, SetGetData] = useState([]);
    let dependency = false;
    useEffect(()=>{
        const url = `http://localhost:5055/read?`;
        fetch(url)
        .then(res => res.json() )
        .then(data =>{
            const selectedData =  data.filter(item => item._id == updateKey)
            console.log(selectedData);
            SetGetData(selectedData[0])})
    },[]);
    console.log(getData);
    const [fromData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const handleBlur = e =>{
        e.preventDefault();
        // e.target.value = 
        if(e.target.name == "name"){
            const name = e.target.value;
            const getDataName = {...fromData}
            getDataName.name = name;
            setFormData(getDataName)
        }
        if(e.target.name == "email"){
            const email = e.target.value;
            const getDataEmail = {...fromData}
            getDataEmail.email = email;
            setFormData(getDataEmail)
        }
        if(e.target.name == "password"){
            const password = e.target.value;
            const getDataPassword = {...fromData}
            getDataPassword.password = password;
            setFormData(getDataPassword)
        }
        
    }
    const handleSubmit = e =>{
        e.preventDefault();
        // const url = `http://localhost:5055/addUsers`;
        fetch(`http://localhost:5055/update/${updateKey}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fromData)
        })
            .then(res => res.json())
            .then(result => {
                // if (result) {
                //     loadAllProducts();
                //     document.getElementById('update').innerHTML = '';
                // }
                console.log(result);
            })
        // e.target.reset();
  };
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" onBlur={handleBlur} name="name" placeholder="Name" defaultValue={getData.name} />
                <br />
                <input type="email" onBlur={handleBlur} name="email" id="" placeholder="Email" defaultValue={getData.email} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Update;