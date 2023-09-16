"use strict";

const { commentUtilities } = require("../../..");  ///

const { commentsGetRequest } = commentUtilities;

function getCommentsOperation(next, done, context) {
  const { repository, issueNumber, userAgent, clientId, clientSecret } = context;

  commentsGetRequest(repository, issueNumber, userAgent, clientId, clientSecret, (error, json) => {
    if (error) {
      done();

      return;
    }

    const { message = null } = json;

    if (message !== null) {
      done();

      return;
    }

    const { issue } = context,
          comments = json;  ///

    Object.assign(issue, {
      comments
    });

    next();
  });
}

module.exports = getCommentsOperation;
