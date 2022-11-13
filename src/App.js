// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Player from './components/Player'
import { getTokenFromResponse } from './components/spotify';
import { useStateValue } from './components/Stateprovider';
import SpotifyWebApi from 'spotify-web-api-js';
//supports a bunch of functionalities
const spot = new SpotifyWebApi();
// import 
function App() {
  //runs the code based on some condition
  // const [token, setToken] = useState(null) //temporary storage, session storage, all lost while reloading
  const [{user: globalUser, token}, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    console.log({desc : 'hash value', hash});
    window.location.hash = "";
    const _token = hash.access_token;     
    if(_token) {
      // setToken(_token)
      spot.setAccessToken(_token);
      dispatch({
        type : 'SET_TOKEN',
        token : _token,
      })
      spot.getMe() //returns a promise
      .then((user) => {
        // console.log(user);
        dispatch ({
          type : 'SET_USER',
          user : user, 
        })
      })
      .catch(err => {
        alert('An error has occured. Please try again later or contact the service provider if the issue persists');
        console.error(err);
      })
    }
  }, []);

  useEffect(()=>{
    // console.log({globalUser})
  },[globalUser])
  useEffect(() => {
    // console.log({token})
  }, [token])
  // keep the value based on the change of which, we want the useeffect code to run

  return (
    <div className='app'>
      {/* <h2>This is the spotify clone.</h2> */}
      {/* spotify logo */}
      {/* login with spotify button */}
      {token ? <Player spotify = {spot}/> : <Login/>}
      {/* <Login /> */}
      {/* or sign up */}
    </div>
  );
}

export default App;
