import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Upload from "./components/Pages/Upload/Upload";
import UploadResume from "./components/Pages/Upload/UploadResume";
import Matching from "./components/Pages/Matching/Matching";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Router */}
        <Switch>
          <Route path="/upload-resume">
            <UploadResume />
          </Route>
          <Route path="/upload-jd">
            <Upload />
          </Route>
          <Route path="/matching">
            <Matching />
          </Route>
          <Route path="/">
            <Hero />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
