"use strict";

const { commitUtilities } = require("../../../lib");  ///

const { baseTreeSHAGetRequest } = commitUtilities

function getBaseTreeSHAOperation(next, done, context) {
  const { repository, userAgent, clientId, clientSecret, latestCommitSHA } = context;

  baseTreeSHAGetRequest(repository, latestCommitSHA, userAgent, clientId, clientSecret, (error, json) => {
    if (error) {
      done();

      return;
    }

    const { tree = null } = json;

    if (tree === null) {
      done();

      return;
    }

    const { sha } = tree,
          baseTreeSHA = sha;  ///

    Object.assign(context, {
      baseTreeSHA
    });

    next();
  });
}

module.exports = getBaseTreeSHAOperation;
