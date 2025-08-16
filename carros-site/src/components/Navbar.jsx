import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header style={styles.header}>
        <div style={styles.inner}>
          <div style={styles.title}>
            E<span style={styles.xHighlight}>X</span>clusiva Premium
          </div>

          {/* Ícone animado */}
          <div style={styles.menuIcon} onClick={toggleMenu}>
            <motion.div
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              style={styles.bar}
            />
            <motion.div
              animate={{ opacity: menuOpen ? 0 : 1 }}
              style={styles.bar}
            />
            <motion.div
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              style={styles.bar}
            />
          </div>
        </div>
      </header>

      {/* Menu lateral animado */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={styles.sideMenu}
      >
        <ul style={styles.menuList}>
          <li>
            <Link to="/" onClick={toggleMenu} style={styles.link}>
              🏠 Home
            </Link>
          </li>
          <li>
            <Link to="/conta" onClick={toggleMenu} style={styles.link}>
              👤 contato
            </Link>
          </li>
          <li>
            <span style={{ ...styles.link, opacity: 0.5 }}>
              🚗 Carros (em breve)
            </span>
          </li>
        </ul>
      </motion.div>

      {/* Fundo escurecido */}
      {menuOpen && <div style={styles.overlay} onClick={toggleMenu}></div>}
    </>
  );
};

const styles = {
  header: {
    position: "fixed",
    top: -10,
    left: -13,
    width: "99%",
    height: "5%",
    backgroundColor: "#111",
    color: "#fff",
    padding: "10px 15px",
    zIndex: 1000,
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1px 10px 1px ",
  },
  title: {
    fontSize: "28px",
    fontWeight: "600",
  },
  xHighlight: {
    color: "gold",
    fontSize: "1.4em",
    fontWeight: "bold",
  },
  menuIcon: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer",
  },
  bar: {
    width: "25px",
    height: "3px",
    backgroundColor: "#fff",
    borderRadius: "2px",
  },
  sideMenu: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "250px",
    height: "100vh",
    backgroundColor: "#222",
    color: "#fff",
    zIndex: 999,
    paddingTop: "60px",
  },
  menuList: {
    listStyle: "none",
    padding: "0 20px",
  },
  link: {
    display: "block",
    padding: "15px 0",
    borderBottom: "1px solid #444",
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.1rem",
    transition: "color 0.2s ease",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 998,
  },
};

export default Navbar;
