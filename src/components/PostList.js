import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

function PostList(props) {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.postList).map((post) => (
        <Post
          whenPostClicked={props.onPostSelection}
          upVotes={post.upVotes}
          downVotes={post.downVotes}
          author={post.author}
          postText={post.postText}
          timestamp={post.timestamp}
          id={post.id}
          key={post.id}
        />
      ))}
    </React.Fragment>
  );
}


PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;