import React, { useState } from "react";

export const Session = React.createContext();
function SessionContextProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <Session.Provider value={{ user, setUser }}>{children}</Session.Provider>
  );
}

export default SessionContextProvider;
