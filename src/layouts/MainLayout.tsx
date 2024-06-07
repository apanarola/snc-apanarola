import {
  FunctionComponent,
  MouseEventHandler,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";

import { Button } from "@/components/Button";
import { Person, User } from "@/utils/common/person";
import { useAppContext } from "@/context/AppContext";
import Alert from "@/components/Alert";
import Skeleton from "@/components/Skeleton";
import Card from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

const BASE_URL = "http://localhost:3001";

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  const { enableLogs } = useAppContext();

  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | "">("");
  const [personData, setPersonData] = useState<User | null>(null);

  const handleSelectPerson = (person: Person) => {
    setSelectedPerson(person);
  };

  const fetchPersonDetail: (person: Person) => void = async (
    person: Person,
  ) => {
    setIsLoading(true);
    const response = await fetch(`/api/person?person=${person}`);
    if (!response.ok) {
      setError("Failed to fetch data");
      setPersonData(null);
    } else {
      const data = await response.json();
      setPersonData(data);
      setError("");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!selectedPerson) return;
    setError("");
    setPersonData(null);
    fetchPersonDetail(selectedPerson);
  }, [selectedPerson]);

  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col items-center",
      )}
    >
      <div className={classNames("flex gap-2 mt-2")}>
        {Object.values(Person).map((person) => (
          <Button
            key={person}
            clickHandler={() => handleSelectPerson(person)}
            isSelected={selectedPerson === person}
          >
            {person}
          </Button>
        ))}
        <button />
      </div>
      <div className="mt-4">
        {isLoading && <Skeleton />}

        {personData && Object.keys(personData).length && (
          <Card user={personData} />
        )}
      </div>
      {!!error && <Alert alertType="error" alertMsg={error} isVisible={true} />}
    </main>
  );
};
