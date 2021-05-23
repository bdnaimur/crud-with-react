import React, { useState } from 'react';

const Form = () => {
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
        const url = `http://localhost:5055/addUsers`;
        fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(fromData)
        })
        .then(res => console.log('server side response', res))
        e.target.reset();
  };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" onBlur={handleBlur} name="name" placeholder="Name" />
                <br />
                <input type="email" onBlur={handleBlur} name="email" id="" placeholder="Email" />
                <br />
                <input type="password" onBlur={handleBlur} name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form;