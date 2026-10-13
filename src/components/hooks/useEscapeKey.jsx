import React from "react";

function useEscapeKey(clearAll) {
  React.useEffect(() => {
    function handleKeydown(eve) {
      if (eve.code === "Escape") {
        clearAll();
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);
}

export default useEscapeKey;
