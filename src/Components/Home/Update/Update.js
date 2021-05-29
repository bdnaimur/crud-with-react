import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import Read from '../Read/Read';

const Update = () => {
    const {updateKey} = useParams();
    console.log(updateKey);
    const [getData, SetGetData] = useState([]);
    // const state = getData.display;
    // console.log(state);
    // let [display, setDisplay] = useState({
    //     state : getData.display
    // });
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
    // console.log(getData);
    // const [fromData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //    });

    //    console.log(fromData);
    const handleBlur = e =>{
        e.preventDefault();
        if(e.target.name == "name"){
            const name = e.target.value;
            const getDataName = {...getData}
            getDataName.name = name;
            SetGetData(getDataName)
        }
        if(e.target.name == "email"){
            const email = e.target.value;
            const getDataEmail = {...getData}
            getDataEmail.email = email;
            SetGetData(getDataEmail)
        }
    }
    const handleSubmit = e =>{
        e.preventDefault();
        // const url = `http://localhost:5055/addUsers`;
        fetch(`http://localhost:5055/update/${updateKey}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(getData)
        })
            .then(res => res.json())
            .then(result => {
                const getDataDetail = {...getData}
                getDataDetail.display = false;
                SetGetData(getDataDetail);
                console.log(result);
            })
        // e.target.reset();
  };
//   console.log(display);
console.log(getData);
    return (
        <div>
            {
                getData.display ?
                <div>
                <Home></Home>
                <form action="" onSubmit={handleSubmit}>
                <input type="text" onBlur={handleBlur} name="name" placeholder="Name" defaultValue={getData.name} />
                <br />
                <input type="email" onBlur={handleBlur} name="email" id="" placeholder="Email" defaultValue={getData.email} />
                <br />
                <input type="submit" value="Submit" />
                </form>
                </div>
                :
                <Link to="/read"><Read></Read></Link>
            }
        </div>
    );
};

export default Update;