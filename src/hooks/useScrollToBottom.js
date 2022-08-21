import { useEffect, useRef } from "react";

function useScrollToBottom({ chatLength, userTyping, autoTyping }) {
  let bottomRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [chatLength, userTyping, autoTyping]);

  return bottomRef;
}

export default useScrollToBottom;
