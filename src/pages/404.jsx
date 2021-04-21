import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <Link to="/" className="goback">Go Back to home page! Click here!</Link>
            <h2>404 Error! Page not found!</h2>
            <img src="rick.gif" alt="error 404" width="700" height="700"/>
        </div>
    );
};

export default NotFoundPage;        