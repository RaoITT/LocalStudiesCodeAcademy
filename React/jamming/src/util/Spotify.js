const clientID = '3bd2910f94114bb4a10c8ea317eac80d';
const redirectUri = "http://localhost:3000/";

const spotifyUrl = `https://accounts.spotify.com/authorize?response_type=token&scope=playlist-modify-public&client_id=${clientID}&redirect_uri=${redirectUri}`;

let userToken = undefined;
let expiresIn = undefined;
const Spotify = {
    getAccessToken() {
        if(userToken){
            return userToken;
        }
        const urlAccessToken =  window.location.href.match(/access_token=([^&]*)/);
        const urlExpiresIn = window.location.href.match(/access_token=([^&]*)/);
        if(urlAccessToken && urlExpiresIn){
            userToken = urlAccessToken[1];
            expiresIn = urlExpiresIn[1];
            window.setTimeout(()=> userToken = '', expiresIn* 1000);
            window.history.pushState('Access Token', null, '/')
        } else {
            window.location = spotifyUrl;
        }

    }
}

export default Spotify;