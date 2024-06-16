import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage"

const useAuth = () =>{
    const [getLocalStorage ] = useLocalStorage("user");
    const [isLoggedin , setIsLoggoedin] = useState(getLocalStorage?.token?.length === 100 ?true:false);
    return [isLoggedin,setIsLoggoedin];
}

export default useAuth;