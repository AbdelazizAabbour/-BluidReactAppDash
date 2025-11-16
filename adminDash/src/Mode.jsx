import React from "react";
import { useEffect, useState } from "react";

export default function Setting() {
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);


  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div>
      <div>
        <div>
          <button onClick={() => setDarkMode(!darkMode)} className="btnaziz">
            {darkMode ? " 🌑 Dark  "  :  " 🌕 White  " }
          </button>
        </div>

      </div>
    </div>
  );
}
