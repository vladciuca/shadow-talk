import { useEffect, useRef } from "react";

function useScrollToBottom(triggerElement) {
  let bottomRef = useRef();

  useEffect(
    () => bottomRef.current.scrollIntoView({ behavior: "smooth" }),
    [triggerElement]
  );

  return bottomRef;
}

export default useScrollToBottom;
