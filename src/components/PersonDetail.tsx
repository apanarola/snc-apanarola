import React, { useCallback, useEffect, useRef, useState } from "react";

import { Person, User } from "@/utils/common/person";
import Alert from "./Alert";
import Skeleton from "./Skeleton";
import Card from "./Card";
import { useAppContext } from "@/context/AppContext";

type PersonPropType = {
  currentPerson: Person | null;
};

const PersonDetail = (props: PersonPropType) => {
  const { currentPerson } = props;

  const { enableLogs, timer } = useAppContext();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | "">("");
  const [personData, setPersonData] = useState<User | null>(null);

  let initialRender = useRef(true);
  let timeAtPersonStateChange = useRef("");

  const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        return "";
      }
      return error.message;
    }
    return String(error);
  };

  const fetchPersonDetail = useCallback(
    async (person: Person | null, signal: any) => {
      if (!person) return;
      setIsLoading(true);
      try {
        const response = await fetch(`/api/person?person=${person}`, {
          signal,
        });
        if (!response.ok) {
          setError("Failed to fetch data");
          setPersonData(null);
        } else {
          const data = await response.json();
          setPersonData(data);
          setError("");
        }
      } catch (error) {
        setError(getErrorMessage(error));
        setPersonData(null);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchPersonDetail(currentPerson, signal);

    return () => {
      setError("");
      setPersonData(null);
      setIsLoading(false);

      //Todo : Uncomment to enable request canceling functionality.
      // controller.abort()
    };
  }, [fetchPersonDetail, currentPerson]);

  useEffect(() => {
    if (!error && personData) {
      timeAtPersonStateChange.current = timer;
    }
  }, [error, personData, timer]);

  //Logs
  useEffect(() => {
    if (enableLogs && personData) {
      console.log(`Current Time : ${timeAtPersonStateChange.current}`);
      console.log(`Person detail : ${JSON.stringify(personData, null, 2)}`);
    }
  }, [enableLogs, personData, timeAtPersonStateChange]);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    }
  }, []);

  return (
    <>
      {!!error && <Alert alertType="error" alertMsg={error} isVisible={true} />}
      {isLoading && <Skeleton />}
      {personData && Object.keys(personData).length && (
        <Card user={personData} />
      )}
    </>
  );
};

export default PersonDetail;
