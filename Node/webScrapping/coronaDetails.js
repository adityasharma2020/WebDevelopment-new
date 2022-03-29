const request = require('request');
const cheerio = require('cheerio');

request('https://www.worldometers.info/coronavirus/', cb);

function cb(err, res, body) {
  if (err) {
    conslole.log('error : ', err);
  } else {
    handleHtml(body);
  }
}

function handleHtml(html) {
  let selectool = cheerio.load(html);
  let coronaStats = selectool('.maincounter-number');
  console.log(coronaStats.text());

  let totalCases = selectool(coronaStats[0]).text();
  console.log("total cases: ==>",totalCases);
}

// const cheerio = require('cheerio');

// let html =
//   `<ul id='fruits'>
//     <li class='apple'>Apple</li>
//     <li class='orange'>Orange</li>
//     <li class='pear'>Pear</li>
//   </ul>`;

// let selctool = cheerio.load(html);
// // console.log(selctool);
// let fruitName = selctool('#fruits');
// console.dir(fruitName);
