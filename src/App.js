import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import About from './components/About';
//import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {

  const[mode, setMode] = useState("light");

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      document.title = "TextMaster (DarkMode Enabled)"
    }else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.title = "TextMaster"
    }
  }

  return (
    <>
    <Navbar title = "WordPilot" about = "About" mode = {mode} toggleMode = {toggleMode}/>
    {/*<Alert alert = "hello" />*/}
    <div className='container my-3'>
      <TextForm heading = "Text Box:" mode = {mode}/>
      {/*<About mode = {mode}/>*/}
    </div>
    </>
  );     
}

export default App;
