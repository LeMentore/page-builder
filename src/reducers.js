import { combineReducers } from 'redux'

const usersState = ['@john_123', '@alex_1989', '@charlie_frye'];
const messagesState = [
    {
        text: 'Hello world!',
        datetime: 1514482558936,
        author: '@charlie_frye'
    },
    {
        text: 'You are ok?',
        datetime: 1514482911427,
        author: '@john_123'
    },
];

const usersReducer = (state = usersState, action) => {
    if( action.type === 'ADD_NEW_USER' ) {
        return state.concat(action.username)
    }
    return state
};

const messagesReducer = (state = messagesState, action) => {
    if( action.type === 'ADD_NEW_MESSAGE' ) {
        return state.concat({
            text: action.text,
            datetime: action.datetime,
            author: action.author
        })
    }
    return state
};

export default combineReducers({usersReducer, messagesReducer});