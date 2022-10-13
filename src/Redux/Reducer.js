import { LOGIN } from "./Actions";

const inicialState = {
    users:[]
}

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                users: action.payload
            }
        default:
            return{
                ...state
            }
            
    }
}

export default rootReducer;