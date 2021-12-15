import { useContext } from "react";
import { AppContext } from "../Context/ApplicationContextProvider";

const Header = () => {
  const [isAuth, setIsAuth] = useContext(AppContext);
  return (
    <div>
      This is a navbar!
      <div>
        {isAuth ? (
          <button onClick={() => setIsAuth(false)}>SIGN OUT</button>
        ) : (
          <button onClick={() => setIsAuth(true)}>SIGN IN</button>
        )}
      </div>
    </div>
  );
};
export default Header;
