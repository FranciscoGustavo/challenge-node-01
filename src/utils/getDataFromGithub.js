const puppeteer = require('puppeteer');
const getTime = require('./getTime');
//const postToSlack = require('./postToSlack');

const getDataFromGithub = async (githubUser) => {
  try {
    console.log('Launch Puppeteer');
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();

    const githubUrl = `https://github.com/${githubUser}`;
    const path = `src/images/${getTime()}-${githubUser}.png`;

    await page.goto(githubUrl);
    await page.screenshot({ path });

    const githubCounter = await page.evaluate(() => document.getElementsByClassName('Counter')[0].innerText);
    const githubUserPhoto = await page.evaluate(() => document.getElementsByClassName('avatar-before-user-status')[0].src);
    console.log(githubUser, githubUserPhoto, githubCounter);
    //postToSlack(githubUser, githubUserPhoto, githubCounter);
    await browser.close();
  } catch (error) {
    console.log('\n\n\n\n\n[ERROR]', error.message);
    console.log('\n\n\n\n\n[STACK]', error.stack);
  }
};

module.exports = getDataFromGithub;
