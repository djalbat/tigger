"use strict";

const { issueUtilities } = require("../../../lib");  ///

const { issuesGetRequest } = issueUtilities;

function getIssuesOperation(next, done, context) {
  const { repository, state, userAgent, clientId, clientSecret } = context;

  issuesGetRequest(repository, state, userAgent, clientId, clientSecret, (error, json) => {
    if (error) {
      done();

      return;
    }

    const { message = null } = json;

    if (message !== null) {
      done();

      return;
    }

    const issues = json;  ///

    Object.assign(context, {
      issues
    });

    next();
  });
}

module.exports = getIssuesOperation;
