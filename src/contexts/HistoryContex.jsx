import { nanoid } from 'nanoid';
import { createContext, useContext, useEffect, useState } from 'react';

const HistoryContext = createContext();

export function HistoryProvider({ children }) {
  const [history, setHistory] = useState(() => {
    return JSON.parse(localStorage.getItem('history')) || [];
  });

  function addHistory(data) {
    setHistory((prev) => [
      ...prev,
      {
        id: nanoid(),
        ...data,
        createdAt: new Date() ,
      },
    ]);
  }
  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history));
  }, [history]);

  function clearHistory() {
    setHistory([]);
  }

  return (
    <HistoryContext.Provider value={{ history, addHistory, clearHistory }}>
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  return useContext(HistoryContext);
}
