import logo from "./logo.png"
import "./index.css"



export default function Page(){
    return(
        
    <div className="container">
        <div className="image">
            <img src = {logo} className = "logo" alt = "react logo"></img>

        </div>
        <div className="main">
            <div className="h1">
                <h1>Fun facts about React</h1>
            </div>
            
            <div className="list">
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            </div>
            
        </div>
        
    </div>
    )
}