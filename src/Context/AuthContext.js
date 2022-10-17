import React, { useState, createContext } from "react"; 

export const AuthContext = createContext({
    auth: undefined,
    login: () => {},
    logout: ()=> {}// datos que van a poder acceder todos los componentes
}) // declaramos nuestro contexto e importamos,

// Provaider son todas las acciones que van hacer nuestro conexto, por ejemplo para hacer login y logout

export function AuthProvider(props) { //
    const {children} = props//va recibir todas las funcionalidades como por ejemplo el de NavigationContainer que le da props a todos los otros contenedores como Navigate

    // const {chilren} = props;
    const {auth, setAuth} = useState(undefined);
    const login = (userData) => {
        setAuth(userData)
    }
    const logout = () => {
        setAuth(undefined)
    }

    const valueContext = {
        auth,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
        );
}

