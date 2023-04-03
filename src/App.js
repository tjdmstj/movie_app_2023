import React from "react";
import "./App.css";
import {HashRouter , Route, Routes} from 'react-router-dom';
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";


function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route path="" Component={Home}/>
          <Route path="about" Component={About} />
          <Route path="movie_detail" Component={Detail} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
