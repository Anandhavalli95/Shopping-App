import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import * as firebase from 'firebase';
import { AuthContext } from '../App/index';
import { LoginWrapper } from './Wrapper';
import GoogleLogo from '../../images/GoogleLogo.svg';

export function Login({ history }) {
  const Auth = useContext(AuthContext);
  const [error, setErrors] = useState('');
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            console.log(result);
            history.push('/products');
            Auth.setLoggedIn(true);
          })
          .catch(e => setErrors(e.message));
      });
  };
  return (
    <div className="login-wrapper">
      <LoginWrapper>
        <div className="login-container">
          <div>
            <button type="button" className="button" onClick={signInWithGoogle}>
              <img
                src={GoogleLogo}
                width="18px"
                height="18px"
                style={{ margin: '0px 10px 0 0' }}
                alt=""
              />
              <span>Login with Google</span>
            </button>
            <span>{error}</span>
          </div>
        </div>
      </LoginWrapper>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Login);
