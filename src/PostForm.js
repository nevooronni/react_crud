import React, { Component } from 'react';

class PostForm extends Component {
    //executes when the form is submitted take in the event as argument
    handleSubmit = (e) => {
        e.preventDefault();
        //store form value in variables
        const title = this.getTitle.value;
        const message = this.getMesssage.value;

        //put the values inside an object called data which has an id property set to data
        //important to have this id property as we will use it for updata and delete functionality
        const data = {
            id: new Date(),
            title,
            message
        }
        console.log(data);
    }

    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" ref={(input)=>this.getTitle = input} placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" ref={(input)=>this.getMesssage = input} cols="28" placeholder="Enter Post" /><br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default PostForm;