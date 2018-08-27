import React, { Component } from 'react';
import axios from 'axios'
import {Redirect, Link} from 'react-router-dom'
class NewNote extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            noteBody: '',
            message: '',
            id: ''
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
    }
    handleFormInput = e => {

        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = e =>{
        e.preventDefault();
        let{
            title,
            author,
            noteBody,
            id
        } = this.state;
        axios
        .post(`/notesapi/editNote/${id}`, {
            title: title,
            author: author,
            noteBody: noteBody
        })
        .then(res =>{
            this.setState({
                title: '',
                author: '',
                noteBody: '',
                message: 'Post Update successful'
            })
        })
        .catch(err =>{
            this.setState({
                message: `We hit a snag: ${err}`
            })
        })
    }

    render() {
        let {
            title,
            author,
            noteBody,
            message,
            id
        } = this.state;
        return (
                <div style={{position: 'relative', margin: "auto", top: 0, left: 0, right: 0, bottom: 0}} >
            
                <h1>Edit Note</h1>
                <div style={{margin: '0 auto', position: 'relative', width: '50vw', left: '0'} }>
                <form onSubmit={this.handleSubmit}>
                    <input id='title' onInput={this.handleFormInput} type='text' placeholder='Title' value={title} /> {" "}
                    <input id='author' onInput={this.handleFormInput} type='text' placeholder='Author' value={author} disabled />
                    <br />
                    <br />
                    <textarea rows="40" cols="90" id='noteBody' onInput={this.handleFormInput} value={noteBody} >

                    </textarea>
                    <br />
                    <br />
                    <button onClick={this.handleSubmit}>Submit</button> <Link to={`/notes/${id}`}> <button>Cancel</button> </Link>
                    <p>{message}</p>
                    {message === 'Post Update successful' ? <Redirect to='/notes' /> : null}
                </form>
                </div>
            </div>
        )
    }
}


export default NewNote;