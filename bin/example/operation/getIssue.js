"use strict";

const { issueUtilities } = require("../../..");  ///

const { issueGetRequest } = issueUtilities;

function getIssueOperation(next, done, context) {
  const { repository, issueNumber, userAgent, clientId, clientSecret } = context;

  issueGetRequest(repository, issueNumber, userAgent, clientId, clientSecret, (error, json) => {
    if (error) {
      done();

      return;
    }

    const { message = null } = json;

    if (message !== null) {
      done();

      return;
    }

    const issue = json; ///

    Object.assign(context, {
      issue
    });

    next();
  });
}

module.exports = getIssueOperation;
