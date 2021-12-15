import { useContext } from "react";
import { AppContext } from "../Context/ApplicationContextProvider";
import { ThemeContext } from "../Context/ThemeContextProvider";
import Navbar from "./Navbar";

const Header = () => {
  const [isAuth, setIsAuth] = useContext(AppContext);
  const [{ theme }, toggleTheme] = useContext(ThemeContext);
  return (
    <div>
      <Navbar />
      <div>
        <div style={{ margin: "1rem" }}>
          <button onClick={toggleTheme}>Toggle to {theme}</button>
        </div>
        {isAuth ? (
          <button style={{ margin: "1rem" }} onClick={() => setIsAuth(false)}>
            SIGN OUT
          </button>
        ) : (
          <button style={{ margin: "1rem" }} onClick={() => setIsAuth(true)}>
            SIGN IN
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
