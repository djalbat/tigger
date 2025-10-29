"use strict";

const { commitUtilities } = require("../../../lib");  ///

const { commitSHAPostRequest } = commitUtilities;

function postCommitSHAOperation(next, done, context) {
  const { repository, commitMessage, commitTreeSHA, latestCommitSHA, userAgent, gitHubAccessToken } = context;

  commitSHAPostRequest(repository, commitMessage, commitTreeSHA, latestCommitSHA, userAgent, gitHubAccessToken, (error, json) => {
    if (error) {
      done();

      return;
    }

    const { sha = null } = json;

    if (sha === null) {
      done();

      return;
    }

    const commitSHA = sha; ///

    Object.assign(context, {
      commitSHA
    });

    next();
  });
}

module.exports = postCommitSHAOperation;
