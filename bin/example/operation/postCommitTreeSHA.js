"use strict";

const { commitUtilities } = require("../../../lib");  ///

const { commitTreeSHAPostRequest } = commitUtilities;

function postCommitTreeSHAOperation(next, done, context) {
  const { repository, baseTreeSHA, readmeFileSHA, readmeFilePath, metaJSONFileSHA, metaJSONFilePath, userAgent, gitHubAccessToken } = context,
        fileShAs = [
          readmeFileSHA,
          metaJSONFileSHA
        ],
        filePaths = [
          readmeFilePath,
          metaJSONFilePath
        ];

  commitTreeSHAPostRequest(repository, baseTreeSHA, fileShAs, filePaths, userAgent, gitHubAccessToken, (error, json) => {
    if (error) {
      done();

      return;
    }

    const { sha = null } = json;

    if (sha === null) {
      done();

      return;
    }

    const commitTreeSHA = sha; ///

    Object.assign(context, {
      commitTreeSHA
    });

    next();
  });
}

module.exports = postCommitTreeSHAOperation;
