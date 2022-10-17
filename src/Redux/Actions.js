import axios from "axios";
export const DATA = 'DATA'
export const USER = 'USER';
export const LOGIN_INFO = 'LOGIN_INFO';

const API_URL = 'Endopoints de luis/'

export function LoginData(data) {
    return  (dispatch) => {
         axios.post('https://tester-server-production.up.railway.app/api/v1/users/login', data)
        .then(result => {
            return dispatch({
                type: LOGIN_INFO,
                payload: result 
            })
        })
    }
}

export function Data() {
    return(dispatch) => {
        return dispatch({
            type: Data,
            payload: []
        })
    }
}