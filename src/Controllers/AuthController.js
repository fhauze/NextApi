import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

// Redirect user to Google's OAuth 2.0 server
export const googleLogin = (req, res) => {
    const scopes = ['https://www.googleapis.com/auth/userinfo.profile'];
    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
    });
    res.redirect(url);
};

// Handle the callback after Google has authenticated the user
export const googleCallback = async (req, res) => {
    const { code } = req.query;
    if (!code) {
        return res.status(400).send('Missing code parameter');
    }

    try {
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);

        // Get user info
        const oauth2 = google.oauth2({
            auth: oauth2Client,
            version: 'v2',
        });
        
        const userInfo = await oauth2.userinfo.get();
        res.json(userInfo.data);
        console.log(userInfo.data);
    } catch (error) {
        console.error('Error during Google Authentication:', error);
        res.status(500).json({ error: 'Authentication failed' });
    }
};
