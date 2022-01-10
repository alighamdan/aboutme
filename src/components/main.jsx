import react from "react";
import "./main.css";

export default function Mainpage() {
    return (
        <div>
            <div id="mainNav">
                <img
                    className="main-avatar"
                    src="https://cdn.discordapp.com/avatars/600031207782350858/1a6937eb1250c08e3885fcf842bc8326.png?size=4096"
                />
                <a href="/projects"><button className="navbuttons">Projects</button></a>
                <a href="/"><button className="navbuttons">Home</button></a>
            </div>
            <hr className="ignore" />
            <div id="content">
                <center>
                    Hi Welcome <br /> <br /> I'm Ali And I'm Backend Developer <br />
                    I'm 14 Years Old, I Live in Yemen <br />
                    I Start Coding Before 1 Year <br />
                    You Can See My Projects At Github
                    <br />
                    Or You Can easily Go Here:{" "}
                    <a style={{ fontWeight: "bolder" }} href="/projects">
                        Projects
                    </a>
                </center>
            </div>
        </div>
    );
}
