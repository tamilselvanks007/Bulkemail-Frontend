import "./App.css";
import Header from "./Components/JS/Header";
import Sidebar from "./Components/JS/Sidebar";
import Emaillist from "./Components/JS/Emaillist";
import Compose from "./Components/JS/Compose";
import Emaildetails from "./Components/JS/Emaildetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectisMessageOpen } from "./features/mailSlice";

function App() {
  const isMessageOpen = useSelector(selectisMessageOpen); // useSelector is a hook that returns the state of the store
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Emaillist />
            </Route>
            <Route path="/mail">
              <Emaildetails />
            </Route>
          </Switch>
        </div>
        {isMessageOpen && <Compose />}
      </div>
    </Router>
  );
}

export default App;
