const clientID = '3bd2910f94114bb4a10c8ea317eac80d';
const redirectUri = "http://localhost:3000/";

const spotifyUrl = `https://accounts.spotify.com/authorize?response_type=token&scope=playlist-modify-public&client_id=${clientID}&redirect_uri=${redirectUri}`;

let userToken = undefined;
let expiresIn = undefined;
export const Spotify = {
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

    },

    search(term){
        const searchURL = `https://api.spotify.com/v1/search?type=track&q=TERM${term.replace(' ', '%20')}`
        return fetch(searchURL, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        })
        .then(response => response.json)
        .then(jsonResponse => {
            if(!jsonResponse.tracks) return [];
            return jsonResponse.tracks.items.map(track => {
                return {
                    id: track.id,
                    name: track.name,
                    arstist: track.arstist,
                    album: track.album,
                    uri: track.uri
                }
            })
        })
    },
    savePlaylist(name, trackURI){
        if(!name ||!trackURI || trackURI.length ===0) return;
        const userUrl = 'https://api.spotify.com/v1/me';
        const headers = {
            Authorization: `Bearer ${userToken}`
        };
        let userId = undefined;
        let playlistId = undefined;
        fetch(userUrl, {
            headers: headers
        })
        .then(rensponse => rensponse.json)
        .then(jsonResponse => userId = jsonResponse.id)
        .then(() => {
            const createPlaylistUrl = `https://api.spotify.com/v1/users/${userId}/playlists`;
            fetch(createPlaylistUrl, ({
                method: 'POST',
                headers:headers, 
                body: JSON.stringify({
                    name:name
                })
            }))
                .then(response => response.json)
                .then(jsonResponse => playlistId = jsonResponse.id)
                .then(() => {
                    const addPlaylistTrackUrl = `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`;
                    fetch(addPlaylistTrackUrl, {
                        method: 'POST',
                        headers: headers, 
                        body: JSON.stringify({
                            uris: trackURI
                        })
                    })
                })
        })
    }   
}