
const service = require('../services/service');
const constants = require('../constants/constants');

exports.scrape = scrape;

async function scrape(req, res) {
  try {
    let url = req.body.url;
    let result = await service.scrapeWebpage(url);

    if (!result) {
      logger.info("Not Found");
      return constants.sendResponse(res, constants.RESPONSE_MESSAGES.NOT_FOUND, constants.RESPONSE_FLAGS.NOT_FOUND);
    }

    logger.info("Success");
    return constants.sendResponse(res, constants.RESPONSE_MESSAGES.SUCCESS, constants.RESPONSE_FLAGS.SUCCESS, result);

  } catch (error) {
    logger.error(error);
    return constants.sendResponse(res, constants.RESPONSE_MESSAGES.SOMETHING_WENT_WRONG, constants.RESPONSE_FLAGS.SOMETHING_WENT_WRONG);
  }
}

