import React, { Component } from 'react';
import {Switch, Link, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import About from './About.js';
import NavBar from './NavBar.js';
import Notes from './Note.js';
import NewNote from './NewNote.js'
import NoteById from './NoteById.js'
import EditNote from './EditNote.js'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path="/" render ={() =><div style={{position: 'absolute', top: '50vh', right: 0, bottom: 0, left: 0, width: '100%', height:'auto', textAlign: 'center'}}> 
          <h1 style={{margin: '0 auto', paddingBottom: '1%'}}> Clevernote</h1>
        <Link to='/about'><button>About</button></Link> {" "}
        <Link to="/notes"><button>View Notes</button></Link>
        </div>
        } />
        <Route path="/about" render={()=> <div>
          <NavBar />
          <br />
          <br />
          <About />
          </div> } />
          <Route exact path ="/notes" render={ (props) =><div>
            
            <NavBar />
          <br />
          <br />
          <Notes  {...props}  />   
          <br />                   
            </div>} />
            <Route path ="/notes/new" render={ (props) =><div>
            
            <NavBar />
          <br />
          <br />
          <NewNote  {...props}  />   
          <br />                   
            </div>} />
            <Route exact path ="/notes/:id" render={ (props) =><div>
            
            <NavBar />
          <br />
          <br />
          <NoteById  {...props}  />   
          <br />                   
            </div>} />
            <Route exact path ="/notes/:id/edit" render={ (props) =><div>
            
            <NavBar />
          <br />
          <br />
          <EditNote  {...props}  />   
          <br />                   
            </div>} />
</Switch>
      </div>
    );
  }
}

export default App;
