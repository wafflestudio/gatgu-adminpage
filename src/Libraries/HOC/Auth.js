import { Redirect } from 'react-router-dom';
import routes from 'Libraries/Routes';
import { authOptions } from 'Libraries/enum';
import Header from 'Components/Header';

// USAGE
//     check options in `../enum.js` and use
//     example: `Auth(<YourComponent />, authOptions.WHATEVER)`

const Auth = (TargetComponent, option) => {
  const AuthenticateCheck = () => {
    // TODO: @woohm402
    //   todo: change into below
    //       const { logged } = useSelector((state) => state.user);
    //   when: redux 짜지면

    const logged = true;

    switch (option) {
      case authOptions.MUST_LOGGED:
        if (!logged) <Redirect to={routes.Login.path} />;
        break;
      case authOptions.MUST_NOT_LOGGED:
        if (logged) return <Redirect to={routes.Users.path} />;
        break;
      case authOptions.WHATEVER:
        break;
      default:
        // cannot reach here
        console.error('CANNOT REACH HERE');
    }

    if (logged)
      return (
        <>
          <Header />
          <TargetComponent />
        </>
      );
    else return <TargetComponent />;
  };

  return AuthenticateCheck;
};

export default Auth;
