import { FunctionComponent, PropsWithChildren, useState } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";

import Button from "@/components/Button";
import { Person } from "@/utils/common/person";
import { useAppContext } from "@/context/AppContext";
import PersonDetail from "@/components/PersonDetail";
import ToggleLogs from "@/components/Toggle";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  const { enableLogs, toggleEnableLogs, timer } = useAppContext();

  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const handleSelectPerson = (person: Person) => {
    setSelectedPerson(person);
  };

  return (
    <main
      className={classNames(
        inter.className,
        "min-h-screen w-screen",
        "flex flex-col items-center",
      )}
    >
      <div className={classNames("flex gap-2 mt-9")}>
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
      <div className="my-auto">
        <PersonDetail currentPerson={selectedPerson} key={selectedPerson} />
      </div>
      <div className="absolute bottom-0 right-0 p-4 text-slate-500 font-normal flex gap-2 justify-between w-full text-sm">
        <div>{timer}</div>
        <ToggleLogs
          handleToggle={toggleEnableLogs}
          isToggled={enableLogs}
          toggleText={enableLogs ? "Hide Logs" : "Show Logs"}
        />
      </div>
    </main>
  );
};
