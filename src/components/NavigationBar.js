import React from "react";


const NavigationBar = () => {
    return (
        <div className="navbar">
            <Link to="/index">
                <img src="./workin.png" alt="working" width="297px" height="70px"></img>
            </Link>

            <nav>
                <ul className="primary-nav">

                    <li><Link to="/LogIn">Skapa konto</Link></li>
                    <li><a href="#">Övningar</a></li>
                    <li><a href="#">Färdiga Pass</a></li>
                    <li><a href="#">Program</a></li>
                    <input type="text" placeholder="Sök" />
                    <li><Link to="/LogIn">Logga In</Link> </li>
                </ul>
            </nav>
        </div>
    )
};
export default NavigationBar;