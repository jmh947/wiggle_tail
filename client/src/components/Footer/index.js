import React from "react";
import "./style.css";
import Anna from "../../img/happy.jpg"
import Milo from "../../img/christina.jpg"
import Fin from "../../img/jacky.jpg"
import Nellie from "../../img/Nellie.jpg"
import Gill from "../../img/gill.jpg"
const Footer = (props) => {
    return (
        <div className = "footer">
            <div class="footer-copyright text-center py-3">
                <strong style={{color: "orange", fontFamily: "'Modak', cursive", fontSize: "25px" }}>Wiggle Tails</strong> by
                    <a href="https://github.com/ngavu2712" style={{color: "white"}}> Anna Vu |</a>
                    <a href="https://github.com/teslacats7776" style={{color: "white"}}> Christina Tarango |</a>
                    <a href="https://github.com/jmh947" style={{color: "white"}}> Jaclyn Hardy</a>
            </div>
            <div class="footer-copyright text-center py-3">
                <strong>Accompanied</strong> by our loving pups: Happy, Milo, Fin, Nellie and Gill
            </div>

            <div class="footer-copyright text-center py-3">
                <img className ="pups" src={Anna} />
                <img className ="pups" src={Milo} />
                <img className ="pups" src={Fin} />
                <img className ="pups" src={Nellie} />
                <img className ="pups" src={Gill} />
            </div>

             {/* <!-- Social buttons --> */}
            <ul className="list-unstyled list-inline text-center">
                <li className="list-inline-item">
                    <p>Wiggle Tail's GitHub</p>
                    <a style={{color: "darkslategray"}} href="https://github.com/jmh947/wiggle_tail" >
                        <i style={{color: "orange"}} className="fab fa-3x fa-github"> </i>
                    </a>
                </li>
      
            </ul>

            

        </div>
    )
}

export default Footer;