export const USER = 'USER';

const API_URL = 'Endopoints de luis/'

export function allCountries() {
    return async (dispatch) => {
        await axios.get(`${API_URL}`)
        .then(result => {
            return dispatch({
                type: All_USER,
                payload: result.data // action.payload es la informacion que devuelvo aca
            })
        })
    }
}