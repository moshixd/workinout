import React from 'react';
import { Link } from "react-router-dom";

const MainPage = () => {
    return (

        <div>
            <div className="navbar">
                <div className="container">
                   <Link to="/">
                       <img src="./workin.png" alt="working" width="297px" height="70px"></img>
                       </Link>
                    
                    <nav>
                        <ul className="primary-nav">

                            <li><Link to="/CreateUser">Skapa konto</Link></li>
                            <li><a href="#">Övningar</a></li>
                            <li><a href="#">Färdiga Pass</a></li>
                            <li><a href="#">Program</a></li>
                            <input type="text" placeholder="Sök" />
                            <li><Link to="/LogIn">Logga In</Link> </li>
                        </ul>

                    </nav>
                </div>
            </div>
            <div className="first">
                <div className="text1">
                    <p>
                        Vi ger dig redskapen att få ut så mycket
                        som möjligt av din hemmaträning!
                        </p>
                </div>
            </div>
            <div className="second">
                <h2>Vill du ha hjälp att komma igång med din </h2>
                <h2>träning?</h2>

                <p className="koll">-Vi hjälper dig!</p>

                <div class="button">

                    <a href="#" className="kom1">Kom Igång</a>
                </div>
            </div>
            <div className="third">
                <h2 className="workoutHeading">Övningar för två</h2>
                <div className="text2">
                    <p>
                        Att träna ensam kan vara härligt med ibland kan
                        det vara motiverande att träna med någon annan.
                        Här får ni tips på roliga övningar ni kan göra tillsamans.
                    </p>
                </div>


            </div>
            <div className="fourth">
                <h2 className="avslapp">
                    Avslappningsövningar
                    </h2>
                <div className="text3">
                    <p>
                        Behöver du komma ner i var efter en stressig dag på jobbet?
                        Eller känner du bara för att få lite mer
                        inre lugn? Testa våra enkla avslappningsövningar.</p>
                </div>

            </div>
            <div className="fifth">
                <h2>Saknar du inspiration?</h2>
                <p className="koll">-Kolla in dessa träningsprogram</p>
                <div className="button">
                    <a href="#" className="kom1">Kom igång</a>
                </div>

            </div>
            <div className="sixth">
                <div className="try1"><img src="./train.png" alt="train" width="651" height="651"></img></div>
                <h2 className="workoutHeading1">
                    Träna med det du har hemma
                    </h2>
                <p className="text4">Har du inga vikter? Ingen fara! Här får tips
                på övningar du enkelt kan utföra med saker du har i
                    gymmet för lite extra tyngd i dina övningar. </p>
            </div>
            <div className="seventh">

                <div className="try"><img src="./run.png" alt="run" width="651" height="651"></img></div>

                <div><h2 className="workoutHeading2" >
                    30 minuter HIIT
                    </h2>
                    <p className="text5">
                        Har du ont om tid men vill ändå få ett intensivt pass
                        som bränner i musklerna? Testa 30 minuter HIT,
                        du kommer inte bli missnöjd!  </p>
                </div>


            </div>
            <div className="eight">
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
        </div>

    )
}
export default MainPage;

