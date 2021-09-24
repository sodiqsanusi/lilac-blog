import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewBlogs = () => {
    const [title, setTitle] = useState("Anonymous Writer");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Luigi");
    const [isPending, setIsPending]= useState(false);
    const hist = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {title, body, author}
        setIsPending(true);
        
        fetch("http://localhost:8000/blogs", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(blog) ,
        })
        .then(()=> {
            console.log("New blog added.")
            setIsPending(false);
            hist.push("/");   
        })
    }
    
    return ( 
        <main className="new-blog">
            <h2>Add a new blog:</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                 type="text"
                 required
                 value= {title}
                 onChange=  {(e) => {setTitle(e.target.value)}}
                 />
                 <label>Blog Body:</label>
                <textarea
                 required
                 value={body}
                 onChange= {(e)=> {setBody(e.target.value)}}
                 ></textarea>
                <label>Blog Author:</label>
                <select
                 required
                 value={author}
                 onChange= {(e)=> setAuthor(e.target.value)}
                 >
                  <option value="Mario">Mario</option>
                  <option value="Luigi">Luigi</option>
                </select>
              {!isPending && <button>Add Blog</button>}
              {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </main>
     );
}
 
export default NewBlogs;