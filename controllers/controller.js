
const service = require('../services/service');
const constants = require('../constants/constants');

exports.scrape = scrape;

async function scrape(req, res) {
  try {
    let url = req.body.url;
    let $ = await service.scrapeService(url);

    if (!$) {
      logger.info("Not Found");
      return constants.sendResponse(res, constants.RESPONSE_MESSAGES.NOT_FOUND, constants.RESPONSE_FLAGS.NOT_FOUND);
    }

    let pageTitle = $('title').text();
    let title = $("meta[property='og:title']").attr("content");
    let siteUrl = $("meta[property='og:url']").attr("content");
    let type = $("meta[property='og:type']").attr("content");
    let description = $("meta[property='og:description']").attr("content");
    let siteName = $("meta[property='og:site_name']").attr("content");
    let locale = $("meta[property='og:locale']").attr("content");
    let image = $("meta[property='og:image']").attr("content");

    const finalResponse = {
      pageTitle,
      title,
      siteUrl,
      type,
      description,
      siteName,
      locale,
      image
    };

    logger.info("Success");
    return constants.sendResponse(res, constants.RESPONSE_MESSAGES.SUCCESS, constants.RESPONSE_FLAGS.SUCCESS, finalResponse);

  } catch (error) {
    logger.error(error);
    return constants.sendResponse(res, constants.RESPONSE_MESSAGES.SOMETHING_WENT_WRONG, constants.RESPONSE_FLAGS.SOMETHING_WENT_WRONG);
  }
}

