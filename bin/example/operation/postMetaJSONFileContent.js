"use strict";

const { commitUtilities } = require("../../../lib");  ///

const { contentBlobSHAPostRequest } = commitUtilities;

function postMetaJSONFileContentOperation(next, done, context) {
  const { repository, userAgent, gitHubAccessToken, metaJSONFileContent } = context,
        content = metaJSONFileContent;  ///

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

    const metaJSONFileSHA = sha;

    Object.assign(context, {
      metaJSONFileSHA
    });

    next();
  });
}

module.exports = postMetaJSONFileContentOperation;
