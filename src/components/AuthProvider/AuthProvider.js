import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";


export default function AuthProvider({children}) {
    const [user, setUser] = useState({
        pseudo: 'Toto'
    });

    /* async function signin(credentials) {
        const newUser = await login(credentials)
        setUser(newUser)
    }

    async function signout() {
        await logout()
        setUser(null)
    } */

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}