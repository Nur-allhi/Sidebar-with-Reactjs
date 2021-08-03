import { useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Blog from './Components/Blog/Blog';
import Content from './Components/Content/Content';
import Courses from './Components/Content/Sub-Content/Courses';
import Video from './Components/Content/Sub-Content/Video';
import Dashboard from './Components/Dashboard/Dashboard';
import SideMenu from './Components/SideMenu';
import './css/App.css';

function App() {
  const [inactive, setInactive] = useState(false)

  return (
    <div className="App">
      <Router><SideMenu onCollapse={(inactive) => {
        setInactive(inactive)
      }} />
        <div className={`container ${inactive ? "collapse" : ""}`}>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/content">
              <Content />
            </Route>
            <Route path="/content/courses">
              <Courses />
            </Route>
            <Route path="/content/videos">
              <Video />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
