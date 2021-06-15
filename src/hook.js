import { useState } from "react";

export function useToggle(initArray) {
  const [set, setSet] = useState(new Set(initArray));

  const toggle = (idx) => {
    const newSet = new Set(set);
    if (set.has(idx)) {
      newSet.delete(idx);
    } else {
      newSet.add(idx);
    }
    setSet(newSet);
  }

  return [set, toggle]
}