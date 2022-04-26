import React, { useState } from 'react'
import './App.css';
import Navbar from "./component/navbar"
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Journey from "./pages/Journey"
import Team from "./pages/Team"
import Store from "./pages/Store"
import Product from "./pages/product"
function App() {
  const [myArray, setMyArray] = useState([]);

  const handlearray=(x)=>{
    setMyArray(oldArray => [...oldArray, x]);
}
const removearray=(y)=>{
  console.log(y)
  let fe = myArray.filter(k => k.every(e => e._id !==y));
  setMyArray(fe)
}





  return (
<Router>
<Navbar />
<Routes>
<Route exact path="/" element={<Home />}></Route>
<Route exact path="/team" element={<Team />}></Route>  
<Route exact path="/contact" element={<Contact />}></Route> 
 <Route exact path="/journey" element={<Journey />}></Route> 
 <Route exact path="/store" element={<Store arr={myArray} remov={removearray}/>}></Route>
 <Route  exact path="/store/:_id" element={<Product changearr={handlearray} arr={myArray} remov={removearray} />}></Route>

</Routes>

</Router>

  );
}

export default App;
