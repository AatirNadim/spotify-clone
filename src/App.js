// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Player from './components/Player'
import { getTokenFromResponse } from './components/spotify';

import SpotifyWebApi from 'spotify-web-api-js';
//supports a bunch of functionalities
const spot = new SpotifyWebApi();
// import 
function App() {
  //runs the code based on some condition
  const [token, setToken] = useState(null) //temporary storage, session storage, all lost while reloading

  useEffect(() => {
    const hash = getTokenFromResponse();
    console.log(hash);
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token) {
      setToken(_token)
      spot.setAccessToken(_token);
      spot.getMe() //returns a promise
      .then((user) => {
        console.log(user);
      })
    }
  }, []);
  // keep the value based on the change of which, we want the useeffect code to run

  return (
    <div className='app'>
      {/* <h2>This is the spotify clone.</h2> */}
      {/* spotify logo */}
      {/* login with spotify button */}
      {token ? <Player/> : <Login/>}
      {/* <Login /> */}
      {/* or sign up */}
    </div>
  );
}

export default App;
