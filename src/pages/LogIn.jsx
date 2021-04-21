import React from "react";
import { Link } from "react-router-dom";

const LogInPage = () => {
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
            <div class="containerUser">
                <img src="./Login.Png" alt="user" height="805px" width="100%" className="Logpic"></img>
                <div class="text-block">
                    <h2 className>Logga in</h2>
                    <input text="Email" placeholder="E-post" />
                    <br></br>
                    <input text="Password" placeholder="Lösenord" />
                    <br></br>
                    <div class="button3">

                        <a href="#" className="kom3">Logga in</a>
                    </div>
                    <h4 className="har">Har du inte ett konto?</h4>
                    <div class="button4">

                        <a href="#" className="kom3">Skapa konto</a>
                    </div>

                </div> </div>
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

export default LogInPage;