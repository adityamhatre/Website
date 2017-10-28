var express = require('express');
var router = express.Router();

/* GET home page. */

const image = {
    'Majhi ST': 'img/majhist.PNG',
    'Viazene': 'img/viazene.png',
    'ISCT Journal': 'img/isctj.png',
    'Zeal 2k15': 'img/zeal2k15.png',
    'Why City?': 'img/whycity.png',
    'Fun The Tap': 'img/ftp.PNG',
    'Zappos App UI': 'img/zappos.png',
    'Shorthorn App': 'img/shorthorn.png'
}

const introduction = {
    'Majhi ST': 'The basic motive behind the app was to make commuting easy for those who use Maharashtra State Transport buses.',
    'Viazene': 'Shopping app from ground up including both backend and frontend',
    'ISCT Journal': 'An international, peer-reviewed, quarterly journal published by PWD Group.',
    'Zeal 2k15': 'College\'s Annual Cultural Fest App on the Play Store',
    'Why City?': 'Trivia app on the etymology of cities across the world.',
    'Fun The Tap': 'Game to count number of taps in 20 seconds',
    'Zappos App UI': 'Android UI Prototype for Zappos Summer Internship Challenge',
    'Shorthorn App': 'Developed an Android App for news feed using Firebase as a backend'
}

const description = {
    'Majhi ST': 'This App has 50,000 - 100,000 installs according to Google Play Store. It provides timetable for public transport buses in almost all districts of the state of Maharashtra in India.<br>The data for the app was collected from the all the district offices of the transport department.',
    'Viazene': 'This App is like Amazon but for women\'s apparel. It also has a backend system for the merchants and admin of the business.<br><br>The app also has a Facebook like feed page where users can upload photos and like, comment, share stuff among other users of the app as well as share the product link to other social media platforms as well.',
    'ISCT Journal': 'This is a website for the ISCT Journal. This journal mainly publishes papers concerning the Radio Frequency Identification (RFID)<br>There is also a system that waas designed from scratch to allow users to upload papers and then the reviewers are assigned to review it.',
    'Zeal 2k15': 'This App was designed for the cultural festival of my undergraduate college. It is essentially a rulebook for all the events and games that were available during the festival.',
    'Why City?': '\"The art and science of asking questions is the source of all knowledge.\" This App is about cities name story. why Delhi is named \"Delhi\"?... So basically this app is about why so n so city is named \"xyz\"?',
    'Fun The Tap': 'This is time pass game which will count the user speed means how many times user can touch the screen in 20 seconds.',
    'Zappos App UI': 'App that takes input from the user as a search query and returns the first item (there could be more than one) and display it as a product page. The app has a floating action button on the screen that does some sort of animation to indicate that something has been added to a cart.',
    'Shorthorn App': 'Shorthorn is the university newspaper of UTA. This was a team project for the course of Software engineering. We followed the material design guideline from Google as a base for our design. The users have the ability to register and login and can post comments on the articles along with sharing the post with thier friends. Also, the posts could be sorted and filtered by categories'
}

const design = {
    'Majhi ST': 'We followed the design from the famous \'m-Indicator\' app on the Play Store. The UI language is mostly in the native language of the state of Maharashtra in India which is Marathi while the navigation in UI is in English<br><br><a href=\'https://drive.google.com/file/d/0B2sJNYvFi3J8cEtkU1hVZXdVdUU/view?usp=sharing\' target=\'_blank\'>Video Demo</a>',
    'Viazene': 'There are other features as well<br><ul><li>Services</li><li>Product Match Maker</li><li>Cart</li><li>Cash on Delivery option</li><li>Book an appointment with service provider</li></ul> <br>App\'s UI is thoroughly based on the Google\'s design principles of the Material Design with fluid animations and ripple effects.<br><br>',
    'ISCT Journal': 'The website was initially a single page scroll website but then later changed to tabular website based on a horizontal menu. Used HTML5 and CSS with jQuery',
    'Zeal 2k15': 'The design is highly graphic intensive with lots of animations and video effects. The UI is in landscape orientation to allow more content on the screen to view.<br><a href=\'https://drive.google.com/open?id=0B2sJNYvFi3J8c2w0c2FFdVhLakE\' target=\'_blank\'>Video demo</a>',
    'Why City?': 'The app was among the first apps to be developed. Hence, the UI is simplistic. It is just a list of cities that when clicked opens a new screen showing the relevant information. Also, some devices may show ads in the bottom section of the app.<br><a href=\'https://drive.google.com/open?id=0B2sJNYvFi3J8M1ItM2NCcFUxb0E\' target=\'_blank\'>Video demo</a>',
    'Fun The Tap': 'This is the first app I ever made ! So the design is not very impressive. It is just a background with red text to show the current number of taps and the time remaining to timeout.',
    'Zappos App UI': 'Followed a modern design pattern. It has animation for the floating action button when some product has been added to cart. Also the product has a transitional animation when it is being added to cart.<br><a href=\'https://drive.google.com/open?id=0B2sJNYvFi3J8TV9RX0o2ZElDZ3c\' target=\'_blank\'>Video demo</a>',
    'Shorthorn App': 'The app has a navigation drawer for menu and list of posts on the home screen. The post can be clicked upon to open new screen with the relevent post being shown as a decriptive text article.'
}


const product = {
    'Majhi ST': 'Download the App in Google Play Store',
    'Viazene': 'View the app showcase video',
    'ISCT Journal': 'View the Website here',
    'Zeal 2k15': 'Download the App in Google Play Store',
    'Why City?': 'Download the App in Google Play Store',
    'Fun The Tap': 'Download the App in Google Play Store',
    'Zappos App UI': 'Download the App here',
    'Shorthorn App': 'View the app showcase video'
}


const link = {
    'Majhi ST': 'https://play.google.com/store/apps/details?id=com.i4infinity.majhist',
    'Viazene': 'https://drive.google.com/open?id=0B2sJNYvFi3J8VV95dm1xeUJFTU0',
    'ISCT Journal': 'http://www.isctjournal.com',
    'Zeal 2k15': 'https://play.google.com/store/apps/details?id=com.adityamhatre.zeal2k15',
    'Why City?': 'https://play.google.com/store/apps/details?id=why.corporatecoders.why_city',
    'Fun The Tap': 'https://play.google.com/store/apps/details?id=com.fun.taptap',
    'Zappos App UI': 'https://drive.google.com/open?id=0B2sJNYvFi3J8UkVfOEhzYnBzX2RZN2taQ01ISkZmMEdpN3lv',
    'Shorthorn App': 'https://drive.google.com/open?id=0B2sJNYvFi3J8WXVBbFRqbkpmem8'
}
router.get('/', function(req, res, next) {
    console.log("req");
    res.render('index', { title: 'Aditya Mhatre' });
});

router.get('/portfolio/:app', (req, res, next) => {
    const app = req.params.app
    res.render('portfolio-page', {
        title: app,
        introduction: introduction[app],
        description: description[app],
        design: design[app],
        img: image[app],
        product: product[app],
        link: link[app]
    });
});

module.exports = router;