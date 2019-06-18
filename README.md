# Post Aggregator

This project creates a Firebase Cloud Function that aggregates blog posts from multiple RSS feeds.

The project uses the [rss-parser npm package](https://www.npmjs.com/package/rss-parser)

In order to use this Firebase Cloud Function in your project you just need to make a POST call to the following endpoint:
[https://us-central1-post-aggregator-bf853.cloudfunctions.net/app/post-aggregator](https://us-central1-post-aggregator-bf853.cloudfunctions.net/app/post-aggregator)

The POST body structure needs to provide an array of itmes like so

```
Item {
  id: number;
  sourceURL: string;
}
```

The POST Body will look like this:
```
PostBody {
  input: Item[] | null;
}
```

## Call the Firebase Cloud Function with Angular HTTPClient

Here's an example code using the Angular HTTPClient:
```
// items following a structure of id and sourceURL as shown above
const items = [];
const postBody = new PostBody();

const exampleItem = {
  id: '0',
  sourceURL: 'https://blog.angularindepth.com/feed'
};

items.push(exampleItem);
postBody.input = this.items;

return this.http.post<Result>(environment.functionURL, postBody);
```

## Result Structure

The result structure that is returned from the Fireabse Cloud Function is as follows:
```
Result {
  sourceURL: string | null;
  sourceName: string | null;
  creator: string | null;
  title: string | null;
  link: string | null;
  pubDate: string | null;
  contentSnippet: string | null;
  categories: string[] | null;
}
```

The fields that are returned correspond to the RSS standard and the fields that are available with the RSS parser.

## Client Application

I also created a client application that lets you interact with a GUI to showcase the Firebase Cloud Function.  Just [go to the hosted url here](https://post-aggregator-805d8.firebaseapp.com/post-aggregator).  Then add a RSS endpoint and when you click "output posts" it calls the Firebase Cloud Function and returns the result formatted (parsed from the JSON).

## Projet Folders
- The main project is just the client application
- The Firebase Cloud Function is available in the `functions` folder

This project is open source with the MIT License.  Feel free to open a PR or Issue if you'd have some improvements or ways to make it better.
