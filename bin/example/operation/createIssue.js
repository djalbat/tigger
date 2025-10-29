"use strict";

const { issueUtilities } = require("../../../lib");  ///

const { createIssuePostRequest } = issueUtilities

function createIssueOperation(next, done, context) {
  const { repository, title, description, userAgent, gitHubAccessToken } = context;

  createIssuePostRequest(repository, title, description, userAgent, gitHubAccessToken, (error, json) => {
    if (error) {
      done();

      return;
    }

    const { message = null } = json;

    if (message !== null) {
      done();

      return;
    }

    const { number } = json,
          issueNumber = number; ///

    Object.assign(context, {
      issueNumber
    });

    next();
  });
}

module.exports = createIssueOperation;
