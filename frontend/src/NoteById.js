import React, {Component} from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom'

class NoteById extends Component{
    constructor(props){
        super(props);
        this.state ={
            title: '',
            author: '',
            noteBody: '',
            id: '',
            noteDeleted: false,
            message: ''
        }
    }
    componentDidMount(){
        console.log(this.props.match)
        axios
        .get(`/notesapi/getNoteById/${Number(this.props.match.params.id)}`)
        .then(res =>{
            console.log(res.data)
            this.setState({
                title: res.data.title,
                author: res.data.author,
                noteBody: res.data.body,
                id: res.data.id
            })
        })
        .catch(err =>{
            this.setState({
                message: `We hit a snag: ${err}`
            })
        })
    }
    deleteNote = () =>{
        let {
            id
        } = this.state
        axios
        .get(`/notesapi/deletenote/${id}`)
        .then(res =>{
            this.setState({
                noteDeleted: true
            });
        })
    }
    render(){
        let {
            title,
            author,
            noteBody,
            noteDeleted,
            id,
            message
        } = this.state;
        return(
            <div style={{position: 'relative', margin: "auto", top: 0, left: 0, right: 0, bottom: 0}} >            
                <h1>{title.split(' ').join('') ? title : "Untitled"} by <em> {author.split(' ').join('') ? author : "Anonymous" }</em></h1>
                <div style={{margin: '0 auto', position: 'relative', width: '50vw', left: '0'} }>
 <Link to={`/notes/${id}/edit`} > <button>Edit Note</button></Link> {" "}
                <button onClick={this.deleteNote} >Delete Note</button> {" "}<Link style={{ position: "relative", align: 'right', left: '100%', top: '100%'}} to={`/notes/`} > <button>Back</button></Link> 
                <br />
                <br />
                <div style={{border: '1px solid #000000', margin: '0 auto', width: '50vw', paddingTop: '2em', paddingRight: '2em', paddingLeft: '2em', paddingBottom: `${noteBody.length < 500 ? 20 : 2 }em`}} >
                    <p>{noteBody}</p>
                </div>
              {message}
               {noteDeleted ? <Redirect to='/notes' /> : null}                
               </div>

            </div>
        )
    }
}


export default NoteById;