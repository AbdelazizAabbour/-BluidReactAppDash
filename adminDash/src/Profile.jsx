import { useState, useEffect } from "react";

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [saved, setSaved] = useState(false);

  // Charger les données depuis localStorage au début
  useEffect(() => {
    const stored = localStorage.getItem("userProfile");
    if (stored) {
      setFormData(JSON.parse(stored));
    }
  }, []);

  // Gestion des inputs contrôlés
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Sauvegarde du profil
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userProfile", JSON.stringify(formData));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen p-5 flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">

        <h2 className="text-2xl font-bold mb-4">Profil utilisateur</h2>

        {saved && (
          <p className="mb-4 p-2 bg-green-100 text-green-800 rounded">
            ✔ Informations enregistrées !
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <label className="block font-semibold mb-1">Nom complet :</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
            required
          />

          <label className="block font-semibold mb-1">Email :</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
            required
          />

          <label className="block font-semibold mb-1">Téléphone :</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg mt-2"
          >
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
}
