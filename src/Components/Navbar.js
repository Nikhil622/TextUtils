import React  from 'react'
//import { Link } from 'react-router-dom'

export default function Navbar(props) {
   
  return (
    <>
          <nav className="navbar navbar-expand-lg"  style={{padding:0,margin:0,backgroundColor:props.theme.navbar,
                                color:(props.theme.navbar)==='black'?'white':'black'}}>
              <div className="container-fluid" style={{backgroundColor:props.theme.navbar,
                                color:(props.theme.navbar)==='black'?'white':'black'}}>
                  <a className="navbar-brand" href="#" style={{backgroundColor:props.theme.navbar,
                                color:(props.theme.navbar)==='black'?'white':'black'}}><strong>{props.title}</strong></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="#" style={{backgroundColor:props.theme.navbar,
                                color:(props.theme.navbar)==='black'?'white':'black'}}>Home</a>
                          </li>
                          {/* <li className="nav-item">
                              <a className="nav-link" aria-current="page" href="/about" style={{backgroundColor:props.theme.navbar,
                                color:(props.theme.navbar)==='black'?'white':'black'}}>About</a>
                          </li> */}
                      </ul>
                      <div className="collapse navbar-collapse" style={{marginLeft:690}}>
                           <button type="button" value='default' class="btn btn-primary mx-1" onClick={props.changeTheme} style={{width:200,height:35,backgroundColor:props.theme.navbar,color:'white'}}>Default-Theme</button>
                           <button type="button" value='navbar-theme' class="btn btn-primary" onClick={props.changeTheme}  style={{width:200,height:35,backgroundColor:props.theme.navbar,color:'white'}}>Change-Navbar-Theme</button>
                           <button type="button" value='body-theme' class="btn btn-primary mx-1" onClick={props.changeTheme}  style={{width:200,height:35,backgroundColor:props.theme.navbar,color:'white'}}>Change-Body-Theme</button>
                      </div>
                  </div>
              </div>
          </nav>
    </>
  )
}
