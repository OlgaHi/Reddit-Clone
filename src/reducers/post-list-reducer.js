import * as c from './../actions/ActionTypes';


export default (state = {}, action) => {
  const { upVotes, downVotes, author, postText, timeStamp } = action;
  switch (action.type) {
  case c.ADD_POST:
    return Object.assign({}, state, {
      [id]: {
        upVotes: upVotes,
        downVotes: downVotes,
        author,
        postText,
        timeStamp
      }
    });
  }
}