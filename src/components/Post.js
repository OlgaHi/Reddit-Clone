import React from "react";
import PropTypes from "prop-types";

function Post(props){
  // const postTextStyles = {
  //   display: 'hidden',
  // }

  return (
    <>
      <div onClick={() => props.whenPostClicked(props.id)}>
        <p>{props.upVotes} </p>
        <p>{props.downVotes} </p>
        <p>{props.author} </p>
        <p>{props.postText} </p>
        <p>{props.timestamp}</p>
      </div>
    </>
  );
}

Post.propTypes = {
  postText: PropTypes.string,
  author: PropTypes.string,
  timestamp: PropTypes.string,
  upVotes: PropTypes.string,
  downVotes: PropTypes.string,
  id: PropTypes.string,
};

export default Post;