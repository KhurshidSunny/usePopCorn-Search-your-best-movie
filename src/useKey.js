import { useState, useEffect } from "react";

export function useKey(key, action) {
  // handle keypress hook (closing with escape button)
  useEffect(
    function () {
      function callBack(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
          console.log("CLOSING");
        }
      }
      document.addEventListener("keydown", callBack);

      // clean up
      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [action, key]
  );
}
