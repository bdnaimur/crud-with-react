import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="header-area">
                <div className="container overflow">
                    <div className="col-md-2"><a className="logo" href="home">Loge</a></div>
                    <div className="col-md-10">
                        <div className="main-menu">
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/insert">Insert</Link></li>
                                <li><Link to="/read">Read</Link></li>
                                <li><Link to="/update">Update</Link></li>
                                <li><Link to="/delete">Delete</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;