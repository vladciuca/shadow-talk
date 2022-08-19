import { useEffect, useRef } from "react";

function useScrollToBottom(trigger) {
  let bottomRef = useRef();

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, trigger);

  return bottomRef;
}

export default useScrollToBottom;
