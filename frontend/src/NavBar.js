import React from 'react';
import {Link} from 'react-router-dom';
const NavBar = () =>{
    return <header className='NavbarHeader' style={{}} >
    {/* <nav> */}
        <Link className='HomeLink' to="/"><h1 className="Home">Clevernote</h1></Link>
       <span style={{align: 'right', paddingLeft: '70%', paddingTop: '1em', position: 'relative'}} > {'  '}<Link to="/about">About</Link> {'  '}
        <Link to="/notes">View Notes</Link>     </span>   
        {/* </nav>     */}
        <hr />
    </header>
}


export default NavBar;