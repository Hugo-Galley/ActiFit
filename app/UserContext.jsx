import React, { createContext, useContext, useState } from 'react';

// Créer le contexte
const UserContext = createContext();

// Créer le Provider du contexte
export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);
    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook pour utiliser le contexte
export const useUser = () => {
    return useContext(UserContext);
};
