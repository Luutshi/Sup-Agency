const TWITCH_OAUTH_URL = "https://id.twitch.tv/oauth2/authorize"
const CLIENT_ID = "mh3hr4e6vbzwod8hknbldodh0e8ndi";
const REDIRECT_URI = "http://localhost/htdocs/private/";
const RESPONSE_TYPE = "token";
const SCOPES = [
    "bits:read",
    "channel:read:hype_train",
    "channel:read:redemptions",
    "channel:read:subscriptions",
    "user:read:email",
].join(" ")

function encodeQueryString(params) {
    let items = []
    for (let key in params) {
        let value = encodeURIComponent(params[key]);
        items.push(`${key}=${value}`);
    }
    return items.join("&");
}

function twitchAuthentication() {
    const params = {
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        response_type: RESPONSE_TYPE,
        scopes: SCOPES,
    };
    location.href = `${TWITCH_OAUTH_URL}?${encodeQueryString(params)}`;
}

twitchAuthentication();

// GET https://id.twitch.tv/oauth2/authorize
//     ?client_id=<your client ID>
//      &redirect_uri=<your registered redirect URI>
//      &response_type=<type>
//      &scope=<space-separated list of scopes>