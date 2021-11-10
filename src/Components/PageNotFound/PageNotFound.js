import React from 'react';
import './PageNotFound.css'

const PageNotFound = () => {
    document.title = "JossGift || Page Not Found";

    return (
        <div className="page_not_found"> 
            <h1>404!</h1>
            <h2>Sorry Page Not Found!</h2> 
        </div>
    );
};

export default PageNotFound;