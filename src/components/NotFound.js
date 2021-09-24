import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <main className="not-found">
            <h2>Sorry, this page does not exist</h2>
            <button><Link to="/">Click to go to homepage</Link></button>  
        </main>
     );
}
 
export default NotFound;