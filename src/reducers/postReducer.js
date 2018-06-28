//reducer takes the current state and a dispatched action 
const postReducer = (state = [], action) => {
    switch(action.type) {
        //whenever the 'ADD_POST' event happens we want to push some data into the state array
        //action data is an object with out post title and post message
        case 'ADD_POST':
            return state.concat([action.data]);
        case 'DELETE_POST':
            return state.filter((post)=>post.id !== action.id);
        //loop over each item and then check the id of the post if match the return a new object but change the value of the editing to true if false return object as it was
        case 'EDIT_POST':
            return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
        //default value incase none of the action.type value matches any of the cases we simpley return the state.
        default:
            return state;
    }
}

export default postReducer;