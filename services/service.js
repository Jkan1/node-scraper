

const axios = require("axios");
const cheerio = require("cheerio");

exports.scrapeWebpage = scrapeWebpage;

async function scrapeWebpage(url) {
    try {

        const result = await axios.get(url);
        if (!result || !result.data) {
            return null;
        }
        let $ = cheerio.load(result.data);
        if (!$) {
            return null;
        }
        let pageTitle = $('title').text();
        let title = $("meta[property='og:title']").attr("content");
        let siteUrl = $("meta[property='og:url']").attr("content");
        let type = $("meta[property='og:type']").attr("content");
        let description = $("meta[property='og:description']").attr("content");
        let siteName = $("meta[property='og:site_name']").attr("content");
        let locale = $("meta[property='og:locale']").attr("content");
        let image = $("meta[property='og:image']").attr("content");

        return {
            pageTitle,
            title,
            siteUrl,
            type,
            description,
            siteName,
            locale,
            image
        };

    } catch (error) {
        logger.error(error);
        return null;
    }
}
