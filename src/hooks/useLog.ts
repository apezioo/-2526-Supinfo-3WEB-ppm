import { useState } from "react";

export const useLog = () => {
  const [nbOfLog, setNbOfLog] = useState(0);

  const log = (text: string) => {
    alert(`[#${nbOfLog}] - ${text}`);
    setNbOfLog((count) => count + 1);
  };

  return { log };
};
