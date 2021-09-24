import useFetch from "../../hooks/useFetch";
import Bloglist from "./BlogList";

const Home = () => {
    const {data: blogs} = useFetch("http://localhost:8000/blogs") ;


    return ( 
        <section className= "home">
           { blogs && <Bloglist blogs= {blogs}/>}
        </section>
     );
}
 
export default Home;