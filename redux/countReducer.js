
const Counter = {
    count: 0
}

function reducer(state = Counter, action) {
    switch (action.type) {
        case "ADD":
            const Addtemp = state.count
            return state = {
                count: Addtemp + 1
            }
        case "DEL":
            const Deltemp = state.count
            if (state.count > 0) {
                return state = {
                    count: Deltemp - 1
                }
            }
            return state = {
                count: 0
            }
        case "RESET":
            return state = {
                count: 0
            }
        default:
            return state;
    }
}


export default reducer;