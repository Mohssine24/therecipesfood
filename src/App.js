// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
// import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Post from './pages/Post';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
import Page404 from './pages/404';
// import AddPost from './pages/AddPost';
// import AllPosts from './pages/AllPosts';
// import EditPost from './pages/EditPost';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          {/* <Route exact path='/about-us'>
            <About />
          </Route> */}
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/terms'>
            <Terms />
          </Route>
          <Route exact path='/privacy'>
            <Privacy />
          </Route>
          {/* <Route exact path='/add-post-898992032838873854865654756'>
            <AddPost />
          </Route>
          <Route exact path='/all-posts-898992032838873854865654756'>
            <AllPosts />
          </Route>
          <Route exact path='/edit-post-898992032838873854865654756/:id'>
            <EditPost />
          </Route> */}
          <Route exact path='/error'>
            <Page404 />
          </Route>
          <Route exact path='/:id'>
            <Post />
          </Route>
          <Route exact path='/:id/:pageNumber'>
            <Post />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
