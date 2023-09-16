"use strict";

const { issueUtilities } = require("../../..");  ///

const { editIssuePatchRequest } = issueUtilities;

function editIssueOperation(next, done, context) {
  const { repository, title, description, issueNumber, userAgent, gitHubAccessToken } = context;

  editIssuePatchRequest(repository, title, description, issueNumber, userAgent, gitHubAccessToken, (error, json) => {
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

module.exports = editIssueOperation;
