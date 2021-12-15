function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "4rem",
        textAlign: "center",
        width: "50%",
        margin: "auto"
      }}
    >
      <div>About Us</div>
      <div>Home</div>
      <div>Status</div>
      <div>FAQ</div>
      <div>Contact Us</div>
    </div>
  );
}
export default Navbar;
