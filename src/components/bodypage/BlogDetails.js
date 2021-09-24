import { useHistory, useParams } from "react-router";
import useFetch from "../../hooks/useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog} = useFetch("http://localhost:8000/blogs/" + id);
    const hist = useHistory();
    
     const handleDelete =() => {
      fetch("http://localhost:8000/blogs/" + blog.id ,
      {
        method : "DELETE"
      }).then(()=> {
        hist.push("/");
      })
    }

    return ( 
        <main className="blog-details">
          <article>
          { blog &&  <h2>{blog.title}</h2>}
          { blog && <p> By <em><b>{blog.author}</b></em></p>}
          {blog && <p>{blog.body}</p>}
          {blog && <button onClick={handleDelete}>Delete Blog</button> }
          </article>     
        </main>
     );
}
 
export default BlogDetails;