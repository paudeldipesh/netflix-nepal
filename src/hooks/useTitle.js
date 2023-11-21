import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `Netflix | ${title}`;
  }, [title]);

  return null;
};
