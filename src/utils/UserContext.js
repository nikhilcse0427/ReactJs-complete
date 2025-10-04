import { createContext } from "react";

const UserContext = createContext({
  name: "Ram",
  address: "Ayodhya"
})

export default UserContext