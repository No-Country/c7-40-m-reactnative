import { DATA, LOGIN_INFO } from "../Actions";

const inicialState = {
    users:[],
   
}

const DataUserReducer = (state = inicialState, action) => {
    switch (action.type) {
        case LOGIN_INFO:
            return {
                ...state,
            }

        case DATA:
            return {
                ...state,
            }
        default:
            return{
                ...state
            }
            
    }
}

export default DataUserReducer;