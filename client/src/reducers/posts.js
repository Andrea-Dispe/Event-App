const reducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    case "UPDATE":
      // remember the action.payload is the updated post
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);
    default:
      return posts;
  }
};

export default reducer;