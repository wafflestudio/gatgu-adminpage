import { Redirect } from 'react-router-dom';
import routes from 'libraries/Routes';
import { authOptions } from 'libraries/enum';
import Header from 'components/Common/Header';
import PageSelector from 'components/Common/PageSelector';
import './Auth.scss';
import { useSelector } from 'react-redux';

// USAGE
//     check options in `../enum.js` and use
//     example: `Auth(<YourComponent />, authOptions.WHATEVER)`

const Auth = (TargetComponent, option) => {
  const AuthenticateCheck = () => {
    const logged = useSelector((state) => state.auth.logged.data);

    switch (option) {
      case authOptions.MUST_LOGGED:
        if (!logged) return <Redirect to={routes.Login.path} />;
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
          <div style={{ display: 'flex' }}>
            <PageSelector />
            <section className="page-section">
              <div>
                <TargetComponent />
              </div>
            </section>
          </div>
        </>
      );
    else return <TargetComponent />;
  };

  return AuthenticateCheck;
};

export default Auth;
