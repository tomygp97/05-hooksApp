import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {

    // const user = {
    //     id: 123,
    //     name: "Tomas Gutierrez",
    //     email: "tomygp16@gmail.com",
    // }

    const [user, setUser] = useState();



  return (
    <UserContext.Provider value={{ user, setUser }}>

        { children }

    </UserContext.Provider>
  )
}
