"use strict";

const { commentUtilities } = require("../../../lib");  ///

const { createCommentPostRequest } = commentUtilities;

function createCommentOperation(next, done, context) {
  const { repository, description, issueNumber, userAgent, gitHubAccessToken } = context;

  createCommentPostRequest(repository, description, issueNumber, userAgent, gitHubAccessToken, (error, json) => {
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

module.exports = createCommentOperation;
