import React from "react";
import { useState, useEffect } from "react";

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("userProfile");
    if (stored) {
      setFormData(JSON.parse(stored));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userProfile", JSON.stringify(formData));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

 
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "1rem"
    },
    card: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "12px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
      padding: "2rem",
      width: "100%",
      maxWidth: "920px",
      boxSizing: "border-box"
    },
    title: {
      textAlign: "center",
      marginBottom: "1.5rem",
      color: "#ffff",
      fontSize: "1.8rem",
      fontWeight: 600
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    },
    label: {
      fontWeight: 600,
      color: "#ffff",
      marginBottom: "0.25rem"
    },
    input: {
      padding: "0.75rem 1rem",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      transition: "border-color 0.3s ease",
      outline: "none"
    },
    inputFocus: {
      borderColor: "#667eea"
    },
    button: {
      marginTop: "1rem",
      padding: "0.75rem",
      borderRadius: "8px",
      border: "none",
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%",
      color: "#fff",
      fontSize: "1rem",
      fontWeight: 600,
      cursor: "pointer",
      transition: "background-color 0.3s ease"
    },
    buttonHover: {
      backgroundColor: "#5a67d8"
    },
    success: {
      textAlign: "center",
      color: "#38a169",
      fontWeight: 600,
      marginBottom: "1rem"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Profil user</h2>
        {saved && <p style={styles.success}>Informations enregistrées !</p>}
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>Name :</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
            onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />

          <label style={styles.label}>Email :</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
            onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />

          <label style={styles.label}>Phone Number :</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
            onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />

          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
