import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/post-actions'
class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    onSubmit(event) {
        event.preventDefault();
        const posts = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.createPost(posts);
    }
    render() {
        return (
            <div>
                <h1>Add Post form</h1>
                <form onSubmit={this.onSubmit}>
                    <div><label>title</label>
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} /></div>
                    <div><label>body</label>
                        <textarea name="body" onChange={this.onChange} value={this.state.body} /></div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}
export default connect(null, { createPost })(Postform);