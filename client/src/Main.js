import React, { useContext } from 'react';
import App from './views/App';
import Profile from './views/Profile';

import { Route, BrowserRouter as Router, Link, Redirect, Switch } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { AuthContext } from './contexts/AuthContextProvider';
import { MyContext } from './contexts/MyContextProvider';
import { ProfileImage } from './styled-components/ProfileImage';
import { config } from './url_config'
const url = config.url.API_URL


function Main() {
  const authContext = useContext(AuthContext);
  const context = useContext(MyContext);

  const logout = () => {
    authContext.setIsAuthenticated(false);
    authContext.setUser(null);
    authContext.setJwToken(null);
    context.setMode('explore');
  };

  const facebookResponse = (response) => {
    // store data in local storage

    const options = {
      method: 'POST',
      body: `access_token=${response.accessToken}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      mode: 'cors',
      cache: 'default'
    };

    fetch(url + '/api/auth/facebook', options) 
      .then(r => {
        const token = r.headers.get('x-auth-token');
        r.json().then(user => {
          if (token) {
            authContext.setIsAuthenticated(true);
            authContext.setUser(user._id);
            authContext.setJwToken(token);
            authContext.setPicture(user.photoUrl);
          }
        });
      })
      
  }
  const profileLink = authContext.picture ?
  <ProfileImage src={authContext.picture} alt="Profile" /> : 'Profile';

  return (
    
      <Router basename={process.env.PUBLIC_URL}>
        <nav className="navbar navbar-dark bg-dark">
          
           <Link to='/location'><h1 className="text-light title">
             Tently
           </h1></Link> 
            
          
          {authContext.isAuthenticated ?
          <div>
            <button onClick={logout} className="button">
              Log out
            </button>
             <Link to='/profile'>{profileLink}</Link>
          </div>
            :
            <FacebookLogin
              appId={config.app_id.FACEBOOK_APPID}
              autoLoad={true}
              fields="name,email,picture"
              callback={facebookResponse} />
          }
       
        </nav>
        {/* <Geo></Geo> */}

        <Switch>
          <Route path="/location" component={App} />
          <Route exact path="/">
            <Redirect to="/location"></Redirect>
          </Route>
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
  );
}

export default Main;
