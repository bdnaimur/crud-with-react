import React from 'react';
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
                                <li><a href="home">Home</a></li>
                                <li><a href="insert">Insert</a></li>
                                <li><a href="read">Read</a></li>
                                <li><a href="update">Update</a></li>
                                <li><a href="delete">Delete</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;