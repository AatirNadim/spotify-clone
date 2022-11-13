export const initialState = {
    user : null, 
    playlists : [],
    playing : false,
    item : null,
    token : null,   
};
// dispatch an action, based on the action, on the current state    
const reducer = (state, action) => {
    // console.log(action);
    switch(action.type) {
        case 'SET_USER' : 
        console.log(action);
        return { //return the new state, after dispatching the action
            ...state,  //appending onto the original state
            user : action.user, //user defined in the initial state
        }
        case 'SET_TOKEN' :
            return {
                ...state,
                token : action.token,
            };
        case 'SET_PLAYLISTS' :
            return {
                ...state,
                playlists : action.playlists,   
            };
        default :
        return state;
    }
};

export default reducer;