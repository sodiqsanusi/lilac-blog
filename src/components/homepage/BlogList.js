import { Link } from "react-router-dom";


const Bloglist = ({blogs, deleteBlog}) => {
    
    return ( 
        
        blogs.map((blog)=> (
            <div className="blog-preview" key={blog.id} >
            <Link to={"/blog/" + blog.id } >
              <h2>{ blog.title }</h2>
              <p>This blog was written by {blog.author} </p>
            </Link>
            </div>
        ))
     );
}
 
export default Bloglist;