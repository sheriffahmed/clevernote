import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import NewNote from './NewNote.js'
class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allNotes: []
        }
    }


    getAllNotes = () => {
        axios
            .get('/notesapi/getAllNotes')
            .then(res => {
                this.setState({
                    // Most Recent Post appears on top
                    allNotes: res.data.reverse()
                })
            })
    }

    componentDidMount() {
        this.getAllNotes();
    }



    render() {
        let {
            allNotes
        } = this.state
        console.log(allNotes);
        return (
            <div>


                <Switch>
                    <Route exact path='/notes' render={(props) => {

                        return <div>
                            <h1>All Notes</h1>
                            <br />
                            <br />
                            <div className='noteGrid'>
                                {allNotes.length > 0 ? allNotes.map((note, index) => <div>
                                    <h3 style={{textAlign: 'center'}}>
                                    {note.title.split(' ').join('') ? note.title 
                                    : 'Untitled'}</h3>
                                    <h4 style={{textAlign: 'center'}} >by {note.author.split(' ').join('') ? note.author : 'Anonymous'} </h4> <Link className='noteLink' to={`/notes/${note.id}`}><div className='note' >
                                   

                                        <p>{note.body.length > 50 ? note.body.substring(0, 50) + '...' : note.body}</p>
                                    </div>
</Link>
                                    
                                </div> 
                                ) : null
                                }
                            </div>
                            <br />
                            <br />

                            <Link style={{textDecorationLine: 'none'}} to="/notes/new"><button>New Note</button> </Link>
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    }} />

                    <Route path='/notes/:id' />
                    <Route path='/notes/new' component={NewNote} />
                    

                </Switch>
            </div>
        )
    }
}

export default Notes;