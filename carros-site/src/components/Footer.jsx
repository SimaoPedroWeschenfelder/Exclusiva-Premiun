const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Exclusiva Premium. Todos os direitos
        reservados.
      </p>
      <p style={styles.text}>Desenvolvido por Simao 🚀</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#111",
    color: "#ccc",
    textAlign: "center",
    padding: "20px",
    marginTop: "40px",
    fontSize: "0.9rem",
  },
  text: {
    margin: "4px 0",
  },
};

export default Footer;
