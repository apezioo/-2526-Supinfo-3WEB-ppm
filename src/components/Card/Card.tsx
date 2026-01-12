import { useState } from "react";
import { useLog } from "../../hooks/useLog";

export const Card = ({ title }: { title: string }) => {
  const [count, setCount] = useState(0);
  const { log } = useLog();

  return (
    <div className="card">
      <h2>{title}</h2>
      <button
        onClick={() =>
          setCount((toto) => {
            log("J'ai mis à jour mon compteur");
            return toto + 1;
          })
        }
      >
        count is {count}
      </button>
    </div>
  );
};
