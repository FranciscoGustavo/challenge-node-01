/* eslint-disable no-console */
const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

//const count = 1;

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, (err, result) => {
  if (err) {
    console.log('[prompt]', err.message);
    return 1;
  }

  if (!result.githubUser) {
    console.log('[Property githubUser is]: ', result.githubUser);
    return 1;
  }
  console.log('[Command-line received data]:', result);
  getDataFromGithub('FranciscoGustavo');
});

prompt.start();
