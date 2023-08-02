export default(state,action) => {
    switch(action.type){
        case "DETAILS":
            return{
                ...state,
                details: [ action.payload],
            };
        default:
            return state;

    }
};