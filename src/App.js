import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useReducer } from "react";
import "./App.css";
import "./lib/fontawesome/css/all.min.css";
import Add from "./components/Add";
import Details from "./components/Details";
import { GlobalProvider } from "./context/GlobalState";
import Login from "./components/Login";

function App() {

  return (
    

    <GlobalProvider>
                   
      <Router>
                 
        <Routes>
          <Route path ="/" element={<Login/>}> </Route>
          
          <Route path="/add" element={<Add />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
