import {Router} from 'express';
// import { authenticateToken } from '../../middleware/auth';

const router = Router();

const baseURL = 'https://api.kinocheck.com/trailers';
const apiKey = 'YOUR_API_KEY';

fetch(baseURL, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Api-Key': apiKey,
        'X-Api-Host': 'api.kinocheck.com'
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
})
.then(data => {
    console.log('Success:', data);
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});

export default router;
