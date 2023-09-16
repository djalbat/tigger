"use strict";

const { commitUtilities } = require("../../..");  ///

const { contentBlobSHAPostRequest } = commitUtilities;

function postReadmeFileContentOperation(next, done, context) {
  const { repository, userAgent, gitHubAccessToken, readmeFileContent } = context,
        content = readmeFileContent;  ///

  contentBlobSHAPostRequest(repository, content, userAgent, gitHubAccessToken, (error, json) => {
    if (error) {
      done();

      return;
    }

    const { sha = null } = json;

    if (sha === null) {
      done();

      return;
    }

    const readmeFileSHA = sha; ///

    Object.assign(context, {
      readmeFileSHA
    });

    next();
  });
}

module.exports = postReadmeFileContentOperation;
