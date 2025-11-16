import { useEffect, useState } from "react";

export default function Setting() {
  const [darkMode, setDarkMode] = useState(false);

  // Charger la valeur initiale
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  // Appliquer automatiquement le mode sombre
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen p-10 bg-gray-100 dark:bg-[#111] text-black dark:text-white">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow">

        <h2 className="text-2xl font-semibold mb-4">Paramètres</h2>

        <div className="flex items-center justify-between">
          <span className="text-lg">Dark Mode</span>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            {darkMode ? "Désactiver" : "Activer"}
          </button>
        </div>

      </div>
    </div>
  );
}
