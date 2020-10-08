

const axios = require("axios");
const cheerio = require("cheerio");

exports.scrapeService = scrapeService;

async function scrapeService(url) {
    try {

        const result = await axios.get(url);
        if (!result || !result.data) {
            return null;
        }
        return cheerio.load(result.data);

    } catch (error) {
        logger.error(error);
        return null;
    }
}
