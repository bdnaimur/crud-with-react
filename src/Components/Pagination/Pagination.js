import React from 'react';
import { useParams } from 'react-router';

const Pagination = () => {
    const {readId} = useParams()
    return (
        <div>
            <h1>hello{readId}</h1>
        </div>
    );
};

export default Pagination;