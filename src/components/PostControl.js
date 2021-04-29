import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class PostControl extends React.Componet {
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null 
    };
  }

  handleClick = () => {
    // if (this.state.selectedPost != null) {
    //   this.setState({
    //     selectedPost: null
    //   });
    // } else {
      const { dispatch } = this.props;
      const action = a.toggleForm()
      dispatch(action);
    // }
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const action = a.addPost(newPost);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />;
      buttonText = "Return to Post List";
    } else {
      currentlyVisibleState = <PostList postList={this.props.masterPostList}/>;
      buttonText = "Add Post";
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </ React.Fragment>
    );
  }
}

export default PostControl;