import React, { createContext, useContext, useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};
type Context = {
  enableLogs: boolean;
  timer: string;
  toggleEnableLogs: () => void;
};

const AppContext = createContext<Context | null>(null);

export const AppContextProvider = ({ children }: Props) => {
  const [enableLogs, setEnableLogs] = useState(false);
  const [timer, setTimer] = useState("");

  const padStartWithZero = (num: number) => {
    if (Number(num) <= 9) {
      let paddedStr = "0" + num.toString();
      return paddedStr;
    }

    return num;
  };

  const formateDateTime = (date: number) => {
    let givenDate = new Date(date);
    const dateFormate = `${padStartWithZero(givenDate.getDate())}-${padStartWithZero(givenDate.getMonth())}-${padStartWithZero(givenDate.getFullYear())}`;
    const timeFormate = `${padStartWithZero(givenDate.getHours())}:${padStartWithZero(givenDate.getMinutes())}:${padStartWithZero(givenDate.getSeconds())}`;

    return dateFormate + " : " + timeFormate;
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(formateDateTime(Date.now()));
    }, 1000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    setEnableLogs(false);
  }, []);

  const toggleEnableLogs = () => {
    setEnableLogs((current) => !current);
  };

  return (
    <AppContext.Provider value={{ enableLogs, timer, toggleEnableLogs }}>
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
