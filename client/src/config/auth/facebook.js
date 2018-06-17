import SERVER_URI from '../server';

const facebook = {};
facebook.start = `${SERVER_URI}/auth/facebook/start`;
facebook.redirect = `${SERVER_URI}/auth/facebook/redirect`;

export default facebook;
