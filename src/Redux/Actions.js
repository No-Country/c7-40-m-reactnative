export const USER = 'USER';
export const LOGIN = 'LOGIN';

const API_URL = 'Endopoints de luis/'

export function Login(data) {
    return async (dispatch) => {
        await axios.post('https://tester-server-production.up.railway.app/api/v1/users/login', data)
        .then(result => {
            return dispatch({
                type: LOGIN,
                payload: result.data // action.payload es la informacion que devuelvo aca
            })
        })
    }
}