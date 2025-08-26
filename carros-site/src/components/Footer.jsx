const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Exclusiva Premium. Todos os direitos
        reservados.
      </p>
      <p style={styles.text}>
        Desenvolvido por{" "}
        <a
          href="https://www.instagram.com/simao_wesinfi"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Simao P Wescjenfelder
        </a>
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    width: "100%", // usa 100% do container pai
    backgroundColor: "#111",
    color: "#ccc",
    textAlign: "center",
    padding: "20px 0",
    fontSize: "0.9rem",
    display: "block",
    boxSizing: "border-box",
  },
  text: {
    margin: "4px 0",
  },
  link: {
    color: "#ccc",
    textDecoration: "underline",
    fontWeight: "bold",
  },
};

export default Footer;
