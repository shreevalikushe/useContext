import { AppContext } from "../Context/ApplicationContextProvider";
import Form from "./Form";

const { useContext } = require("react");

function Body() {
  const [isAuth] = useContext(AppContext);

  if (isAuth) {
    return (
      <div>
        <div>Hey! Welcome Back</div>
        <div>Would you like to continue with your application </div>
      </div>
    );
  } else {
    return (
      <>
        <div>
          <h3>Please sign in to continue</h3>
        </div>
        <Form />
      </>
    );
  }
}

export default Body;
