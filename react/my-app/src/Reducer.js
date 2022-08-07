function Reducer(state = false, action) {
    switch (action.type) {
        case "edit":
            return state=action.payload
        // case "REMOVE":
        //     let indexUser = state.findIndex(x => x.name == action.payload.name && x.price == action.payload.price)
        //     state.splice(indexUser, 1)
        //     return [...state]
        
        default: return state
    }
}
export default Reducer