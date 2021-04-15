import { useHistory } from "react-router"
import { Link } from "react-router-dom";

export default function Login(){
    let history = useHistory();

    let login =() =>{
        
    }
    return (
        <div>
            <h2>Login Component</h2>
            <button onClick={login}><Link to="/home">Login</Link></button>
        </div>
    )
}