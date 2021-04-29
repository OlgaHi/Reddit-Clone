export const addPost = (post) => {
  const { names, location, issue, id } = post;
  return {
    type: 'ADD_POST',
    upVotes: upVotes,
    downVotes: downVotes,
    author,
    postText,
    timeStamp
  }
}