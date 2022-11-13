export const authEndpoint = 'https://accounts.spotify.com/authorize'

const clientID = '787db845920b4ca0b01586a92bb6c161'

const redirectUri = 'http://localhost:3000/'
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  ];

export const getTokenFromResponse = () => {
    console.log(window.location.hash)
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((prev, curr) => {
        let val = curr.split('=');
        prev[val[0]] = decodeURIComponent(val[1]);
        return prev;
    }, {});

}


  export const loginUri = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
