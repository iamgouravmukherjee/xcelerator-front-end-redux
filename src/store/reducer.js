const initialState = {
   posts: [
      {
         "_id": {
            "$oid": "5cb4b5d975d9da002472b70b"
         },
         "liked": false,
         "disliked": false,
         "bookmarked": false,
         "userId": 1,
         "id": 1,
         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
         "imageUrl": "https://images.unsplash.com/photo-1504465039710-0f49c0a47eb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
         "__v": 0
      },
      {
         "_id": {
            "$oid": "5cb4b5d975d9da002472b70c"
         },
         "liked": false,
         "disliked": false,
         "bookmarked": false,
         "userId": 1,
         "id": 2,
         "title": "qui est esse",
         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
         "imageUrl": "https://images.unsplash.com/photo-1529243856184-fd5465488984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=769&q=80",
         "__v": 0
      },
      {
         "_id": {
            "$oid": "5cb4b5d975d9da002472b70d"
         },
         "liked": false,
         "disliked": false,
         "bookmarked": false,
         "userId": 1,
         "id": 3,
         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
         "imageUrl": "https://images.unsplash.com/photo-1519127008657-d552258f18d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
         "__v": 0
      },
      {
         "_id": {
            "$oid": "5cb4b5d975d9da002472b70e"
         },
         "liked": false,
         "disliked": false,
         "bookmarked": false,
         "userId": 1,
         "id": 4,
         "title": "eum et est occaecati",
         "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
         "imageUrl": "https://images.unsplash.com/photo-1519127008657-d552258f18d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
         "__v": 0
      },
      {
         "_id": {
            "$oid": "5cb4b5d975d9da002472b70f"
         },
         "liked": false,
         "disliked": false,
         "bookmarked": false,
         "userId": 1,
         "id": 5,
         "title": "nesciunt quas odio",
         "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
         "imageUrl": "https://images.unsplash.com/photo-1504465039710-0f49c0a47eb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
         "__v": 0
      }
   ]
}
const reducer = (state = initialState, action) => {
   let posts = [];
   switch (action.type) {
      case "toggleLike":
         posts = state.posts.map(post => {
            return post.id === action.id ? {...post, liked: !post.liked, disliked: false}: post;
         });
         return {posts};
      case "toggleDisLike": 
         posts = state.posts.map(post => {
            return post.id === action.id ? {...post, disliked: !post.disliked, liked: false}: post;
         });
         return {posts}
      case "bookmarkPost":
         posts = state.posts.map(post => {
            return post.id === action.id ? { ...post, bookmarked: !post.bookmarked } : post;
         });
         return { posts }
      default:
         return state;
   }
}

export default reducer;