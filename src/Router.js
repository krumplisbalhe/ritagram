import React from "react"
import { BrowserRouter as Router, Route} from "react-router-dom"
import BlogPost from "./components/modal/modal"

function AppRouter() {
  return (
    <Router>
			<Route path="/bp" component={BlogPost} />
			<Route path="/" exact />
    </Router>
  );
}

export default AppRouter
