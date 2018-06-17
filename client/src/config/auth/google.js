import SERVER_URI from '../server';

const google = {};
google.start = `${SERVER_URI}/auth/google/start`;
google.redirect = `${SERVER_URI}/auth/google/redirect`;

export default google;
