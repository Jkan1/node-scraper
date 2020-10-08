const Joi = require('joi');

const constants = require('../constants/constants');

exports.scrape = function (req, res, next) {
    let schema = Joi.object({
        url: Joi.string().max(500).required()
    })

    let validation = schema.validate(req.body);
    if (validation.error) {
        let errorReason =
            validation.error.details != undefined
                ? validation.error.details[0].message.replace(/[*][?][a-z]|[A-Z]|[0-9]\"/g, validation.error.details[0].path[0])
                : constants.RESPONSE_MESSAGES.PARAMETER_MISSING;
        logger.info("Validation Error");
        return constants.sendResponse(res, errorReason, 400);
    }
    next();
};

