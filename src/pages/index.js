import React from "react"
import Headerin from "../components/HeadIn"
import Footer from "../components/Footer"
import Middle from "../components/Middle"
import Navbar from "../components/Navbar"
import Nature from "./nature"
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"


export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Headerin />
      <Middle />
      {/* <Router>
       <Switch>
		      <Route exact path="/nature.js" component={Nature}/>
	    </Switch>
    </Router>, */}
      <Footer />
    </div>
  )
}

//alternativt sätt
// function App() {
//   return (
//     <div>
//       <Header />
//     </div>
//   )
// }

// export default App

//hej
