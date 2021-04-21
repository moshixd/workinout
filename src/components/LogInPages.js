import React, { useState } from 'react';
import LoginForm from './LoginForm';


function Log() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    const Login = details => {
        console.log(deatils);

        if (details.email == adminUser.email && details.password == adminUser.password)
            console.log("Logged in");
            else
            console.log("Details do not match!");
            }
        
            
            


    const Logout = () => {
        console.log("Logout");
        

    return (
        <div className="Log">
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} />
            )
            }   
        </div>
        )
    }
}

export default Log;