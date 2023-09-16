"use strict";

const { commentUtilities } = require("../../..");  ///

const { removeCommentDeleteRequest } = commentUtilities;

function removeCommentOperation(next, done, context) {
  const { repository, commentIdentifier, userAgent, gitHubAccessToken } = context;

  removeCommentDeleteRequest(repository, commentIdentifier, userAgent, gitHubAccessToken, (error, string) => {
    if (error) {
      done();

      return;
    }

    if (string !== "") {
      done();

      return;
    }

    next();
  });
}

module.exports = removeCommentOperation;
