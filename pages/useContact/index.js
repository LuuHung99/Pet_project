import React, {useState, useMemo} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./home";
import PageComponent from "./page";
import { UseContact } from "./useContact";

function useContact(props) {

    const [user, setUser] = useState(null);

    const value = useMemo(() => {{user, setUser}}, [user, setUser])
  return (
    <Router>
      <div>
        <ul>
          <Link to="/home">Home</Link>
          <Link to="/page">Page</Link>
        </ul>
      </div>
      <UseContact.Provider value={value} >
        <Route path="/home" component={HomePage} />
        <Route path="/page" component={PageComponent} />
      </UseContact.Provider>
    </Router>
  );
}

export default useContact;
