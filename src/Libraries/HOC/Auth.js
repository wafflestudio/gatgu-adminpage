import { Redirect } from "react-router-dom";
import routes from "Libraries/Routes";

export const authOptions = {
  MUST_LOGGED: 1,
  MUST_NOT_LOGGED: 2,
  WHATEVER: 3,
}

// option === true  -> only authenticated
// option === false -> only not auth
// option === null  -> whatever
const Auth = (TargetComponent, option) => {
  const AuthenticateCheck = () => {
    // TODO: change into below
    //   const { logged } = useSelector((state) => state.user);

    const logged = true;

    switch(option) {
      case authOptions.MUST_LOGGED:
        if(!logged) <Redirect to={routes.Login.path} />;
        break;
      case authOptions.MUST_NOT_LOGGED:
        if(logged) return <Redirect to={routes.Users.path} />;
        break;
      case authOptions.WHATEVER:
        break;
      default:
        // cannot reach here
        console.error('CANNOT REACH HERE');
    }
    
    return <TargetComponent />;
  };

  return AuthenticateCheck;
};

export default Auth;