"use strict";

const { commentUtilities } = require("../../..");  ///

const { editCommentPatchRequest } = commentUtilities;

function editCommentOperation(next, done, context) {
  const { repository, description, commentIdentifier, userAgent, gitHubAccessToken } = context;

  editCommentPatchRequest(repository, description, commentIdentifier, userAgent, gitHubAccessToken, (error, json) => {
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

module.exports = editCommentOperation;
