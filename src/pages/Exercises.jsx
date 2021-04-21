import React from "react";
import { Link } from "react-router-dom";

const ÖvningPage = () => {
    return (
        <div>
            <div className="navbar">
                <div className="container">
                    <Link to="/"><img src="./workin.png" alt="working" width="297px" height="70px"></img></Link>
                    <nav>
                        <ul className="primary-nav">

                            <li><Link to="/Createuser">Skapa konto</Link></li>
                            <li><a href="#">Övningar</a></li>
                            <li><a href="#">Färdiga Pass</a></li>
                            <li><a href="#">Program</a></li>
                            <input type="text" placeholder="Sök" />
                            <Link to="/LogIn">Logga in</Link>
                        </ul>

                    </nav>
                </div>
            </div>
            <div className="middle">
                <h2>Logga in</h2>
                <div>
                    <form id="Log-in" onSubmit></form>
                </div>
            
                <div className="LogInInput">
                


                </div>
            </div>
            <div className="navbar2">
                <nav2>
                    <ul className="primary-nav">

                        <li><a href="#">Om</a></li>
                        <li><a href="#">Kontakt</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Samarbeten</a></li>
                    </ul>

                </nav2>
            </div>

        </div>
    );
};

export default ÖvningPage;