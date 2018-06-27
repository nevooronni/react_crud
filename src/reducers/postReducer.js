//reducer takes the current state and a dispatched action 
const postReducer = (state = [], action) => {
    switch(action.type) {
        //whenever the 'ADD_POST' event happens we want to push some data into the state array
        //action data is an object with out post title and post message
        case 'ADD_POST':
            return state.concat([action.data]);
        //default value incase none of the action.type value matches any of the cases we simpley return the state.
        default:
            return state;
    }
}

export default postReducer;