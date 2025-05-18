import React, { createContext, useState, ReactNode, useEffect } from "react";
interface User {
  name: string;
  email: string;
  photoURL: string;
  displayName: string;
}
type UserContextType= {
  user: User | null; // `user` can be either `User` or `null`
  loginUser: (userData: any) => void;
  logoutUser: () => void; 
}

export const UserContext = createContext<UserContextType | undefined>(undefined);
interface UserProviderProps {
  children: ReactNode;
}
export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState(null); // Store user data here

  // Function to set the user (after sign-in or sign-up)
  const loginUser = (userData: any) => {
    setUser(userData);
    
  };
  

  // Function to log out the user
  const logoutUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loginUser: loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};