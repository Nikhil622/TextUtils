import './App.css'
import React,{useState} from 'react'
import Navbar from './Components/Navbar';   // Blue Green Yellow White
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
//import { BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
    const [mode, setMode] = useState('Dark');
    const [modeBack, setModeBack] = useState({color:'black',backgroundColor:'white'});
    const [alert, setAlert] = useState(null);
    const [theme, setTheme] = useState({navbar:'black',body:'white'});

    const toggleMode=()=>{
        if(mode==='Dark')
         {  setMode('Light');
            setModeBack({color:'white',backgroundColor:'black'});
            document.body.style.backgroundColor='#0E7069';
            alertChange('Enabled Dark Mode.','success');
         }
        else
        {  setMode('Dark');
           setModeBack({color:'black',backgroundColor:'white'});
           document.body.style.backgroundColor='white';
           alertChange('Enable Light Mode','success');
        }
    }

    function alertChange(message,type)
     {  setAlert({
           msg:message,
           type:type
        });
        setTimeout(()=>{setAlert(null);},500);
     }
     function Color() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
     function changeTheme(e)
      {  let x,y; 
         if(e.target.value==='default')
           {  x='black';  //'#b2cecf'
              y='#b2cecf';
           }
         else if(e.target.value==='navbar-theme'){  //Changing navbar theme
            x=Color();
            y=theme.body;
         }
         else {                                      // Changing body theme
             x=theme.navbar;
             y=Color();
         }
         setTheme({navbar:x,body:y});
         document.body.style.backgroundColor=y;
      }
    return(
      //  <BrowserRouter>  // For routing
      //          <Navbar title='TextUtils' toggle={toggleMode} val={modeBack} theme={theme} changeTheme={changeTheme}/>
      //          <Alert alert={alert}/>
      //          <Routes>
      //                <Route exat path="/" element={<TextForm val={modeBack} alert={alertChange} theme={theme} changeTheme={changeTheme}/>}></Route>
      //                <Route exact path="/about" element={<About/>}></Route>
                 
      //          </Routes>
      // </BrowserRouter>
      <>
          <Navbar title='TextUtils' toggle={toggleMode} val={modeBack} theme={theme} changeTheme={changeTheme}/>
          <Alert alert={alert}/>
          <TextForm val={modeBack} alert={alertChange} theme={theme} changeTheme={changeTheme}/>            
      </>
    );
}

export default App;
   