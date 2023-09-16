"use strict";

const { commitUtilities } = require("../../..");  ///

const { latestCommitSHAGetRequest } = commitUtilities;

function getLatestCommitSHAOperation(next, done, context) {
  const { repository, userAgent, clientId, clientSecret } = context;

  latestCommitSHAGetRequest(repository, userAgent, clientId, clientSecret, (error, json) => {
    if (error) {
      done();

      return;
    }

    const { object = null } = json;

    if (object === null) {
      done();

      return;
    }

    const { sha } = object,
          latestCommitSHA = sha;  ///

    Object.assign(context, {
      latestCommitSHA
    });

    next();
  });
}

module.exports = getLatestCommitSHAOperation;
