import { useEffect, useRef } from "react";

function useClickOutside(handler) {
  let menuRef = useRef();

  useEffect(() => {
    let runHandler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", runHandler);

    return () => {
      document.removeEventListener("mousedown", runHandler);
    };
  });

  return menuRef;
}

export default useClickOutside;
