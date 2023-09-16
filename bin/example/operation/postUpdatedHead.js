"use strict";

const { commitUtilities } = require("../../..");  ///

const { updatedHeadPostRequest } = commitUtilities;

function postUpdatedHeadOperation(next, done, context) {
  const { repository, commitSHA, userAgent, gitHubAccessToken } = context;

  updatedHeadPostRequest(repository, commitSHA, userAgent, gitHubAccessToken, (error, json) => {
    if (error) {
      done();

      return;
    }

    const { object = null } = json;

    if (object === null) {
      done();

      return;
    }

    next();
  });
}

module.exports = postUpdatedHeadOperation;
