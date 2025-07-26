//1st way to create context in two files

import { createContext, useContext } from "react";

export const userContext = createContext('anonymous')
export const UserContextProvider = userContext.Provider
export const useUserContext = () => useContext(userContext)