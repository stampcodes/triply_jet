import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src=".\logo.png" alt="logo" />
      <h1 className={styles.slogan}>Where Journeys Begin</h1>
      <w3m-button />
    </nav>
  );
};

export default Navbar;
