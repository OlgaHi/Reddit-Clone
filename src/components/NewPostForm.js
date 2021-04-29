import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewPostForm(props) {

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    const time = new Date();
    props.onNewPostCreation({ 
      upVotes: 0, 
      downVotes: 0, 
      postText: event.target.postText.value, 
      author: event.target.author.value, 
      timestamp: time, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          author='author'
          placeholder='Author'/>
        <textarea
          postText='postText'
          placeholder='Your post is here'/>
       
        <button type='submit'></button>
      </form>
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func,
}

export default NewPostForm;