import React, { createContext, useContext, useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};
type Context = {
  enableLogs: boolean;
  toggleEnableLogs: () => void;
};

const AppContext = createContext<Context | null>(null);

export const AppContextProvider = ({ children }: Props) => {
  const [enableLogs, setEnableLogs] = useState(false);

  useEffect(() => {
    setEnableLogs(false);
  }, []);

  const toggleEnableLogs = () => {
    setEnableLogs((current) => !current);
  };

  return (
    <AppContext.Provider value={{ enableLogs, toggleEnableLogs }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context)
    throw new Error(
      "AppContext must be called from within the AppContextProvider",
    );

  return context;
};
