import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
class NewNote extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            noteBody: '',
            message: ''
        }
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
            noteBody
        } = this.state;
        axios
        .post('/notesapi/newNote', {
            title: title,
            author: author,
            noteBody: noteBody
        })
        .then(res =>{
            this.setState({
                title: '',
                author: '',
                noteBody: '',
                message: 'Post successful'
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
            message
        } = this.state;
        return (
            <div style={{position: 'relative', margin: "auto", top: 0, left: 0, right: 0, bottom: 0}} >
                <h1>New Note</h1>
                <div style={{margin: '0 auto', position: 'relative', width: '50vw', left: '0'} }>
                <form onSubmit={this.handleSubmit}>
                    <input id='title' onInput={this.handleFormInput} type='text' placeholder='Title' value={title} /> {" "}
                    <input id='author' onInput={this.handleFormInput} type='text' placeholder='Author' value={author} />
                    <br />
                    <br />
                    <textarea rows="40" cols="90" id='noteBody' onInput={this.handleFormInput} value={noteBody} >

                    </textarea>
                    <br />
                    <br />
                    <button onClick={this.handleSubmit}>Submit</button>
                    <p>{message}</p>
                    {message === 'Post successful' ? <Redirect to='/notes' /> : null}
                </form>
                </div>
            </div>
        )
    }
}


export default NewNote;