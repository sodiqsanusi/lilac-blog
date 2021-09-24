import Navbar from "./Navbar";
import Home from "./homepage/Home" ;
import {BrowserRouter as Router, Route, Switch} from "react-router-dom" ;
import BlogDetails from "./bodypage/BlogDetails";
import NewBlogs from "./newblogs/NewBlogs";
import NotFound from "./NotFound";

function App() {
   
  return (
    <Router>
      <main className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path="/blog/:id">
            <BlogDetails />
          </Route>
          <Route exact path="/new">
            <NewBlogs />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
