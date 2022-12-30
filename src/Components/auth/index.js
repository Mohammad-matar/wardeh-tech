import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const authorizationToken = () => {
        var token = localStorage.getItem("token");
        if (token) {
            return token
        } else return false
    };
    const login = (token) => {
        localStorage.setItem("token", token);
    }

    const logout = () => {
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{ user, login, logout, authorizationToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}