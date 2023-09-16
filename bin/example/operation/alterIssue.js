"use strict";

const { issueUtilities } = require("../../..");  ///

const { alterIssuePatchRequest } = issueUtilities;

function alterIssueOperation(next, done, context) {
  const { repository, state, issueNumber, userAgent, gitHubAccessToken } = context;

  alterIssuePatchRequest(repository, state, issueNumber, userAgent, gitHubAccessToken, (error, json) => {
    if (error) {
      done();

      return;
    }

    const { message = null } = json;

    if (message !== null) {
      done();

      return;
    }

    next();
  });
}

module.exports = alterIssueOperation;
