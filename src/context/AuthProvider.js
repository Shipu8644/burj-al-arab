import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    const allfirebase = useFirebase();
    return (
        <AuthContext.Provider value={allfirebase}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;