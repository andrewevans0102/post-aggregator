const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));
const Parser = require('rss-parser');
const parser = new Parser();

app.post('/post-aggregator', (req, res) => {
    (async () => {
        const output = [];
        let input = req.body.input;
        const promises = [];
        let i;
        let errorMessage = '';
        for (i = 0; i < input.length; i++) {
          promises.push(callRSS(input[i], output));
        }

        try {
          await Promise.all(promises);
        } catch (error) {
          errorMessage = error.message;
        }

        let foundOutput = {
          postResult: output,
          error: errorMessage
        };

        res.status(200).send(foundOutput);
      })();
});

function formatDate(input) {
    const inputDate = new Date(input);
    return inputDate.toLocaleDateString('en-us') + ' at ' + inputDate.toLocaleTimeString('en-us');
}

function callRSS(input, output) {
  return parser.parseURL(input.sourceURL).then((feedOutput) => {
    feedOutput.items.forEach(item => {
      const publishDate = formatDate(item.pubDate);
      const outputItem = {
          sourceURL: input.sourceURL,
          creator: item.creator,
          title: item.title,
          link: item.link,
          pubDate: publishDate,
          contentSnippet: item.contentSnippet,
          categories: item.categories
      };
      output.push(outputItem);
    });
  });
}

exports.app = functions.https.onRequest(app);
