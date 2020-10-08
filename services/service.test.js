
const service = require('./service');

test('scrape "nothing" ', () => {
  service.scrapeWebpage({
    body: {
      url: "nothing"
    }
  }).then(
    (result) => {
      expect(result).toEqual(null)
    }
  );
});

test('scrape "https://en.wikipedia.org/wiki/Cristiano_Ronaldo" ', () => {
  service.scrapeWebpage({
    body: {
      url: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo"
    }
  }).then(
    (result) => {
      expect(result).toEqual({
        "pageTitle": "Cristiano Ronaldo - Wikipedia",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
      })
    }
  );
});



test('scrape "https://neilpatel.com/blog/open-graph-meta-tags/" ', () => {
  service.scrapeWebpage({
    body: {
      url: "https://neilpatel.com/blog/open-graph-meta-tags/"
    }
  }).then(
    (result) => {
      expect(result).toEqual({
        "pageTitle": "What You Need to Know About Open Graph Meta Tags for Total Facebook and Twitter Mastery",
        "title": "What You Need to Know About Open Graph Meta Tags for Total Facebook and Twitter Mastery",
        "siteUrl": "https://neilpatel.com/blog/open-graph-meta-tags/",
        "type": "article",
        "description": "It promotes integration between Facebook and other websites by allowing them to become rich graph objects with the same functionality as other Facebook objects.",
        "siteName": "Neil Patel",
        "locale": "en_US",
        "image": "https://neilpatel.com/wp-content/uploads/2014/03/head-html.png"
      })
    });
});