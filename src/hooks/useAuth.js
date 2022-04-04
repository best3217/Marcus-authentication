import { useContext } from "react";
//
import { AuthContext } from "../context/ContextProvider";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("Auth context must be inside AuthProvider");
  return context;
};

export default useAuth;
