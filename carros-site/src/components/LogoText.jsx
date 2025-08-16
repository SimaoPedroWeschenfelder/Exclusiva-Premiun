function LogoText() {
  return (
    <h1 style={styles.logo}>
      Exclusiva <span style={styles.highlight}>Premium</span>
    </h1>
  );
}

const styles = {
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    margin: 0,
    color: "#FFD700",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  highlight: {
    color: "#fff",
    backgroundColor: "#FFD700",
    padding: "0 6px",
    borderRadius: "4px",
  },
};

export default LogoText;
